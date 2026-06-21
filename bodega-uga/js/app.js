/* ═══════════════════════════════════════════════
   BODEGA DE UGA — app.js
   Scroll-driven video experience + animations
   ═══════════════════════════════════════════════ */

/* ── Config ── */
const FRAME_COUNT = 238;
const FRAME_SPEED = 1.4;
const IMAGE_SCALE = 0.87;
const DARK_ENTER = 0.52;
const DARK_LEAVE = 0.65;

/* ── State ── */
const frames = new Array(FRAME_COUNT).fill(null);
let loadedCount = 0;
let currentFrame = 0;
let gsapReady = false;
let bgColor = '#0e0d0b';

/* ── Elements ── */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loader-bar');
const loaderPercent = document.getElementById('loader-percent');
const scrollContainer = document.getElementById('scroll-container');
const heroOverlay = document.getElementById('hero-overlay');
const darkOverlay = document.getElementById('dark-overlay');
const header = document.getElementById('site-header');

/* ══════════════════════════════════
   CANVAS SETUP
══════════════════════════════════ */
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  ctx.scale(dpr, dpr);
  if (frames[currentFrame]) drawFrame(currentFrame);
}

function sampleBgColor(img) {
  const tmpCanvas = document.createElement('canvas');
  tmpCanvas.width = 4;
  tmpCanvas.height = 4;
  const tmpCtx = tmpCanvas.getContext('2d');
  tmpCtx.drawImage(img, 0, 0, 4, 4);
  const d = tmpCtx.getImageData(0, 0, 1, 1).data;
  return `rgb(${d[0]},${d[1]},${d[2]})`;
}

function drawFrame(index) {
  const img = frames[index];
  if (!img) return;

  const cw = window.innerWidth;
  const ch = window.innerHeight;
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  const scale = Math.max(cw / iw, ch / ih) * IMAGE_SCALE;
  const dw = iw * scale;
  const dh = ih * scale;
  const dx = (cw - dw) / 2;
  const dy = (ch - dh) / 2;

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, cw, ch);
  ctx.drawImage(img, dx, dy, dw, dh);
}

/* ══════════════════════════════════
   FRAME PRELOADER
══════════════════════════════════ */
function padNum(n, digits) {
  return String(n).padStart(digits, '0');
}

function loadFrame(index) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      frames[index] = img;
      loadedCount++;

      // Sample bg every 20 frames
      if (index % 20 === 0) {
        try { bgColor = sampleBgColor(img); } catch (e) {}
      }

      const pct = Math.round((loadedCount / FRAME_COUNT) * 100);
      loaderBar.style.width = pct + '%';
      loaderPercent.textContent = pct + '%';

      // Draw first frame immediately
      if (index === 0) {
        resizeCanvas();
        drawFrame(0);
      }

      resolve();
    };
    img.onerror = () => { loadedCount++; resolve(); };
    img.src = `frames/frame_${padNum(index + 1, 4)}.webp`;
  });
}

async function preloadFrames() {
  // Phase 1: Load first 12 frames fast for quick first paint
  const phase1 = [];
  for (let i = 0; i < Math.min(12, FRAME_COUNT); i++) {
    phase1.push(loadFrame(i));
  }
  await Promise.all(phase1);

  // Phase 2: Load remaining frames in background
  const phase2 = [];
  for (let i = 12; i < FRAME_COUNT; i++) {
    phase2.push(loadFrame(i));
  }
  await Promise.all(phase2);

  // Hide loader
  setTimeout(() => {
    loader.classList.add('hidden');
    if (!gsapReady) initAnimations();
  }, 400);
}

/* ══════════════════════════════════
   LENIS SMOOTH SCROLL
══════════════════════════════════ */
let lenis;

function initLenis() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ══════════════════════════════════
   FRAME → SCROLL BINDING
══════════════════════════════════ */
function initFrameScroll() {
  ScrollTrigger.create({
    trigger: scrollContainer,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const accelerated = Math.min(self.progress * FRAME_SPEED, 1);
      const index = Math.min(
        Math.floor(accelerated * FRAME_COUNT),
        FRAME_COUNT - 1
      );
      if (index !== currentFrame) {
        currentFrame = index;
        requestAnimationFrame(() => drawFrame(currentFrame));
      }
    },
  });
}

/* ══════════════════════════════════
   HERO FADE
══════════════════════════════════ */
function initHeroFade() {
  const FADE_END = 0.15;
  ScrollTrigger.create({
    trigger: scrollContainer,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const p = self.progress;
      const opacity = Math.max(0, 1 - p / FADE_END);
      heroOverlay.style.opacity = opacity;
      heroOverlay.style.pointerEvents = opacity > 0.05 ? '' : 'none';
    },
  });
}

/* ══════════════════════════════════
   DARK OVERLAY
══════════════════════════════════ */
function initDarkOverlay() {
  const fadeRange = 0.04;
  ScrollTrigger.create({
    trigger: scrollContainer,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      const p = self.progress;
      let opacity = 0;
      if (p >= DARK_ENTER - fadeRange && p <= DARK_ENTER) {
        opacity = (p - (DARK_ENTER - fadeRange)) / fadeRange;
      } else if (p > DARK_ENTER && p < DARK_LEAVE) {
        opacity = 0.9;
      } else if (p >= DARK_LEAVE && p <= DARK_LEAVE + fadeRange) {
        opacity = 0.9 * (1 - (p - DARK_LEAVE) / fadeRange);
      }
      darkOverlay.style.opacity = opacity;
    },
  });
}

/* ══════════════════════════════════
   SECTION ANIMATIONS
══════════════════════════════════ */
function positionSections() {
  const totalH = scrollContainer.offsetHeight;
  document.querySelectorAll('.scroll-section').forEach((section) => {
    const enter = parseFloat(section.dataset.enter) / 100;
    const leave = parseFloat(section.dataset.leave) / 100;
    const midpoint = (enter + leave) / 2;
    const top = midpoint * totalH;
    section.style.top = top + 'px';
    section.style.transform = 'translateY(-50%)';
  });
}

function setupSectionAnimation(section) {
  const type = section.dataset.animation;
  const persist = section.dataset.persist === 'true';
  const enter = parseFloat(section.dataset.enter) / 100;
  const leave = parseFloat(section.dataset.leave) / 100;
  const WINDOW = 0.08;
  const totalH = scrollContainer.offsetHeight;

  const children = section.querySelectorAll(
    '.section-label, .section-heading, .section-body, .section-note, .cta-button, .btn-primary, .btn-outline, .cta-info, .stat, .stats-grid'
  );

  const tl = gsap.timeline({ paused: true });

  switch (type) {
    case 'fade-up':
      tl.from(children, {
        y: 50, opacity: 0, stagger: 0.12,
        duration: 0.9, ease: 'power3.out',
      });
      break;
    case 'scale-up':
      tl.from(children, {
        y: 40, scale: 0.88, opacity: 0, stagger: 0.12,
        duration: 1.0, ease: 'power2.out',
      });
      break;
    case 'rotate-in':
      tl.from(children, {
        y: 40, rotation: 3, opacity: 0, stagger: 0.1,
        duration: 0.9, ease: 'power3.out',
      });
      break;
    case 'stagger-up':
      tl.from(children, {
        y: 60, opacity: 0, stagger: 0.15,
        duration: 0.8, ease: 'power3.out',
      });
      break;
    case 'clip-reveal':
      tl.from(children, {
        clipPath: 'inset(100% 0 0 0)', opacity: 0, stagger: 0.15,
        duration: 1.2, ease: 'power4.inOut',
      });
      break;
    case 'blur-up':
      tl.from(children, {
        y: 50, opacity: 0, filter: 'blur(8px)', stagger: 0.12,
        duration: 1.0, ease: 'power3.out',
      });
      break;
    default:
      tl.from(children, {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      });
  }

  ScrollTrigger.create({
    trigger: scrollContainer,
    start: 'top top',
    end: 'bottom bottom',
    scrub: false,
    onUpdate: (self) => {
      const p = self.progress;
      const inZone = p >= enter - WINDOW && p <= leave + WINDOW;

      if (inZone) {
        section.classList.add('visible');
        // Calculate progress within window
        const localProgress = Math.max(0, Math.min(1,
          (p - (enter - WINDOW)) / (WINDOW * 2)
        ));
        if (localProgress > 0.1 && tl.progress() < 0.05) tl.play();
      } else {
        if (!persist) {
          section.classList.remove('visible');
          tl.pause(0);
        } else if (p > leave + WINDOW) {
          section.classList.add('visible');
          tl.play();
        }
      }
    },
  });
}

/* ══════════════════════════════════
   COUNTER ANIMATIONS
══════════════════════════════════ */
function initCounters() {
  document.querySelectorAll('.stat-number').forEach((el) => {
    const target = parseFloat(el.dataset.value);
    const decimals = parseInt(el.dataset.decimals || '0');
    const proxy = { val: 0 };

    gsap.fromTo(
      proxy,
      { val: 0 },
      {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate() {
          el.textContent = decimals > 0
            ? proxy.val.toFixed(decimals)
            : Math.round(proxy.val);
        },
        onComplete() {
          el.textContent = decimals > 0
            ? target.toFixed(decimals)
            : target;
        },
        scrollTrigger: {
          trigger: el.closest('.scroll-section') || el,
          containerAnimation: null,
          start: () => {
            const section = el.closest('.scroll-section');
            const enter = parseFloat(section?.dataset.enter || 52) / 100;
            const total = scrollContainer.offsetHeight;
            return `${enter * total}px top`;
          },
          toggleActions: 'play none none reset',
          scroller: null,
        },
      }
    );
  });
}

/* ══════════════════════════════════
   HEADER SCROLL BEHAVIOR
══════════════════════════════════ */
function initHeader() {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    if (s > 80) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    lastScroll = s;
  }, { passive: true });
}

/* ══════════════════════════════════
   SCROLL PROGRESS BAR
══════════════════════════════════ */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = Math.min(100, pct) + '%';
  }, { passive: true });
}

/* ══════════════════════════════════
   GALLERY REVEAL
══════════════════════════════════ */
function initGalleryReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            e.target.classList.add('revealed');
          }, i * 80);
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  items.forEach((item) => observer.observe(item));
}

/* ══════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════ */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ══════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════ */
function initCursor() {
  if (window.innerWidth <= 768) return;

  const cursorEl = document.getElementById('custom-cursor');
  const dot = cursorEl.querySelector('.cursor-dot');
  const ring = cursorEl.querySelector('.cursor-ring');

  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover states
  const hoverEls = document.querySelectorAll('a, button, .gallery-item, .ig-item, .faq-question');
  hoverEls.forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ══════════════════════════════════
   MOBILE HAMBURGER
══════════════════════════════════ */
function initMobileMenu() {
  const btn = document.getElementById('nav-hamburger');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    const spans = btn.querySelectorAll('span');
    if (menu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.transform = '';
    }
  });

  menu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      const spans = btn.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.transform = '';
    });
  });
}

/* ══════════════════════════════════
   SMOOTH ANCHOR SCROLL
══════════════════════════════════ */
function initAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ══════════════════════════════════
   MARQUEE PAUSE ON HOVER
══════════════════════════════════ */
function initMarquee() {
  document.querySelectorAll('.marquee-track').forEach((track) => {
    track.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    track.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
  });
}

/* ══════════════════════════════════
   STAT COUNTER via scroll position
══════════════════════════════════ */
function initStatsCounter() {
  const statsSection = document.querySelector('.section-stats');
  if (!statsSection) return;

  let triggered = false;

  ScrollTrigger.create({
    trigger: scrollContainer,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      const enter = parseFloat(statsSection.dataset.enter) / 100;
      if (self.progress >= enter - 0.02 && !triggered) {
        triggered = true;
        document.querySelectorAll('.stat-number').forEach((el) => {
          const target = parseFloat(el.dataset.value);
          const decimals = parseInt(el.dataset.decimals || '0');
          const proxy = { val: 0 };
          gsap.fromTo(
            proxy,
            { val: 0 },
            {
              val: target,
              duration: 2.2,
              ease: 'power2.out',
              onUpdate() {
                el.textContent = decimals > 0
                  ? proxy.val.toFixed(decimals)
                  : Math.round(proxy.val);
              },
              onComplete() {
                el.textContent = decimals > 0
                  ? target.toFixed(decimals)
                  : String(target);
              },
            }
          );
        });
      }
      if (self.progress < DARK_ENTER - 0.04) triggered = false;
    },
  });
}

/* ══════════════════════════════════
   MAIN INIT
══════════════════════════════════ */
function initAnimations() {
  gsapReady = true;
  gsap.registerPlugin(ScrollTrigger);

  initLenis();
  positionSections();
  initFrameScroll();
  initHeroFade();
  initDarkOverlay();
  initStatsCounter();

  document.querySelectorAll('.scroll-section').forEach(setupSectionAnimation);

  initHeader();
  initScrollProgress();
  initGalleryReveal();
  initFAQ();
  initCursor();
  initMobileMenu();
  initAnchorScroll();
  initMarquee();

  window.addEventListener('resize', () => {
    resizeCanvas();
    positionSections();
    ScrollTrigger.refresh();
  });
}

/* ── Boot ── */
window.addEventListener('DOMContentLoaded', () => {
  resizeCanvas();
  preloadFrames();
});
