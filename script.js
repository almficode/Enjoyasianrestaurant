/* ══════════════════════════════════════════════════════════════
   ENJOY ASIAN RESTAURANT — script.js  v4.0
   ✔ Multi-idioma real: EN · ES · DE · FR · NL
   ✔ Detección automática del idioma del navegador
   ✔ Respuestas IA a reseñas con Claude API
   ✔ Chatbot Claude API (con fallback local inteligente)
   ✔ Dish Finder Quiz
   ✔ Menú completo con imágenes reales
══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────
   TRADUCCIONES — Sistema multiidioma completo
   EN · ES · DE · FR · NL
───────────────────────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    nav_story:        'Story',
    nav_menu:         'Menu',
    nav_chefs:        'Chefs',
    nav_gallery:      'Gallery',
    nav_ai:           'AI Assistant',
    nav_reserve:      'Reserve',
    nav_reviews:      'Reviews',
    nav_reserve_long: 'Reserve a Table',
    nav_home:         'Home',
    nav_call:         'Call us',

    ai_back:          '← Back to ENJOY',
    ai_hero_title:    'ENJOY <em>AI Assistant</em>',
    ai_hero_sub:      'Ask anything — menu, allergens, reservations, the teppanyaki show, or anything else. Available 24/7 in 5 languages.',
    ai_status:        'ENJOY AI Assistant · Online',
    ai_chip_location: '📍 Location',
    ai_sidebar_title: 'What can I ask?',
    ai_card1_title:   'Menu & Dishes',
    ai_card1_desc:    'All 70+ dishes with descriptions, prices and allergens — sushi, teppanyaki, Thai, Chinese, dim sum and more.',
    ai_card2_title:   'Allergens & Diet',
    ai_card2_desc:    'Gluten-free, vegan, vegetarian, nut-free, shellfish-free — I\'ll guide you through every option.',
    ai_card3_title:   'Reservations',
    ai_card3_desc:    'How to book a table or a teppanyaki show. I can also take your details and connect you directly.',
    ai_card4_title:   '5 Languages',
    ai_card4_desc:    'Write in English, Spanish, German, French or Dutch — I\'ll reply in the same language automatically.',
    ai_quickinfo_title:'Quick Info',
    ai_qi_address:    '📍 Address',
    ai_qi_hours:       '🕐 Hours',
    ai_qi_phone:       '📞 Phone / WhatsApp',
    ai_qi_parking:     '🅿️ Parking',
    ai_qi_address_v:  'Av. de las Playas 21<br>Puerto del Carmen, Lanzarote',
    ai_qi_hours_v:     'Every day · 12:00 – 24:00',
    ai_qi_parking_v:   'Free public parking on Av. de las Playas',
    ai_sq_sushi:      'What sushi do you recommend?',
    ai_sq_gf:         'I have a gluten allergy, what can I eat?',
    ai_sq_veg:        'I am vegetarian, what dishes do you have?',
    ai_sq_spicy:      'I love spicy food, what do you recommend?',
    ai_sq_hours:      'What are your opening hours?',
    ai_sq_teppanyaki: 'How do I book a teppanyaki table?',
    ai_sq_cocktails:  'What cocktails do you have?',
    ai_sq_location:   'How do I get to the restaurant and where can I park?',
    chat_you_label:   'You',

    about_badge:   'Years of Excellence',
    strip_1:'Teppanyaki Show Cooking', strip_2:'Handcrafted Sushi',
    strip_3:'Beachfront Terrace',      strip_4:'Live Fire Cooking',
    strip_5:'Fresh Daily Produce',     strip_6:'Home Delivery & Take Away',
    strip_7:'TripAdvisor Top Rated',   strip_8:'Thai · Japanese · Chinese',
    cuisine_label: 'Four Cultures, One Table',
    cuisine_title: 'The Art of <em>Asian Cuisine</em>',
    cuisine_sushi:  'Sushi & Japanese',
    cuisine_teppa:  'Teppanyaki',
    cuisine_thai:   'Thai Kitchen',
    cuisine_chinese:'Chinese Classics',
    menu_label:    '70+ Dishes · 5 Cuisines',
    menu_title:    'The <em>Menu</em>',
    menu_btn:      '✦ Explore Full Menu',
    teppa_label:   'The Spectacle',
    teppa_title:   'Live Fire.<br><em>Pure Theatre.</em>',
    teppa_btn1:    'Book Teppanyaki Table',
    teppa_btn2:    'Call Us',
    chefs_label:   'The Artisans',
    chefs_title:   'Meet Our <em>Chefs</em>',
    chef1_role:    'Head Chef & Founder',
    chef1_title:   'Master of Asian Cuisine',
    chef2_role:    'Teppanyaki Chef',
    chef2_title:   'Chef Leo — The Teppanyaki Maestro',
    gallery_label: 'Visual Story',
    gallery_title: 'Life at <em>ENJOY</em>',
    quote_text:    '"Food is not just eating energy. It is an experience."',
    quote_attr:    '— The Philosophy of ENJOY Asian Restaurant',
    res_address_l: 'Address',
    res_hours_l:   'Opening Hours',
    res_phone_l:   'Phone',
    res_delivery_l:'Delivery & Take Away',
    res_hours_v:   'Every Day · 12:00 — 24:00',
    res_delivery_v:'Call to order',
    loc_label:     'Find Us',
    loc_title:     'On the <em>Beachfront</em>',
    loc_transport_l:'Getting Here',
    loc_parking_l: 'Parking',
    loc_btn:       '↗ Get Directions',
    footer_explore:'Explore',
    footer_cuisine:'Cuisine',
    footer_contact:'Contact',
    hero_line1:       'An Unforgettable',
    hero_line2:       'Asian Dining',
    hero_line3:       'Experience',
    hero_subbrand:    'Puerto del Carmen · Lanzarote',
    hero_reserve:     '✦ Reserve Table',
    hero_menu:        'View Menu →',
    stat_dishes:      'Dishes',
    stat_cuisines:    'Cuisines',
    stat_years:       'Years',
    about_label:      'Our Story',
    about_title:      'Where the Far East meets <em>Lanzarote</em>',
    about_text1:      'On the beachfront promenade of Puerto del Carmen, ENJOY Asian Restaurant has been delivering an extraordinary journey through Asian gastronomy for over three decades. Our open kitchen, fire-lit teppanyaki stage, and uncompromising pursuit of quality create an experience that lingers long after the last bite.',
    about_text2:      'From the delicate art of handcrafted sushi to the theatrical roar of the teppanyaki grill, every dish is a story — one of tradition, technique and passion for flavour.',
    stat_label1:      'Asian Cuisines',
    stat_label2:      'Dishes on Menu',
    stat_label3:      'Open Every Day',
    reviews_label:    'What Guests Say',
    reviews_title:    'Exceptional <em>Reviews</em>',
    reviews_based:    'Based on 340+ reviews',
    reviews_based_g:  'Based on 280+ reviews',
    reviews_combined: 'Combined Rating',
    reviews_total:    '620+ verified reviews',
    reviews_see_all:  'See all reviews →',
    reviews_see_all_g:'See on Google →',
    reviews_cta:      'Read All Reviews on TripAdvisor →',
    review_ai_btn:    '✦ See restaurant reply',
    ai_label:         'Powered by AI',
    ai_title:         'ENJOY <em>AI Assistant</em>',
    ai_subtitle:      'Ask anything about our 70+ dishes, allergens, the teppanyaki show, reservations or how to find us.',
    ai_chat_status:   'ENJOY AI Assistant · Online',
    ai_welcome:       '<strong>Irasshaimase! 🍣</strong><br><br>Welcome to ENJOY Asian Restaurant on the beachfront of Puerto del Carmen. I know our entire menu inside out.<br><br>Ask me anything — dishes, allergens, cocktails, the teppanyaki show, reservations, or how to find us!',
    ai_finder_title:  'Find My Perfect',
    ai_finder_italic: 'Dish',
    ai_finder_sub:    'AI-Powered Personalised Recommendation',
    chip_sushi:       '🍣 Sushi picks',
    chip_gf:          '⚠️ Gluten-free',
    chip_veg:         '🌿 Vegetarian',
    chip_spicy:       '🌶️ Spicy dishes',
    chip_hours:       '🕐 Hours',
    chip_teppanyaki:  '🔥 Teppanyaki',
    chip_cocktails:   '🍸 Cocktails',
    chip_parking:     '🅿️ Parking',
    chat_placeholder: 'Ask about menu, allergens, location...',
    quiz_q1:          'What kind of flavours are you in the mood for?',
    quiz_q2:          'Any dietary requirements?',
    quiz_q3:          'What type of experience appeals to you?',
    quiz_q4:          'Which cuisine draws you most?',
    quiz_opt1a: "🌿 Light & Fresh',   quiz_opt1b: '🍖 Rich & Savoury",
    quiz_opt1c: "🌶️ Spicy & Bold',   quiz_opt1d: '🍊 Sweet & Tangy",
    quiz_opt2a: "✅ No restrictions', quiz_opt2b: '🌿 Vegetarian",
    quiz_opt2c: "🌾 Gluten-Free',    quiz_opt2d: '🐟 Seafood only",
    quiz_opt3a: "🔥 Live Show (Teppanyaki)', quiz_opt3b: '🍽️ Sharing Plates",
    quiz_opt3c: "👤 Individual Dishes',     quiz_opt3d: '⚡ Quick & Light",
    quiz_opt4a: "🇯🇵 Japanese / Sushi', quiz_opt4b: '🇹🇭 Thai",
    quiz_opt4c: "🇨🇳 Chinese',          quiz_opt4d: '✨ Surprise me!",
    quiz_loading:     'Finding your perfect dish...',
    quiz_match:       '✦ Your Perfect Match',
    quiz_reserve:     'Reserve Now',
    quiz_again:       'Try Again',
    res_label:        'Your Table Awaits',
    res_title:        'Reserve a <em>Table</em>',
    res_address_l:    'Address',
    res_hours_l:      'Opening Hours',
    res_phone_l:      'Phone',
    res_delivery_l:   'Delivery & Take Away',
    res_delivery_v:   'Call to order',
    res_hours_v:      'Every Day · 12:00 — 24:00',
    res_wa_btn:       '📞 Reserve by Phone',
    form_fname:       "First Name', form_lname: 'Last Name",
    form_email:       "Email',      form_phone: 'Phone",
    form_date:        "Date',       form_time:  'Time",
    form_guests:      "Guests',     form_exp:   'Experience",
    form_requests:    'Special Requests',
    form_placeholder: 'Allergies, dietary requirements, special occasions...',
    form_name_ph:     "Your name', form_surname_ph: 'Your surname",
    form_submit:      '✦ Confirm Reservation',
    form_note:        'We will confirm within 2 hours by phone or email.',
    g1: "1 guest', g2: '2 guests', g3: '3 guests', g4: '4 guests",
    g5: "5 guests', g6: '6 guests', g7: '7+ guests (call us)",
    exp1: "Any table', exp2: 'Teppanyaki table', exp3: 'Terrace (seafront)",
    loc_label:        'Find Us',
    loc_title:        'On the <em>Beachfront</em>',
    loc_address_l:    "Address', loc_transport_l: 'Getting Here",
    loc_transport_v:  'Main seafront avenue. Bus stop 60m (Line 2). Taxi rank nearby.',
    loc_parking_l:    'Parking',
    loc_parking_v:    'Public parking on Av. de las Playas and adjacent streets.',
    loc_btn:          '↗ Get Directions',
    footer_tagline:   '"An unforgettable journey through the flavours of Asia, on the shores of Lanzarote."',
    footer_explore:   "Explore', footer_cuisine: 'Cuisine', footer_contact: 'Contact",
    footer_story:     "Our Story', footer_menu: 'The Menu', footer_chefs: 'Our Chefs",
    footer_gallery:   "Gallery',  footer_reviews: 'Reviews', footer_ai: 'AI Assistant",
    footer_sushi:     "Sushi & Japanese', footer_teppa: 'Teppanyaki",
    footer_thai:      "Thai Kitchen',     footer_chinese: 'Chinese Classics",
    footer_veg:       "Vegetarian',       footer_cocktails: 'Cocktails & Drinks",
    footer_copy:      '© 2026 ENJOY Asian Restaurant · Lanzarote',

    cuisine_desc_sushi: 'Hand-pressed nigiri, artisan maki rolls and ultra-fresh sashimi. The purest expression of Japanese culinary mastery.',
    cuisine_desc_teppa: "Chef Leo's live performance on the iron griddle — fire, knife artistry and theatre fused into an unforgettable spectacle.",
    cuisine_desc_thai: 'Fragrant curries, lemongrass-infused soups and perfectly balanced spice. Authentic Thai flavours on the shores of Lanzarote.',
    cuisine_desc_chinese: 'Dim sum, Peking duck and wok-fired masterpieces — centuries of Chinese tradition served with contemporary refinement.',
    menu_text: 'Sushi, teppanyaki, Thai, Chinese, dim sum, seafood, vegetarian, cocktails, desserts and more — all crafted with the freshest ingredients by Chef Wang and Chef Leo.',
    teppa_text: "The teppanyaki grill isn't just cooking — it's a stage. Watch Chef Leo command fire, steel and extraordinary ingredients into a performance as thrilling as the food is magnificent. Best experienced as a group.",
    chef1_bio: "Born in Fujian, China in 1964, Chef Wang studied at the Fujian Culinary School before coming to Spain in 1990. Working alongside master chefs in Barcelona and Bilbao, he built an extraordinary career. In 1995 he opened ENJOY on the beachfront of Puerto del Carmen. Over 30 years of experience. His rule: only the freshest produce, always.",
    chef2_bio: "Born in Japan in 1975, Leo studied culinary arts in Tokyo in 1992. He came to Europe in 1993, spent years in Holland refining his craft, and arrived in Spain in 2000. His teppanyaki performances — roaring flames, spinning utensils, perfectly cooked dishes — are the most spectacular show in Puerto del Carmen. Don't miss it.",
    chef1_tag1: 'Sushi Master',
    chef1_tag2: 'Chinese Cuisine',
    chef1_tag3: 'Thai Specialities',
    chef2_tag1: 'Live Fire',
    chef2_tag2: 'Teppanyaki Specialist',
    chef2_tag3: 'Show Cooking',
    chef2_tag4: 'Tokyo Trained',
    ai_subtitle: 'Ask anything about our 70+ dishes, allergens, the teppanyaki show, reservations or how to find us.',
    footer_story: 'Our Story',
    footer_menu: 'The Menu',
    footer_chefs: 'Our Chefs',
    footer_gallery: 'Gallery',
    footer_reviews: 'Reviews',
    footer_sushi: 'Sushi & Japanese',
    footer_teppa: 'Teppanyaki',
    footer_thai: 'Thai Kitchen',
    footer_chinese: 'Chinese Classics',
    footer_veg: 'Vegetarian',
    footer_cocktails: 'Cocktails & Drinks',
    call_tooltip: 'Call us',
    call_tooltip:     'Call us',
    teppanyaki_label: 'The Spectacle',
    teppanyaki_title: 'Live Fire.<br><em>Pure Theatre.</em>',
    teppanyaki_text:  "The teppanyaki grill isn't just cooking — it's a stage. Watch Chef Leo command fire, steel and extraordinary ingredients into a performance as thrilling as the food is magnificent.",
    teppanyaki_btn1:  'Book Teppanyaki Table',
    teppanyaki_btn2:  'Ask via WhatsApp',
    scroll_discover:  'Scroll to discover',
    cuisine_label:    'Four Cultures, One Table',
    cuisine_title:    'The Art of <em>Asian Cuisine</em>',
    menu_label:       '70+ Dishes · 5 Cuisines',
    menu_title:       'The <em>Menu</em>',
    menu_btn:         '✦ Explore Full Menu',
    chefs_label:      'The Artisans',
    chefs_title:      'Meet Our <em>Chefs</em>',
    gallery_label:    'Visual Story',
    gallery_title:    'Life at <em>ENJOY</em>',
    quote_text:       '"Food is not just eating energy. It is an experience."',
    quote_attr:       '— The Philosophy of ENJOY Asian Restaurant',
  },

  es: {
    nav_story:        'Historia',
    nav_menu:         'Menú',
    nav_chefs:        'Chefs',
    nav_gallery:      'Galería',
    nav_ai:           'Asistente IA',
    nav_reserve:      'Reservar',
    nav_reviews:      'Reseñas',
    nav_reserve_long: 'Reservar Mesa',
    nav_home:         'Inicio',
    nav_call:         'Llámanos',

    ai_back:          '← Volver a ENJOY',
    ai_hero_title:    'Asistente IA <em>ENJOY</em>',
    ai_hero_sub:      'Pregunta lo que quieras — menú, alérgenos, reservas, el show de teppanyaki, o cualquier otra cosa. Disponible 24/7 en 5 idiomas.',
    ai_status:        'Asistente IA ENJOY · En línea',
    ai_chip_location: '📍 Ubicación',
    ai_sidebar_title: '¿Qué puedo preguntar?',
    ai_card1_title:   'Menú y Platos',
    ai_card1_desc:    'Más de 70 platos con descripciones, precios y alérgenos — sushi, teppanyaki, tailandés, chino, dim sum y mucho más.',
    ai_card2_title:   'Alérgenos y Dietas',
    ai_card2_desc:    'Sin gluten, vegano, vegetariano, sin frutos secos, sin marisco — te guío por todas las opciones.',
    ai_card3_title:   'Reservas',
    ai_card3_desc:    'Cómo reservar una mesa o el show de teppanyaki. También puedo tomar tus datos y conectarte directamente.',
    ai_card4_title:   '5 Idiomas',
    ai_card4_desc:    'Escribe en español, inglés, alemán, francés o neerlandés — responderé automáticamente en el mismo idioma.',
    ai_quickinfo_title:'Información Rápida',
    ai_qi_address:    '📍 Dirección',
    ai_qi_hours:       '🕐 Horario',
    ai_qi_phone:       '📞 Teléfono / WhatsApp',
    ai_qi_parking:     '🅿️ Aparcamiento',
    ai_qi_address_v:  'Av. de las Playas 21<br>Puerto del Carmen, Lanzarote',
    ai_qi_hours_v:     'Todos los días · 12:00 – 24:00',
    ai_qi_parking_v:   'Aparcamiento público gratuito en Av. de las Playas',
    ai_sq_sushi:      '¿Qué sushi me recomiendas?',
    ai_sq_gf:         'Tengo alergia al gluten, ¿qué puedo comer?',
    ai_sq_veg:        'Soy vegetariano, ¿qué platos tenéis?',
    ai_sq_spicy:      'Me encanta la comida picante, ¿qué me recomiendas?',
    ai_sq_hours:      '¿Cuál es vuestro horario?',
    ai_sq_teppanyaki: '¿Cómo reservo una mesa de teppanyaki?',
    ai_sq_cocktails:  '¿Qué cócteles tenéis?',
    ai_sq_location:   '¿Cómo llego al restaurante y dónde puedo aparcar?',
    chat_you_label:   'Tú',

    about_badge:   'Años de Excelencia',
    strip_1:'Show de Teppanyaki',      strip_2:'Sushi Artesanal',
    strip_3:'Terraza Frente al Mar',   strip_4:'Cocina con Fuego Vivo',
    strip_5:'Productos Frescos',       strip_6:'Reparto a Domicilio',
    strip_7:'Top en TripAdvisor',      strip_8:'Tailandés · Japonés · Chino',
    cuisine_label: 'Cuatro Culturas, Una Mesa',
    cuisine_title: 'El Arte de la <em>Cocina Asiática</em>',
    cuisine_sushi:  'Sushi y Japonés',
    cuisine_teppa:  'Teppanyaki',
    cuisine_thai:   'Cocina Tailandesa',
    cuisine_chinese:'Clásicos Chinos',
    menu_label:    '70+ Platos · 5 Cocinas',
    menu_title:    'El <em>Menú</em>',
    menu_btn:      '✦ Ver Menú Completo',
    teppa_label:   'El Espectáculo',
    teppa_title:   'Fuego en Vivo.<br><em>Puro Teatro.</em>',
    teppa_btn1:    'Reservar Mesa Teppanyaki',
    teppa_btn2:    'Llámanos',
    chefs_label:   'Los Artesanos',
    chefs_title:   'Conoce a Nuestros <em>Chefs</em>',
    chef1_role:    'Chef Ejecutivo y Fundador',
    chef1_title:   'Maestro de la Cocina Asiática',
    chef2_role:    'Chef de Teppanyaki',
    chef2_title:   'Chef Leo — El Maestro del Teppanyaki',
    gallery_label: 'Historia Visual',
    gallery_title: 'La Vida en <em>ENJOY</em>',
    quote_text:    '"La comida no es solo energía. Es una experiencia."',
    quote_attr:    '— La Filosofía de ENJOY Asian Restaurant',
    res_address_l: 'Dirección',
    res_hours_l:   'Horario',
    res_phone_l:   'Teléfono',
    res_delivery_l:'Reparto y Take Away',
    res_hours_v:   'Todos los días · 12:00 — 24:00',
    res_delivery_v:'Llama para pedir',
    loc_label:     'Encuéntranos',
    loc_title:     'En el <em>Paseo Marítimo</em>',
    loc_transport_l:'Cómo Llegar',
    loc_parking_l: 'Aparcamiento',
    loc_btn:       '↗ Cómo Llegar',
    footer_explore:'Explorar',
    footer_cuisine:'Cocinas',
    footer_contact:'Contacto',
    hero_line1:       'Una Experiencia Asiática',
    hero_line2:       'Inolvidable',
    hero_line3:       'Frente Al Mar',
    hero_subbrand:    'Puerto del Carmen · Lanzarote',
    hero_reserve:     '✦ Reservar Mesa',
    hero_menu:        'Ver Menú →',
    stat_dishes:      'Platos',
    stat_cuisines:    'Cocinas',
    stat_years:       'Años',
    about_label:      'Nuestra Historia',
    about_title:      'Donde el Lejano Oriente se encuentra con <em>Lanzarote</em>',
    about_text1:      'En el paseo marítimo de Puerto del Carmen, ENJOY Asian Restaurant lleva más de tres décadas ofreciendo un viaje extraordinario por la gastronomía asiática. Nuestra cocina abierta, el espectáculo del teppanyaki y la búsqueda incansable de la calidad crean una experiencia que perdura mucho después del último bocado.',
    about_text2:      'Desde el delicado arte del sushi artesanal hasta el estruendo teatral de la plancha teppanyaki, cada plato es una historia de tradición, técnica y pasión por el sabor.',
    stat_label1:      'Cocinas Asiáticas',
    stat_label2:      'Platos en el Menú',
    stat_label3:      'Abierto Cada Día',
    reviews_label:    'Lo que Dicen Nuestros Clientes',
    reviews_title:    'Reseñas <em>Excepcionales</em>',
    reviews_based:    'Basado en más de 340 reseñas',
    reviews_based_g:  'Basado en más de 280 reseñas',
    reviews_combined: 'Valoración Global',
    reviews_total:    'Más de 620 reseñas verificadas',
    reviews_see_all:  'Ver todas las reseñas →',
    reviews_see_all_g:'Ver en Google →',
    reviews_cta:      'Leer todas las reseñas en TripAdvisor →',
    review_ai_btn:    '✦ Ver respuesta del restaurante',
    ai_label:         'Con Inteligencia Artificial',
    ai_title:         'Asistente <em>IA de ENJOY</em>',
    ai_subtitle:      'Pregúntanos cualquier cosa: platos, alérgenos, el espectáculo teppanyaki, reservas o cómo encontrarnos.',
    ai_chat_status:   'Asistente IA de ENJOY · En línea',
    ai_welcome:       '<strong>¡Bienvenido a ENJOY! 🍣</strong><br><br>Estoy aquí para ayudarte con todo lo relacionado con nuestro restaurante frente al mar en Puerto del Carmen.<br><br>Pregúntame sobre platos, alérgenos, el show de teppanyaki, reservas o cómo llegar.',
    ai_finder_title:  'Encuentra mi Plato',
    ai_finder_italic: 'Perfecto',
    ai_finder_sub:    'Recomendación Personalizada con IA',
    chip_sushi:       '🍣 Sushi',
    chip_gf:          '⚠️ Sin gluten',
    chip_veg:         '🌿 Vegetariano',
    chip_spicy:       '🌶️ Platos picantes',
    chip_hours:       '🕐 Horarios',
    chip_teppanyaki:  '🔥 Teppanyaki',
    chip_cocktails:   '🍸 Cócteles',
    chip_parking:     '🅿️ Aparcamiento',
    chat_placeholder: 'Pregunta sobre el menú, alérgenos, ubicación...',
    quiz_q1:          '¿Qué tipo de sabores te apetecen?',
    quiz_q2:          '¿Tienes alguna restricción alimentaria?',
    quiz_q3:          '¿Qué tipo de experiencia prefieres?',
    quiz_q4:          '¿Qué cocina te atrae más?',
    quiz_opt1a: "🌿 Ligero y Fresco',   quiz_opt1b: '🍖 Rico y Sabroso",
    quiz_opt1c: "🌶️ Picante y Potente', quiz_opt1d: '🍊 Dulce y Ácido",
    quiz_opt2a: "✅ Sin restricciones',  quiz_opt2b: '🌿 Vegetariano",
    quiz_opt2c: "🌾 Sin Gluten',        quiz_opt2d: '🐟 Solo Mariscos",
    quiz_opt3a: "🔥 Show en Vivo (Teppanyaki)', quiz_opt3b: '🍽️ Para Compartir",
    quiz_opt3c: "👤 Plato Individual',          quiz_opt3d: '⚡ Rápido y Ligero",
    quiz_opt4a: "🇯🇵 Japonés / Sushi', quiz_opt4b: '🇹🇭 Tailandés",
    quiz_opt4c: "🇨🇳 Chino',           quiz_opt4d: '✨ ¡Sorpréndeme!",
    quiz_loading:     'Buscando tu plato perfecto...',
    quiz_match:       '✦ Tu Plato Perfecto',
    quiz_reserve:     'Reservar Ahora',
    quiz_again:       'Intentar de Nuevo',
    res_label:        'Tu Mesa te Espera',
    res_title:        'Reserva una <em>Mesa</em>',
    res_address_l:    'Dirección',
    res_hours_l:      'Horario',
    res_phone_l:      'Teléfono',
    res_delivery_l:   'Reparto y Take Away',
    res_delivery_v:   'Llama para pedir',
    res_hours_v:      'Todos los días · 12:00 — 24:00',
    res_wa_btn:       '📞 Reservar por Teléfono',
    form_fname:       "Nombre', form_lname: 'Apellidos",
    form_email:       "Email',  form_phone: 'Teléfono",
    form_date:        "Fecha',  form_time:  'Hora",
    form_guests:      "Personas', form_exp: 'Experiencia",
    form_requests:    'Peticiones Especiales',
    form_placeholder: 'Alergias, preferencias dietéticas, ocasiones especiales...',
    form_name_ph:     "Tu nombre', form_surname_ph: 'Tus apellidos",
    form_submit:      '✦ Confirmar Reserva',
    form_note:        'Confirmaremos tu reserva en 2 horas por teléfono o email.',
    g1:'1 persona', g2:'2 personas', g3:'3 personas', g4:'4 personas',
    g5:'5 personas', g6:'6 personas', g7:'7+ personas (llámanos)',
    exp1:'Cualquier mesa', exp2:'Mesa de teppanyaki', exp3:'Terraza (frente al mar)',
    loc_label:        'Encuéntranos',
    loc_title:        'En el <em>Paseo Marítimo</em>',
    loc_address_l:    "Dirección', loc_transport_l: 'Cómo Llegar",
    loc_transport_v:  'En la avenida principal frente al mar. Parada de bus a 60m (Línea 2). Parada de taxi cercana.',
    loc_parking_l:    'Aparcamiento',
    loc_parking_v:    'Aparcamiento público en la Av. de las Playas y calles adyacentes.',
    loc_btn:          '↗ Cómo Llegar',
    footer_tagline:   '"Un viaje inolvidable por los sabores de Asia, en las orillas de Lanzarote."',
    footer_explore:   "Explorar', footer_cuisine: 'Cocinas', footer_contact: 'Contacto",
    footer_story:     "Nuestra Historia', footer_menu: 'El Menú', footer_chefs: 'Nuestros Chefs",
    footer_gallery:   "Galería', footer_reviews: 'Reseñas', footer_ai: 'Asistente IA",
    footer_sushi:     "Sushi y Japonés', footer_teppa: 'Teppanyaki",
    footer_thai:      "Cocina Tailandesa', footer_chinese: 'Clásicos Chinos",
    footer_veg:       "Vegetariano', footer_cocktails: 'Cócteles y Bebidas",
    footer_copy:      '© 2026 ENJOY Asian Restaurant · Lanzarote',

    cuisine_desc_sushi: 'Nigiri prensado a mano, makis artesanales y sashimi ultrafresco. La expresión más pura de la maestría culinaria japonesa.',
    cuisine_desc_teppa: 'La actuación en vivo del Chef Leo en la plancha — fuego, destreza con el cuchillo y teatro fusionados en un espectáculo inolvidable.',
    cuisine_desc_thai: 'Currys aromáticos, sopas con hierba limón y especias perfectamente equilibradas. Sabores tailandeses auténticos en las orillas de Lanzarote.',
    cuisine_desc_chinese: 'Dim sum, pato pekín y maravillas del wok — siglos de tradición china servidos con refinamiento contemporáneo.',
    menu_text: 'Sushi, teppanyaki, tailandés, chino, dim sum, mariscos, vegetariano, cócteles, postres y más — todo elaborado con los ingredientes más frescos por el Chef Wang y el Chef Leo.',
    teppa_text: "La plancha teppanyaki no es solo cocinar — es un escenario. Observa al Chef Leo dominar el fuego, el acero y los ingredientes más extraordinarios en una actuación tan emocionante como deliciosa. Mejor vivido en grupo.",
    chef1_bio: 'Nacido en Fujian, China, en 1964, el Chef Wang estudió en la Escuela Culinaria de Fujian antes de llegar a España en 1990. Trabajando junto a maestros chefs en Barcelona y Bilbao, forjó una carrera extraordinaria. En 1995 abrió ENJOY en el paseo marítimo de Puerto del Carmen. Más de 30 años de experiencia. Su regla: solo los productos más frescos, siempre.',
    chef2_bio: "Nacido en Japón en 1975, Leo estudió artes culinarias en Tokio en 1992. Llegó a Europa en 1993, pasó años en Holanda perfeccionando su oficio, y llegó a España en 2000. Sus actuaciones de teppanyaki — llamas rugientes, utensilios girando, platos perfectamente cocinados — son el espectáculo más impresionante de Puerto del Carmen.",
    chef1_tag1: 'Maestro del Sushi',
    chef1_tag2: 'Cocina China',
    chef1_tag3: 'Especialidades Tailandesas',
    chef2_tag1: 'Fuego Vivo',
    chef2_tag2: 'Especialista Teppanyaki',
    chef2_tag3: 'Show Cooking',
    chef2_tag4: 'Formado en Tokio',
    ai_subtitle: 'Pregunta cualquier cosa sobre nuestros 70+ platos, alérgenos, el show de teppanyaki, reservas o cómo encontrarnos.',
    footer_story: 'Nuestra Historia',
    footer_menu: 'El Menú',
    footer_chefs: 'Nuestros Chefs',
    footer_gallery: 'Galería',
    footer_reviews: 'Reseñas',
    footer_sushi: 'Sushi y Japonés',
    footer_teppa: 'Teppanyaki',
    footer_thai: 'Cocina Tailandesa',
    footer_chinese: 'Clásicos Chinos',
    footer_veg: 'Vegetariano',
    footer_cocktails: 'Cócteles y Bebidas',
    call_tooltip: 'Llámanos',
    call_tooltip:     'Llámanos',
    teppanyaki_label: 'El Espectáculo',
    teppanyaki_title: 'Fuego en Vivo.<br><em>Puro Teatro.</em>',
    teppanyaki_text:  'La plancha teppanyaki no es solo cocinar — es un escenario. El Chef Leo domina el fuego, el acero y los mejores ingredientes en una actuación tan emocionante como deliciosa.',
    teppanyaki_btn1:  'Reservar Mesa Teppanyaki',
    teppanyaki_btn2:  'Preguntar por WhatsApp',
    scroll_discover:  'Descubrir',
    cuisine_label:    'Cuatro Culturas, Una Mesa',
    cuisine_title:    'El Arte de la <em>Cocina Asiática</em>',
    menu_label:       '70+ Platos · 5 Cocinas',
    menu_title:       'El <em>Menú</em>',
    menu_btn:         '✦ Ver Menú Completo',
    chefs_label:      'Los Artesanos',
    chefs_title:      'Conoce a Nuestros <em>Chefs</em>',
    gallery_label:    'Historia Visual',
    gallery_title:    'La Vida en <em>ENJOY</em>',
    quote_text:       '"La comida no es solo energía. Es una experiencia."',
    quote_attr:       '— La Filosofía de ENJOY Asian Restaurant',
  },

  de: {
    nav_story:        'Geschichte',
    nav_menu:         'Speisekarte',
    nav_chefs:        'Chefs',
    nav_gallery:      'Galerie',
    nav_ai:           'KI-Assistent',
    nav_reserve:      'Reservieren',
    nav_reviews:      'Bewertungen',
    nav_reserve_long: 'Tisch Reservieren',
    nav_home:         'Startseite',
    nav_call:         'Rufen Sie uns an',

    ai_back:          '← Zurück zu ENJOY',
    ai_hero_title:    'ENJOY <em>KI-Assistent</em>',
    ai_hero_sub:      'Fragen Sie alles — Speisekarte, Allergene, Reservierungen, die Teppanyaki-Show oder etwas anderes. 24/7 in 5 Sprachen verfügbar.',
    ai_status:        'ENJOY KI-Assistent · Online',
    ai_chip_location: '📍 Standort',
    ai_sidebar_title: 'Was kann ich fragen?',
    ai_card1_title:   'Speisekarte & Gerichte',
    ai_card1_desc:    'Über 70 Gerichte mit Beschreibungen, Preisen und Allergenen — Sushi, Teppanyaki, Thai, Chinesisch, Dim Sum und mehr.',
    ai_card2_title:   'Allergene & Ernährung',
    ai_card2_desc:    'Glutenfrei, vegan, vegetarisch, nussfrei, ohne Schalentiere — ich führe Sie durch alle Optionen.',
    ai_card3_title:   'Reservierungen',
    ai_card3_desc:    'Wie Sie einen Tisch oder die Teppanyaki-Show buchen. Ich kann auch Ihre Daten aufnehmen und Sie direkt verbinden.',
    ai_card4_title:   '5 Sprachen',
    ai_card4_desc:    'Schreiben Sie auf Englisch, Spanisch, Deutsch, Französisch oder Niederländisch — ich antworte automatisch in derselben Sprache.',
    ai_quickinfo_title:'Kurzinfo',
    ai_qi_address:    '📍 Adresse',
    ai_qi_hours:       '🕐 Öffnungszeiten',
    ai_qi_phone:       '📞 Telefon / WhatsApp',
    ai_qi_parking:     '🅿️ Parken',
    ai_qi_address_v:  'Av. de las Playas 21<br>Puerto del Carmen, Lanzarote',
    ai_qi_hours_v:     'Täglich · 12:00 – 24:00',
    ai_qi_parking_v:   'Kostenlose öffentliche Parkplätze auf der Av. de las Playas',
    ai_sq_sushi:      'Welches Sushi empfehlen Sie?',
    ai_sq_gf:         'Ich habe eine Glutenallergie, was kann ich essen?',
    ai_sq_veg:        'Ich bin Vegetarier, welche Gerichte haben Sie?',
    ai_sq_spicy:      'Ich liebe scharfes Essen, was empfehlen Sie?',
    ai_sq_hours:      'Wie sind Ihre Öffnungszeiten?',
    ai_sq_teppanyaki: 'Wie buche ich einen Teppanyaki-Tisch?',
    ai_sq_cocktails:  'Welche Cocktails haben Sie?',
    ai_sq_location:   'Wie komme ich zum Restaurant und wo kann ich parken?',
    chat_you_label:   'Sie',

    about_badge:   'Jahre Exzellenz',
    strip_1:'Teppanyaki-Show',         strip_2:'Handgemachtes Sushi',
    strip_3:'Strandterrasse',          strip_4:'Live-Feuer-Kochen',
    strip_5:'Frische Tagesprodukte',   strip_6:'Lieferservice',
    strip_7:'TripAdvisor Top',         strip_8:'Thai · Japanisch · Chinesisch',
    cuisine_label: 'Vier Kulturen, Ein Tisch',
    cuisine_title: 'Die Kunst der <em>Asiatischen Küche</em>',
    cuisine_sushi:  'Sushi & Japanisch',
    cuisine_teppa:  'Teppanyaki',
    cuisine_thai:   'Thaiküche',
    cuisine_chinese:'Chinesische Klassiker',
    menu_label:    '70+ Gerichte · 5 Küchen',
    menu_title:    'Die <em>Speisekarte</em>',
    menu_btn:      '✦ Vollständige Speisekarte',
    teppa_label:   'Das Spektakel',
    teppa_title:   'Lebendiges Feuer.<br><em>Reines Theater.</em>',
    teppa_btn1:    'Teppanyaki-Tisch Buchen',
    teppa_btn2:    'Anrufen',
    chefs_label:   'Die Handwerker',
    chefs_title:   'Lernen Sie Unsere <em>Chefs</em> Kennen',
    chef1_role:    'Chefkoch & Gründer',
    chef1_title:   'Meister der Asiatischen Küche',
    chef2_role:    'Teppanyaki-Koch',
    chef2_title:   'Chef Leo — Der Teppanyaki-Meister',
    gallery_label: 'Visuelle Geschichte',
    gallery_title: 'Das Leben im <em>ENJOY</em>',
    quote_text:    '"Essen ist nicht nur Energie. Es ist ein Erlebnis."',
    quote_attr:    '— Die Philosophie des ENJOY Asian Restaurant',
    res_address_l: 'Adresse',
    res_hours_l:   'Öffnungszeiten',
    res_phone_l:   'Telefon',
    res_delivery_l:'Lieferung & Abholung',
    res_hours_v:   'Täglich · 12:00 — 24:00',
    res_delivery_v:'Anrufen für Bestellungen',
    loc_label:     'Uns Finden',
    loc_title:     'An der <em>Strandpromenade</em>',
    loc_transport_l:'Anreise',
    loc_parking_l: 'Parken',
    loc_btn:       '↗ Wegbeschreibung',
    footer_explore:'Entdecken',
    footer_cuisine:'Küchen',
    footer_contact:'Kontakt',
    hero_line1:       'Ein Unvergessliches',
    hero_line2:       'Asiatisches Erlebnis',
    hero_line3:       'Direkt Am Meer',
    hero_subbrand:    'Puerto del Carmen · Lanzarote',
    hero_reserve:     '✦ Tisch Reservieren',
    hero_menu:        'Speisekarte →',
    stat_dishes:      'Gerichte',
    stat_cuisines:    'Küchen',
    stat_years:       'Jahre',
    about_label:      'Unsere Geschichte',
    about_title:      'Wo der Ferne Osten auf <em>Lanzarote</em> trifft',
    about_text1:      'An der Strandpromenade von Puerto del Carmen bietet das ENJOY Asian Restaurant seit über drei Jahrzehnten eine außergewöhnliche Reise durch die asiatische Gastronomie. Unsere offene Küche, die Teppanyaki-Bühne und unser unnachgiebiger Qualitätsanspruch schaffen ein Erlebnis, das lange nach dem letzten Bissen in Erinnerung bleibt.',
    about_text2:      'Vom zarten Handwerk des Sushis bis zum theatralischen Spektakel des Teppanyaki-Grills ist jedes Gericht eine Geschichte aus Tradition, Technik und Leidenschaft.',
    stat_label1:      'Asiatische Küchen',
    stat_label2:      'Gerichte auf der Karte',
    stat_label3:      'Täglich Geöffnet',
    reviews_label:    'Was Gäste Sagen',
    reviews_title:    'Außergewöhnliche <em>Bewertungen</em>',
    reviews_based:    'Basierend auf 340+ Bewertungen',
    reviews_based_g:  'Basierend auf 280+ Bewertungen',
    reviews_combined: 'Gesamtbewertung',
    reviews_total:    '620+ verifizierte Bewertungen',
    reviews_see_all:  'Alle Bewertungen →',
    reviews_see_all_g:'Auf Google ansehen →',
    reviews_cta:      'Alle Bewertungen auf TripAdvisor →',
    review_ai_btn:    '✦ Antwort des Restaurants',
    ai_label:         'KI-gestützt',
    ai_title:         'ENJOY <em>KI-Assistent</em>',
    ai_subtitle:      'Fragen Sie uns alles über unsere 70+ Gerichte, Allergene, die Teppanyaki-Show, Reservierungen oder wie Sie uns finden.',
    ai_chat_status:   'ENJOY KI-Assistent · Online',
    ai_welcome:       '<strong>Herzlich Willkommen! 🍣</strong><br><br>Willkommen im ENJOY Asian Restaurant an der Strandpromenade von Puerto del Carmen. Ich kenne unsere gesamte Speisekarte in- und auswendig.<br><br>Fragen Sie mich alles — Gerichte, Allergene, die Teppanyaki-Show, Reservierungen oder wie Sie uns finden!',
    ai_finder_title:  'Mein perfektes',
    ai_finder_italic: 'Gericht finden',
    ai_finder_sub:    'KI-gestützte persönliche Empfehlung',
    chip_sushi:       '🍣 Sushi',
    chip_gf:          '⚠️ Glutenfrei',
    chip_veg:         '🌿 Vegetarisch',
    chip_spicy:       '🌶️ Scharfe Gerichte',
    chip_hours:       '🕐 Öffnungszeiten',
    chip_teppanyaki:  '🔥 Teppanyaki',
    chip_cocktails:   '🍸 Cocktails',
    chip_parking:     '🅿️ Parken',
    chat_placeholder: 'Fragen zur Speisekarte, Allergenen, Standort...',
    quiz_q1:          'Welche Aromen bevorzugen Sie heute?',
    quiz_q2:          'Haben Sie Ernährungsanforderungen?',
    quiz_q3:          'Welches Erlebnis bevorzugen Sie?',
    quiz_q4:          'Welche Küche zieht Sie an?',
    quiz_opt1a:'🌿 Leicht & Frisch', quiz_opt1b:'🍖 Würzig & Herzhaft',
    quiz_opt1c:'🌶️ Scharf & Kräftig',quiz_opt1d:'🍊 Süß & Sauer',
    quiz_opt2a:'✅ Keine Einschränkungen',quiz_opt2b:'🌿 Vegetarisch',
    quiz_opt2c:'🌾 Glutenfrei',       quiz_opt2d:'🐟 Nur Meeresfrüchte',
    quiz_opt3a:'🔥 Live-Show (Teppanyaki)',quiz_opt3b:'🍽️ Zum Teilen',
    quiz_opt3c:'👤 Einzelgerichte',        quiz_opt3d:'⚡ Schnell & Leicht',
    quiz_opt4a:'🇯🇵 Japanisch / Sushi',quiz_opt4b:'🇹🇭 Thai',
    quiz_opt4c:'🇨🇳 Chinesisch',      quiz_opt4d:'✨ Überrasch mich!',
    quiz_loading:'Ihr perfektes Gericht wird gesucht...',
    quiz_match:  '✦ Ihr perfektes Gericht',
    quiz_reserve:'Jetzt Reservieren',
    quiz_again:  'Neu versuchen',
    res_label:   'Ihr Tisch Wartet',
    res_title:   'Tisch <em>Reservieren</em>',
    res_address_l:'Adresse', res_hours_l:'Öffnungszeiten',
    res_phone_l: "Telefon', res_delivery_l:'Lieferung & Take Away",
    res_delivery_v:'Anrufen für Bestellungen',
    res_hours_v: 'Täglich · 12:00 — 24:00',
    res_wa_btn:  '📞 Telefonisch Reservieren',
    form_fname:'Vorname', form_lname:'Nachname',
    form_email:'E-Mail', form_phone:'Telefon',
    form_date:'Datum', form_time:'Uhrzeit',
    form_guests:'Personen', form_exp:'Erlebnis',
    form_requests:'Besondere Wünsche',
    form_placeholder:'Allergien, Ernährungsanforderungen, besondere Anlässe...',
    form_name_ph:'Ihr Name', form_surname_ph:'Ihr Nachname',
    form_submit:'✦ Reservierung Bestätigen',
    form_note:'Wir bestätigen Ihre Reservierung innerhalb von 2 Stunden per Telefon oder E-Mail.',
    g1:'1 Person',g2:'2 Personen',g3:'3 Personen',g4:'4 Personen',
    g5:'5 Personen',g6:'6 Personen',g7:'7+ Personen (anrufen)',
    exp1:'Beliebiger Tisch',exp2:'Teppanyaki-Tisch',exp3:'Terrasse (Strandblick)',
    loc_label:'Uns Finden', loc_title:'An der <em>Strandpromenade</em>',
    loc_address_l:'Adresse', loc_transport_l:'Anreise',
    loc_transport_v:'An der Hauptstrandpromenade. Bushaltestelle 60m (Linie 2). Taxistand in der Nähe.',
    loc_parking_l:'Parken',
    loc_parking_v:'Öffentliche Parkplätze auf der Av. de las Playas und den Nebenstraßen.',
    loc_btn:'↗ Wegbeschreibung',
    footer_tagline:'"Eine unvergessliche Reise durch die Aromen Asiens an den Küsten Lanzarotes."',
    footer_explore:'Entdecken',footer_cuisine:'Küchen',footer_contact:'Kontakt',
    footer_story:'Unsere Geschichte',footer_menu:'Speisekarte',footer_chefs:'Unsere Chefs',
    footer_gallery:'Galerie',footer_reviews:'Bewertungen',footer_ai:'KI-Assistent',
    footer_sushi:'Sushi & Japanisch',footer_teppa:'Teppanyaki',
    footer_thai:'Thaiküche',footer_chinese:'Chinesische Klassiker',
    footer_veg:'Vegetarisch',footer_cocktails:'Cocktails & Getränke',
    footer_copy:'© 2026 ENJOY Asian Restaurant · Lanzarote',

    cuisine_desc_sushi: 'Handgepresste Nigiri, handwerkliche Maki-Rollen und ultrafrisches Sashimi. Der reinste Ausdruck japanischer Kochkunst.',
    cuisine_desc_teppa: 'Chef Leos Live-Auftritt auf dem Eisengrill — Feuer, Messerkünste und Theater zu einem unvergesslichen Spektakel vereint.',
    cuisine_desc_thai: 'Aromatische Currys, Zitronengras-Suppen und perfekt ausgewogene Gewürze. Authentische Thai-Aromen an den Ufern Lanzarotes.',
    cuisine_desc_chinese: 'Dim Sum, Pekingente und Wok-Meisterwerke — Jahrhunderte chinesischer Tradition mit zeitgenössischer Raffinesse.',
    menu_text: 'Sushi, Teppanyaki, Thai, Chinesisch, Dim Sum, Meeresfrüchte, Vegetarisch, Cocktails, Desserts und mehr — alles mit den frischesten Zutaten von Chef Wang und Chef Leo zubereitet.',
    teppa_text: 'Der Teppanyaki-Grill ist nicht nur Kochen — er ist eine Bühne. Beobachten Sie Chef Leo, wie er Feuer, Stahl und außergewöhnliche Zutaten in eine Vorstellung verwandelt, die so aufregend ist wie das Essen köstlich schmeckt.',
    chef1_bio: 'Chef Wang wurde 1964 in Fujian, China geboren und studierte an der Fujian Culinary School, bevor er 1990 nach Spanien kam. In Barcelona und Bilbao arbeitete er mit Meisterköchen und baute eine außergewöhnliche Karriere auf. 1995 eröffnete er ENJOY an der Strandpromenade von Puerto del Carmen. Über 30 Jahre Erfahrung.',
    chef2_bio: 'Leo wurde 1975 in Japan geboren und studierte 1992 kulinarische Künste in Tokio. Er kam 1993 nach Europa, verbrachte Jahre in Holland und kam 2000 nach Spanien. Seine Teppanyaki-Aufführungen sind das spektakulärste Show in Puerto del Carmen.',
    chef1_tag1: 'Sushi-Meister',
    chef1_tag2: 'Chinesische Küche',
    chef1_tag3: 'Thai-Spezialitäten',
    chef2_tag1: 'Lebendiges Feuer',
    chef2_tag2: 'Teppanyaki-Spezialist',
    chef2_tag3: 'Show-Kochen',
    chef2_tag4: 'In Tokio ausgebildet',
    ai_subtitle: 'Fragen Sie alles über unsere 70+ Gerichte, Allergene, die Teppanyaki-Show, Reservierungen oder wie Sie uns finden.',
    footer_story: 'Unsere Geschichte',
    footer_menu: 'Speisekarte',
    footer_chefs: 'Unsere Chefs',
    footer_gallery: 'Galerie',
    footer_reviews: 'Bewertungen',
    footer_sushi: 'Sushi & Japanisch',
    footer_teppa: 'Teppanyaki',
    footer_thai: 'Thaiküche',
    footer_chinese: 'Chinesische Klassiker',
    footer_veg: 'Vegetarisch',
    footer_cocktails: 'Cocktails & Getränke',
    call_tooltip: 'Rufen Sie uns an',
    call_tooltip:'Rufen Sie uns an',
    teppanyaki_label:'Das Spektakel',
    teppanyaki_title:'Lebendiges Feuer.<br><em>Reines Theater.</em>',
    teppanyaki_text:'Der Teppanyaki-Grill ist nicht nur Kochen — er ist eine Bühne. Chef Leo beherrscht Feuer, Stahl und außergewöhnliche Zutaten in einer Show, die so aufregend ist wie das Essen herrlich schmeckt.',
    teppanyaki_btn1:'Teppanyaki-Tisch Buchen',
    teppanyaki_btn2:'Per WhatsApp Anfragen',
    scroll_discover:'Entdecken',
    cuisine_label:'Vier Kulturen, Ein Tisch',
    cuisine_title:'Die Kunst der <em>Asiatischen Küche</em>',
    menu_label:'70+ Gerichte · 5 Küchen',
    menu_title:'Die <em>Speisekarte</em>',
    menu_btn:'✦ Vollständige Speisekarte',
    chefs_label:'Die Handwerker',
    chefs_title:'Lernen Sie Unsere <em>Chefs</em> Kennen',
    gallery_label:'Visuelle Geschichte',
    gallery_title:'Das Leben im <em>ENJOY</em>',
    quote_text:'"Essen ist nicht nur Energie. Es ist ein Erlebnis."',
    quote_attr:'— Die Philosophie des ENJOY Asian Restaurant',
  },

  fr: {
    nav_story:'Histoire',nav_menu:'Menu',nav_chefs:'Chefs',
    nav_gallery:'Galerie',nav_ai:'Assistant IA',nav_reserve:'Réserver',
    nav_reviews:'Avis',nav_reserve_long:'Réserver une Table',
    nav_home:'Accueil',nav_call:'Appelez-nous',

    ai_back:'← Retour à ENJOY',
    ai_hero_title:'Assistant IA <em>ENJOY</em>',
    ai_hero_sub:'Demandez-moi tout — menu, allergènes, réservations, le show teppanyaki, ou autre chose. Disponible 24/7 en 5 langues.',
    ai_status:'Assistant IA ENJOY · En ligne',
    ai_chip_location:'📍 Emplacement',
    ai_sidebar_title:'Que puis-je demander ?',
    ai_card1_title:'Menu & Plats',
    ai_card1_desc:'Plus de 70 plats avec descriptions, prix et allergènes — sushi, teppanyaki, thaï, chinois, dim sum et plus.',
    ai_card2_title:'Allergènes & Régimes',
    ai_card2_desc:'Sans gluten, vegan, végétarien, sans noix, sans crustacés — je vous guide à travers toutes les options.',
    ai_card3_title:'Réservations',
    ai_card3_desc:'Comment réserver une table ou le show teppanyaki. Je peux aussi prendre vos coordonnées et vous mettre en contact directement.',
    ai_card4_title:'5 Langues',
    ai_card4_desc:'Écrivez en anglais, espagnol, allemand, français ou néerlandais — je répondrai automatiquement dans la même langue.',
    ai_quickinfo_title:'Infos Rapides',
    ai_qi_address:'📍 Adresse',
    ai_qi_hours:'🕐 Horaires',
    ai_qi_phone:'📞 Téléphone / WhatsApp',
    ai_qi_parking:'🅿️ Parking',
    ai_qi_address_v:'Av. de las Playas 21<br>Puerto del Carmen, Lanzarote',
    ai_qi_hours_v:'Tous les jours · 12h00 – 24h00',
    ai_qi_parking_v:'Parking public gratuit sur l\'Av. de las Playas',
    ai_sq_sushi:'Quel sushi recommandez-vous ?',
    ai_sq_gf:'J\'ai une allergie au gluten, que puis-je manger ?',
    ai_sq_veg:'Je suis végétarien, quels plats avez-vous ?',
    ai_sq_spicy:'J\'adore les plats épicés, que recommandez-vous ?',
    ai_sq_hours:'Quels sont vos horaires d\'ouverture ?',
    ai_sq_teppanyaki:'Comment réserver une table de teppanyaki ?',
    ai_sq_cocktails:'Quels cocktails avez-vous ?',
    ai_sq_location:'Comment venir au restaurant et où puis-je me garer ?',
    chat_you_label:'Vous',

    about_badge:   "Ans d\'Excellence",
    strip_1:'Show Teppanyaki',         strip_2:'Sushi Artisanal',
    strip_3:'Terrasse en Bord de Mer', strip_4:'Cuisine au Feu Vif',
    strip_5:'Produits Frais du Jour',  strip_6:'Livraison à Domicile',
    strip_7:'Top sur TripAdvisor',     strip_8:'Thaï · Japonais · Chinois',
    cuisine_label: 'Quatre Cultures, Une Table',
    cuisine_title:"L\'Art de la <em>Cuisine Asiatique</em>",
    cuisine_sushi:  'Sushi & Japonais',
    cuisine_teppa:  'Teppanyaki',
    cuisine_thai:   'Cuisine Thaïlandaise',
    cuisine_chinese:'Classiques Chinois',
    menu_label:    '70+ Plats · 5 Cuisines',
    menu_title:    'Le <em>Menu</em>',
    menu_btn:      '✦ Voir le Menu Complet',
    teppa_label:   'Le Spectacle',
    teppa_title:   'Feu Vivant.<br><em>Pur Théâtre.</em>',
    teppa_btn1:    'Réserver Table Teppanyaki',
    teppa_btn2:    'Appelez-nous',
    chefs_label:   'Les Artisans',
    chefs_title:   'Rencontrez Nos <em>Chefs</em>',
    chef1_role:    'Chef Exécutif & Fondateur',
    chef1_title:   'Maître de la Cuisine Asiatique',
    chef2_role:    'Chef Teppanyaki',
    chef2_title:   'Chef Leo — Le Maître du Teppanyaki',
    gallery_label: 'Histoire Visuelle',
    gallery_title: 'La Vie chez <em>ENJOY</em>',
    quote_text:    '"La nourriture n\'est pas seulement de l\'énergie. C\'est une expérience."',
    quote_attr:    '— La Philosophie de ENJOY Asian Restaurant',
    res_address_l: 'Adresse',
    res_hours_l:   'Horaires',
    res_phone_l:   'Téléphone',
    res_delivery_l:'Livraison & À Emporter',
    res_hours_v:   'Tous les jours · 12h00 — 24h00',
    res_delivery_v:'Appelez pour commander',
    loc_label:     'Nous Trouver',
    loc_title:     'Sur le <em>Front de Mer</em>',
    loc_transport_l:'Comment Venir',
    loc_parking_l: 'Parking',
    loc_btn:       '↗ Itinéraire',
    footer_explore:'Explorer',
    footer_cuisine:'Cuisines',
    footer_contact:'Contact',
    hero_line1:'Une Expérience Asiatique',
    hero_line2:'Inoubliable',
    hero_line3:'Au Bord De La Mer',
    hero_subbrand:'Puerto del Carmen · Lanzarote',
    hero_reserve:'✦ Réserver une Table',hero_menu:'Voir le Menu →',
    stat_dishes:'Plats',stat_cuisines:'Cuisines',stat_years:'Ans',
    about_label:'Notre Histoire',
    about_title:'Là où l\'Extrême-Orient rencontre <em>Lanzarote</em>',
    about_text1:'Sur la promenade en bord de mer de Puerto del Carmen, ENJOY Asian Restaurant offre depuis plus de trois décennies un voyage extraordinaire à travers la gastronomie asiatique. Notre cuisine ouverte, la scène teppanyaki illuminée par les flammes et notre quête incessante de qualité créent une expérience mémorable.',
    about_text2:'De l\'art délicat du sushi artisanal au rugissement théâtral du grill teppanyaki, chaque plat est une histoire de tradition, de technique et de passion pour les saveurs.',
    stat_label1:'Cuisines Asiatiques',stat_label2:'Plats au Menu',stat_label3:'Ouvert Chaque Jour',
    reviews_label:'Ce que Disent Nos Clients',
    reviews_title:'Avis <em>Exceptionnels</em>',
    reviews_based:'Basé sur 340+ avis',reviews_based_g:'Basé sur 280+ avis',
    reviews_combined:'Note Globale',reviews_total:'620+ avis vérifiés',
    reviews_see_all:'Voir tous les avis →',reviews_see_all_g:'Voir sur Google →',
    reviews_cta:'Lire tous les avis sur TripAdvisor →',
    review_ai_btn:'✦ Voir la réponse du restaurant',
    ai_label:'Propulsé par IA',ai_title:'ENJOY <em>Assistant IA</em>',
    ai_subtitle:'Posez toutes vos questions sur nos 70+ plats, allergènes, le show teppanyaki, les réservations ou comment nous trouver.',
    ai_chat_status:'Assistant IA ENJOY · En ligne',
    ai_welcome:'<strong>Bienvenue chez ENJOY! 🍣</strong><br><br>Bienvenue au ENJOY Asian Restaurant sur le front de mer de Puerto del Carmen. Je connais tout notre menu par cœur.<br><br>Demandez-moi n\'importe quoi — plats, allergènes, le show teppanyaki, réservations ou comment nous trouver!',
    ai_finder_title:'Trouver mon Plat',ai_finder_italic:'Parfait',
    ai_finder_sub:'Recommandation Personnalisée par IA',
    chip_sushi:'🍣 Sushi',chip_gf:'⚠️ Sans Gluten',chip_veg:'🌿 Végétarien',
    chip_spicy:'🌶️ Plats Épicés',chip_hours:'🕐 Horaires',chip_teppanyaki:'🔥 Teppanyaki',
    chip_cocktails:'🍸 Cocktails',chip_parking:'🅿️ Parking',
    chat_placeholder:'Questions sur le menu, allergènes, emplacement...',
    quiz_q1:'Quelles saveurs vous tentent aujourd\'hui?',
    quiz_q2:'Des exigences alimentaires particulières?',
    quiz_q3:'Quel type d\'expérience vous attire?',
    quiz_q4:'Quelle cuisine vous attire le plus?',
    quiz_opt1a:'🌿 Léger & Frais',quiz_opt1b:'🍖 Riche & Savoureux',
    quiz_opt1c:'🌶️ Épicé & Intense',quiz_opt1d:'🍊 Sucré & Acidulé',
    quiz_opt2a:'✅ Sans restrictions',quiz_opt2b:'🌿 Végétarien',
    quiz_opt2c:'🌾 Sans Gluten',quiz_opt2d:'🐟 Fruits de mer uniquement',
    quiz_opt3a:'🔥 Show en Direct (Teppanyaki)',quiz_opt3b:'🍽️ Plats à Partager',
    quiz_opt3c:'👤 Plats Individuels',quiz_opt3d:'⚡ Rapide & Léger',
    quiz_opt4a:'🇯🇵 Japonais / Sushi',quiz_opt4b:'🇹🇭 Thaïlandais',
    quiz_opt4c:'🇨🇳 Chinois',quiz_opt4d:'✨ Surprenez-moi!',
    quiz_loading:'Recherche de votre plat parfait...',
    quiz_match:'✦ Votre Plat Parfait',quiz_reserve:'Réserver',quiz_again:'Réessayer',
    res_label:'Votre Table Vous Attend',res_title:'Réserver une <em>Table</em>',
    res_address_l:'Adresse',res_hours_l:'Horaires',res_phone_l:'Téléphone',
    res_delivery_l:'Livraison & À Emporter',res_delivery_v:'Appelez pour commander',
    res_hours_v:'Tous les jours · 12h00 — 24h00',res_wa_btn:'📞 Réserver par Téléphone',
    form_fname:'Prénom',form_lname:'Nom',form_email:'E-mail',form_phone:'Téléphone',
    form_date:'Date',form_time:'Heure',form_guests:'Personnes',form_exp:'Expérience',
    form_requests:'Demandes Spéciales',
    form_placeholder:'Allergies, régimes alimentaires, occasions spéciales...',
    form_name_ph:'Votre prénom',form_surname_ph:'Votre nom',
    form_submit:'✦ Confirmer la Réservation',
    form_note:'Nous confirmerons votre réservation dans les 2 heures par téléphone ou e-mail.',
    g1:'1 personne',g2:'2 personnes',g3:'3 personnes',g4:'4 personnes',
    g5:'5 personnes',g6:'6 personnes',g7:'7+ personnes (appelez-nous)',
    exp1:'N\'importe quelle table',exp2:'Table teppanyaki',exp3:'Terrasse (bord de mer)',
    loc_label:'Nous Trouver',loc_title:'Sur le <em>Front de Mer</em>',
    loc_address_l:'Adresse',loc_transport_l:'Comment Venir',
    loc_transport_v:'Sur la promenade principale en bord de mer. Arrêt de bus à 60m (Ligne 2). Station de taxi à proximité.',
    loc_parking_l:'Parking',loc_parking_v:'Parking public sur l\'Av. de las Playas et les rues adjacentes.',
    loc_btn:'↗ Itinéraire',
    footer_tagline:'"Un voyage inoubliable à travers les saveurs de l\'Asie, sur les côtes de Lanzarote."',
    footer_explore:'Explorer',footer_cuisine:'Cuisines',footer_contact:'Contact',
    footer_story:'Notre Histoire',footer_menu:'Le Menu',footer_chefs:'Nos Chefs',
    footer_gallery:'Galerie',footer_reviews:'Avis',footer_ai:'Assistant IA',
    footer_sushi:'Sushi & Japonais',footer_teppa:'Teppanyaki',
    footer_thai:'Cuisine Thaïlandaise',footer_chinese:'Classiques Chinois',
    footer_veg:'Végétarien',footer_cocktails:'Cocktails & Boissons',
    footer_copy:'© 2026 ENJOY Asian Restaurant · Lanzarote',

    cuisine_desc_sushi:"Nigiri pressés à la main, rouleaux maki artisanaux et sashimi ultra-frais. L'expression la plus pure de la maîtrise culinaire japonaise.",
    cuisine_desc_teppa: "La performance en direct du Chef Leo sur le gril en fer — feu, art du couteau et théâtre fusionnés en un spectacle inoubliable.",
    cuisine_desc_thai: 'Currys parfumés, soupes à la citronnelle et épices parfaitement équilibrées. Saveurs thaïlandaises authentiques sur les rives de Lanzarote.',
    cuisine_desc_chinese:"Dim sum, canard laqué et chefs-d'œuvre au wok — des siècles de tradition chinoise servis avec un raffinement contemporain.",
    menu_text: 'Sushi, teppanyaki, thaï, chinois, dim sum, fruits de mer, végétarien, cocktails, desserts et plus — tout préparé avec les ingrédients les plus frais par Chef Wang et Chef Leo.',
    teppa_text:"Le gril teppanyaki n'est pas seulement de la cuisine — c'est une scène. Regardez Chef Leo maîtriser le feu, l'acier et des ingrédients extraordinaires dans une performance aussi palpitante que le repas est magnifique.",
    chef1_bio: "Né à Fujian, en Chine, en 1964, le Chef Wang a étudié à l'École Culinaire de Fujian avant de venir en Espagne en 1990. Travaillant aux côtés de maîtres chefs à Barcelone et Bilbao, il a bâti une carrière extraordinaire. En 1995, il a ouvert ENJOY sur le front de mer de Puerto del Carmen. Plus de 30 ans d'expérience.",
    chef2_bio: 'Né au Japon en 1975, Leo a étudié les arts culinaires à Tokyo en 1992. Il est venu en Europe en 1993, a passé des années en Hollande à perfectionner son art, et est arrivé en Espagne en 2000. Ses performances teppanyaki sont le spectacle le plus époustouflant de Puerto del Carmen.',
    chef1_tag1: 'Maître Sushi',
    chef1_tag2: 'Cuisine Chinoise',
    chef1_tag3: 'Spécialités Thaïes',
    chef2_tag1: 'Feu Vivant',
    chef2_tag2: 'Spécialiste Teppanyaki',
    chef2_tag3: 'Cuisine Spectacle',
    chef2_tag4: 'Formé à Tokyo',
    ai_subtitle: 'Posez toutes vos questions sur nos 70+ plats, allergènes, le show teppanyaki, les réservations ou comment nous trouver.',
    footer_story: 'Notre Histoire',
    footer_menu: 'Le Menu',
    footer_chefs: 'Nos Chefs',
    footer_gallery: 'Galerie',
    footer_reviews: 'Avis',
    footer_sushi: 'Sushi & Japonais',
    footer_teppa: 'Teppanyaki',
    footer_thai: 'Cuisine Thaïlandaise',
    footer_chinese: 'Classiques Chinois',
    footer_veg: 'Végétarien',
    footer_cocktails: 'Cocktails & Boissons',
    call_tooltip: 'Appelez-nous',
    call_tooltip:'Appelez-nous',
    teppanyaki_label:'Le Spectacle',teppanyaki_title:'Feu Vivant.<br><em>Pur Théâtre.</em>',
    teppanyaki_text:'Le grill teppanyaki n\'est pas que de la cuisine — c\'est une scène. Chef Leo maîtrise le feu, l\'acier et des ingrédients extraordinaires dans une performance aussi palpitante que délicieuse.',
    teppanyaki_btn1:'Réserver Table Teppanyaki',teppanyaki_btn2:'Demander par WhatsApp',
    scroll_discover:'Découvrir',
    cuisine_label:'Quatre Cultures, Une Table',cuisine_title:'L\'Art de la <em>Cuisine Asiatique</em>',
    menu_label:'70+ Plats · 5 Cuisines',menu_title:'Le <em>Menu</em>',menu_btn:'✦ Voir le Menu Complet',
    chefs_label:'Les Artisans',chefs_title:'Rencontrez Nos <em>Chefs</em>',
    gallery_label:'Histoire Visuelle',gallery_title:'La Vie chez <em>ENJOY</em>',
    quote_text:'"La nourriture n\'est pas seulement de l\'énergie. C\'est une expérience."',
    quote_attr:'— La Philosophie de ENJOY Asian Restaurant',
  },

  nl: {
    nav_story:'Ons Verhaal',nav_menu:'Menu',nav_chefs:'Chefs',
    nav_gallery:'Galerij',nav_ai:'AI Assistent',nav_reserve:'Reserveren',
    nav_reviews:'Reviews',nav_reserve_long:'Tafel Reserveren',

    about_badge:   'Jaar Uitmuntendheid',
    strip_1:'Teppanyaki Show',         strip_2:'Ambachtelijke Sushi',
    strip_3:'Strandterras',            strip_4:'Live Vuurkoken',
    strip_5:'Verse Dagproducten',      strip_6:'Thuisbezorging',
    strip_7:'Top op TripAdvisor',      strip_8:'Thai · Japans · Chinees',
    cuisine_label: 'Vier Culturen, Één Tafel',
    cuisine_title: 'De Kunst van de <em>Aziatische Keuken</em>',
    cuisine_sushi:  'Sushi & Japans',
    cuisine_teppa:  'Teppanyaki',
    cuisine_thai:   'Thaise Keuken',
    cuisine_chinese:'Chinese Klassiekers',
    menu_label:    '70+ Gerechten · 5 Keukens',
    menu_title:    'Het <em>Menu</em>',
    menu_btn:      '✦ Volledig Menu Bekijken',
    teppa_label:   'Het Spektakel',
    teppa_title:   'Levend Vuur.<br><em>Puur Theater.</em>',
    teppa_btn1:    'Teppanyakitafel Boeken',
    teppa_btn2:    'Bel ons',
    chefs_label:   'De Ambachtslieden',
    chefs_title:   'Maak Kennis met Onze <em>Chefs</em>',
    chef1_role:    'Hoofdchef & Oprichter',
    chef1_title:   'Meester van de Aziatische Keuken',
    chef2_role:    'Teppanyaki Chef',
    chef2_title:   'Chef Leo — De Teppanyaki Meester',
    gallery_label: 'Visueel Verhaal',
    gallery_title: 'Het Leven bij <em>ENJOY</em>',
    quote_text:    '"Eten is niet alleen energie. Het is een ervaring."',
    quote_attr:    '— De Filosofie van ENJOY Asian Restaurant',
    res_address_l: 'Adres',
    res_hours_l:   'Openingstijden',
    res_phone_l:   'Telefoon',
    res_delivery_l:'Bezorging & Afhalen',
    res_hours_v:   'Elke dag · 12:00 — 24:00',
    res_delivery_v:'Bel om te bestellen',
    loc_label:     'Vind Ons',
    loc_title:     'Aan de <em>Strandboulevard</em>',
    loc_transport_l:'Hoe Komen',
    loc_parking_l: 'Parkeren',
    loc_btn:       '↗ Routebeschrijving',
    footer_explore:'Ontdekken',
    footer_cuisine:'Keukens',
    footer_contact:'Contact',
    hero_line1:'Een Onvergetelijke',
    hero_line2:'Aziatische Ervaring',
    hero_line3:'Aan Het Strand',
    hero_subbrand:'Puerto del Carmen · Lanzarote',
    hero_reserve:'✦ Tafel Reserveren',hero_menu:'Bekijk Menu →',
    stat_dishes:'Gerechten',stat_cuisines:'Keukens',stat_years:'Jaar',
    about_label:'Ons Verhaal',
    about_title:'Waar het Verre Oosten <em>Lanzarote</em> ontmoet',
    about_text1:'Op de boulevard van Puerto del Carmen biedt ENJOY Asian Restaurant al meer dan drie decennia een buitengewone reis door de Aziatische gastronomie. Onze open keuken, het vuurspektakel van de teppanyaki en onze onverzettelijke kwaliteitsjacht creëren een ervaring die lang bijblijft.',
    about_text2:'Van de delicate kunst van handgemaakt sushi tot het theatrale gebulder van de teppanyakigrill — elk gerecht vertelt een verhaal van traditie, techniek en passie.',
    stat_label1:'Aziatische Keukens',stat_label2:'Gerechten op Menu',stat_label3:'Dagelijks Geopend',
    reviews_label:'Wat Gasten Zeggen',reviews_title:'Uitzonderlijke <em>Reviews</em>',
    reviews_based:'Gebaseerd op 340+ reviews',reviews_based_g:'Gebaseerd op 280+ reviews',
    reviews_combined:'Gecombineerde Score',reviews_total:'620+ geverifieerde reviews',
    reviews_see_all:'Alle reviews bekijken →',reviews_see_all_g:'Bekijk op Google →',
    reviews_cta:'Alle reviews op TripAdvisor →',
    review_ai_btn:'✦ Reactie van het restaurant',
    ai_label:'Aangedreven door AI',ai_title:'ENJOY <em>AI Assistent</em>',
    ai_subtitle:'Stel ons alles over onze 70+ gerechten, allergenen, de teppanyaki-show, reserveringen of hoe u ons vindt.',
    ai_chat_status:'ENJOY AI Assistent · Online',
    ai_welcome:'<strong>Welkom bij ENJOY! 🍣</strong><br><br>Welkom bij ENJOY Asian Restaurant aan de boulevard van Puerto del Carmen. Ik ken ons volledige menu van binnen en buiten.<br><br>Stel mij alles — gerechten, allergenen, de teppanyaki-show, reserveringen of hoe u ons vindt!',
    ai_finder_title:'Vind Mijn Perfecte',ai_finder_italic:'Gerecht',
    ai_finder_sub:'AI-gestuurde Persoonlijke Aanbeveling',
    chip_sushi:'🍣 Sushi',chip_gf:'⚠️ Glutenvrij',chip_veg:'🌿 Vegetarisch',
    chip_spicy:'🌶️ Pittige Gerechten',chip_hours:'🕐 Openingstijden',chip_teppanyaki:'🔥 Teppanyaki',
    chip_cocktails:'🍸 Cocktails',chip_parking:'🅿️ Parkeren',
    chat_placeholder:'Vragen over menu, allergenen, locatie...',
    quiz_q1:'Welke smaken heeft u vandaag zin in?',
    quiz_q2:'Heeft u voedingsvereisten?',
    quiz_q3:'Welk type ervaring spreekt u aan?',
    quiz_q4:'Welke keuken trekt u het meest?',
    quiz_opt1a:'🌿 Licht & Fris',quiz_opt1b:'🍖 Rijk & Hartig',
    quiz_opt1c:'🌶️ Pittig & Krachtig',quiz_opt1d:'🍊 Zoet & Zuur',
    quiz_opt2a:'✅ Geen beperkingen',quiz_opt2b:'🌿 Vegetarisch',
    quiz_opt2c:'🌾 Glutenvrij',quiz_opt2d:'🐟 Alleen Zeevruchten',
    quiz_opt3a:'🔥 Live Show (Teppanyaki)',quiz_opt3b:'🍽️ Delen',
    quiz_opt3c:'👤 Individuele Gerechten',quiz_opt3d:'⚡ Snel & Licht',
    quiz_opt4a:'🇯🇵 Japans / Sushi',quiz_opt4b:'🇹🇭 Thais',
    quiz_opt4c:'🇨🇳 Chinees',quiz_opt4d:'✨ Verras mij!',
    quiz_loading:'Uw perfecte gerecht wordt gezocht...',
    quiz_match:'✦ Uw Perfect Gerecht',quiz_reserve:'Nu Reserveren',quiz_again:'Opnieuw proberen',
    res_label:'Uw Tafel Wacht',res_title:'Tafel <em>Reserveren</em>',
    res_address_l:'Adres',res_hours_l:'Openingstijden',res_phone_l:'Telefoon',
    res_delivery_l:'Bezorging & Afhalen',res_delivery_v:'Bel om te bestellen',
    res_hours_v:'Elke dag · 12:00 — 24:00',res_wa_btn:'📞 Telefonisch Reserveren',
    form_fname:'Voornaam',form_lname:'Achternaam',form_email:'E-mail',form_phone:'Telefoon',
    form_date:'Datum',form_time:'Tijd',form_guests:'Personen',form_exp:'Ervaring',
    form_requests:'Speciale Verzoeken',
    form_placeholder:'Allergieën, dieetvereisten, speciale gelegenheden...',
    form_name_ph:'Uw voornaam',form_surname_ph:'Uw achternaam',
    form_submit:'✦ Reservering Bevestigen',
    form_note:'Wij bevestigen uw reservering binnen 2 uur per telefoon of e-mail.',
    g1:'1 persoon',g2:'2 personen',g3:'3 personen',g4:'4 personen',
    g5:'5 personen',g6:'6 personen',g7:'7+ personen (bel ons)',
    exp1:'Elke tafel',exp2:'Teppanyaki-tafel',exp3:'Terras (zeezicht)',
    loc_label:'Vind Ons',loc_title:'Aan de <em>Strandboulevard</em>',
    loc_address_l:'Adres',loc_transport_l:'Hoe Komen',
    loc_transport_v:'Aan de hoofdstrandboulevard. Bushalte 60m (Lijn 2). Taxistandplaats nabij.',
    loc_parking_l:'Parkeren',loc_parking_v:'Openbare parkeerplaats op de Av. de las Playas en aangrenzende straten.',
    loc_btn:'↗ Routebeschrijving',
    footer_tagline:'"Een onvergetelijke reis door de smaken van Azië, aan de kusten van Lanzarote."',
    footer_explore:'Ontdekken',footer_cuisine:'Keukens',footer_contact:'Contact',
    footer_story:'Ons Verhaal',footer_menu:'Het Menu',footer_chefs:'Onze Chefs',
    footer_gallery:'Galerij',footer_reviews:'Reviews',footer_ai:'AI Assistent',
    footer_sushi:'Sushi & Japans',footer_teppa:'Teppanyaki',
    footer_thai:'Thaise Keuken',footer_chinese:'Chinese Klassiekers',
    footer_veg:'Vegetarisch',footer_cocktails:'Cocktails & Dranken',
    footer_copy:'© 2026 ENJOY Asian Restaurant · Lanzarote',

    cuisine_desc_sushi: 'Handgepresste nigiri, ambachtelijke makirolletjes en ultraverse sashimi. De puurste uitdrukking van Japanse culinaire meesterschap.',
    cuisine_desc_teppa: 'Chef Leos live optreden op de ijzeren grill — vuur, meskunst en theater samengesmolten tot een onvergetelijk spektakel.',
    cuisine_desc_thai: 'Geurige currys, citroengras-soepen en perfect gebalanceerde kruiden. Authentieke Thaise smaken aan de kusten van Lanzarote.',
    cuisine_desc_chinese: 'Dim sum, Pekingeend en wok-meesterwerken — eeuwen Chinese traditie geserveerd met hedendaagse verfijning.',
    menu_text: 'Sushi, teppanyaki, Thai, Chinees, dim sum, zeevruchten, vegetarisch, cocktails, desserts en meer — alles bereid met de versste ingrediënten door Chef Wang en Chef Leo.',
    teppa_text: 'De teppanyakigrill is niet alleen koken — het is een podium. Kijk hoe Chef Leo vuur, staal en buitengewone ingrediënten omzet in een voorstelling die net zo opwindend is als het eten heerlijk smaakt.',
    chef1_bio: 'Chef Wang werd geboren in Fujian, China, in 1964 en studeerde aan de Fujian Culinary School voordat hij in 1990 naar Spanje kwam. In Barcelona en Bilbao werkte hij met meesterchefs. In 1995 opende hij ENJOY aan de boulevard van Puerto del Carmen. Meer dan 30 jaar ervaring.',
    chef2_bio: 'Leo werd geboren in Japan in 1975 en studeerde culinaire kunsten in Tokyo in 1992. Hij kwam in 1993 naar Europa, bracht jaren door in Holland en arriveerde in 2000 in Spanje. Zijn teppanyaki-optredens zijn het meest spectaculaire show in Puerto del Carmen.',
    chef1_tag1: 'Sushi Meester',
    chef1_tag2: 'Chinese Keuken',
    chef1_tag3: 'Thaise Specialiteiten',
    chef2_tag1: 'Levend Vuur',
    chef2_tag2: 'Teppanyaki Specialist',
    chef2_tag3: 'Show Koken',
    chef2_tag4: 'Opgeleid in Tokyo',
    ai_subtitle: 'Stel alles over onze 70+ gerechten, allergenen, de teppanyaki-show, reserveringen of hoe u ons vindt.',
    footer_story: 'Ons Verhaal',
    footer_menu: 'Het Menu',
    footer_chefs: 'Onze Chefs',
    footer_gallery: 'Galerij',
    footer_reviews: 'Reviews',
    footer_sushi: 'Sushi & Japans',
    footer_teppa: 'Teppanyaki',
    footer_thai: 'Thaise Keuken',
    footer_chinese: 'Chinese Klassiekers',
    footer_veg: 'Vegetarisch',
    footer_cocktails: 'Cocktails & Dranken',
    call_tooltip: 'Bel ons',
    call_tooltip:'Bel ons',
    teppanyaki_label:'Het Spektakel',teppanyaki_title:'Levend Vuur.<br><em>Puur Theater.</em>',
    teppanyaki_text:'De teppanyakigrill is niet alleen koken — het is een podium. Chef Leo beheerst vuur, staal en buitengewone ingrediënten in een voorstelling die net zo opwindend is als het eten heerlijk smaakt.',
    teppanyaki_btn1:'Teppanyakitafel Boeken',teppanyaki_btn2:'Vragen via WhatsApp',
    scroll_discover:'Ontdekken',
    cuisine_label:'Vier Culturen, Één Tafel',cuisine_title:'De Kunst van de <em>Aziatische Keuken</em>',
    menu_label:'70+ Gerechten · 5 Keukens',menu_title:'Het <em>Menu</em>',menu_btn:'✦ Volledig Menu Bekijken',
    chefs_label:'De Ambachtslieden',chefs_title:'Maak Kennis met Onze <em>Chefs</em>',
    gallery_label:'Visueel Verhaal',gallery_title:'Het Leven bij <em>ENJOY</em>',
    quote_text:'"Eten is niet alleen energie. Het is een ervaring."',
    quote_attr:'— De Filosofie van ENJOY Asian Restaurant',
  },
};

/* ─────────────────────────────────────────────────────────────
   LANGUAGE DROPDOWN — simplified, bulletproof
───────────────────────────────────────────────────────────── */
function toggleLangDropdown() {
  const sel = document.getElementById('langSelector');
  if (!sel) return;
  sel.classList.toggle('open');
  const isOpen = sel.classList.contains('open');
  const btn = document.getElementById('langSelectorBtn');
  if (btn) btn.setAttribute('aria-expanded', String(isOpen));
}

function closeLangDropdown() {
  const sel = document.getElementById('langSelector');
  if (sel) sel.classList.remove('open');
  const btn = document.getElementById('langSelectorBtn');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

// Close when clicking anywhere outside the selector
document.addEventListener('click', e => {
  const sel = document.getElementById('langSelector');
  if (sel && !sel.contains(e.target)) closeLangDropdown();
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLangDropdown();
});
let currentLang = 'en';

function detectBrowserLang() {
  const bl = (navigator.language || navigator.userLanguage || 'en').toLowerCase().slice(0,2);
  const map = { es:'es', de:'de', fr:'fr', nl:'nl', en:'en',
                ca:'es', eu:'es', gl:'es', it:'en', pt:'en' };
  return map[bl] || 'en';
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  const T = TRANSLATIONS[lang];

  // 1. html lang attribute
  const root = document.getElementById('htmlRoot');
  if (root) root.lang = lang;

  // 2. Translate ALL data-i18n elements — this is the single source of truth
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key] !== undefined) el.innerHTML = T[key];
  });

  // 3. Update dropdown button label
  const labels = { en:'EN', es:'ES', de:'DE', fr:'FR', nl:'NL' };
  const currentEl = document.getElementById('langCurrent');
  if (currentEl) currentEl.textContent = labels[lang] || lang.toUpperCase();

  // 4. Update dropdown active states
  ['en','es','de','fr'].forEach(l => {
    const opt = document.getElementById(`lang-${l}`);
    if (opt) opt.classList.toggle('active', l === lang);
    const mob = document.getElementById(`mob-lang-${l}`);
    if (mob) mob.classList.toggle('active', l === lang);
  });

  // 5. Footer lang buttons (legacy)
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.trim().toLowerCase() === lang);
  });

  // 6. Chat welcome + placeholder
  const chatMessages = document.getElementById('chatMessages');
  if (chatMessages) {
    const firstMsg = chatMessages.querySelector('.msg.bot .msg-bubble');
    if (firstMsg) firstMsg.innerHTML = T.ai_welcome || TRANSLATIONS.en.ai_welcome;
  }
  const chatInput = document.getElementById('chatInput');
  if (chatInput) chatInput.placeholder = T.chat_placeholder || '';

  // 7. Smooth fade
  document.body.classList.add('lang-fade');
  setTimeout(() => document.body.classList.remove('lang-fade'), 380);

  // 8. Close dropdown
  closeLangDropdown();

  // 9. Persist
  try { localStorage.setItem('enjoy_lang', lang); } catch {}
}

// English is default. Restore saved preference if set.
function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('enjoy_lang'); } catch {}
  setLang(saved && TRANSLATIONS[saved] ? saved : 'en');
}

// Call as early as possible — DOM ready
document.addEventListener('DOMContentLoaded', initLang);

/* ─────────────────────────────────────────────────────────────
   AI — Gemini via Vercel serverless function (/api/chat)
   La clave GEMINI_API_KEY se configura en Variables de Entorno de Vercel.
───────────────────────────────────────────────────────────── */
const AI_ENDPOINT = '/api/chat';
const GEMINI_API_KEY_BROWSER = null; // no se usa, la clave está en el servidor

const RESTAURANT_SYSTEM = `You are the friendly AI assistant for ENJOY Asian Restaurant, a beachfront Asian restaurant on the seafront promenade of Puerto del Carmen, Lanzarote, Canary Islands.

CRITICAL RULE: Always reply in the EXACT same language the user writes in. If they write in Spanish, reply in Spanish. If German, reply in German. If French, reply in French. If Dutch, reply in Dutch. If English, reply in English.

RESTAURANT FACTS:
- Name: ENJOY Asian Restaurant
- Address: Av. de las Playas 21, Puerto del Carmen, Lanzarote, Canary Islands, Spain
- Phone: +34 646 906 897 (also WhatsApp)
- Opening hours: Every day 12:00 to 24:00, 365 days a year (including holidays)
- Location: Directly on the beachfront promenade with sea views and a terrace
- Home delivery and take away available — call to order
- Head Chef: Feng Zhang Wang — born Fujian, China, 1964. Studied at Fujian Culinary School. Moved to Spain in 1990, worked in Barcelona and Bilbao. Opened ENJOY in 1995. 30+ years of experience. Specialises in sushi, Thai and Chinese.
- Teppanyaki Chef: Leo (Liang Gang Chen) — born Japan 1975, trained in Tokyo 1992. Came to Europe 1993, arrived in Spain 2000. His live teppanyaki show is the most spectacular in Puerto del Carmen.
- TripAdvisor: Top rated, 340+ reviews
- Google: 280+ reviews
- Combined: 620+ verified reviews

MENÚ COMPLETO (precios en €) — cocina China, Tailandesa y Japonesa:

SUSHI — Nigiri x2: Sake/Salmón 4,20 · Maguro/Atún 4,20 · Tako/Pulpo 4,50 · Ebi/Langostino 4,50 · Kani/Cangrejo 4,00 · Suzuki/Lubina 4,00 · Unagi/Anguila 6,00 · Ikura 6,00 · Tofu Nigiri (vegano) 4,50 · Tartar de Sake 9,95. Maki x6/x8: Sake 5,20 · Tekka/Atún 5,80 · Kappa/Pepino 4,90 · Tempura Sake x8 10,50.

SOPAS — China: cangrejo/maíz, pollo/maíz, Wan Tun, agripicante, pollo/champiñones, pollo/fideos, vegetal, tomate (4,50–5,25). Thai: Tom Yam Gung 6,95 · Tom Kha Gai 6,50. Japonesa: Miso 5,95 · Swimon (pescado/marisco) 7,80.

ENTRANTES — China: rollos primavera 3,80, pan de gambas 2,95, Wan Tun frito 4,50, langostinos fritos 9,50, gambas al ajillo 9,50, calamares fritos 7,95, algas fritas 4,90, costillas 8,50, alitas 6,75, ½ pato crujiente con crepes 14,90 (¼ 9,50), entremeses 2p 12,50. Thai: rollos Thai 4,50, rollos langostinos 6,50, satay 7,20, Lab Gai 7,50, entremeses Bangkok 2p 12,50. Japonesa: tempura verduras 7,95, tempura langostinos 10,95, tempura mixta 10,95, yakitori pollo 6,50, yakitori langostinos 7,20.

ARROZ Y TALLARINES — China: arroz frito 3,95–6,50, tallarines fritos 4,60–7,50, arroz blanco/integral 3,00–3,80. Thai: Phad Thai gambas 8,40 / pollo 7,80, arroz Thai especial 7,30, tallarines crujientes Thai 8,80. Japonesa: Ramen Pollo 8,50 · Carne 9,50 · Pato 10,50, tallarines Wu Dong 8,90–9,50, arroz frito Teppanyaki 8,50.

POLLO — China: curry, agridulce, champiñones, picante, judías negras, jengibre, cantonesa, limón, anacardos, piña, satay (7,20–8,40). Thai/Japonesa: curry rojo/verde/Matsaman, Bangkok, Mongolian 8,90 · Teppanyaki Japonés 9,95.

TERNERA Y SOLOMILLO — China: curry, pimientos, champiñones, picante, judías negras, jengibre, pimienta negra (8,30–9,30); Solomillo plancha 16,95. Thai/Japonesa: curry rojo/verde/Matsaman 9,25, Solomillo Mongolian 17,20, Solomillo Teppanyaki Japonés 17,50.

CERDO — China: agridulce, picante, judías negras, chuletas (7,20–9,80). Thai: curry rojo/verde/Matsaman, costilla Bangkok (8,90–9,50).

PATO — China: Pekín piña/naranja/cantonesa/judías negras/bambú/flambeado (13,50–13,95). Thai/Japonesa: fruta tropical, estilo Vietnam, curry rojo/verde, Magret Teppanyaki Japonés 15,90.

MARISCOS Y PESCADOS — China: langostinos curry/agridulce/picante/judías negras/cantonesa (11,50–13,90), Bogavante fresco 35,50, Lubina fresca al vapor o crujiente 17,50. Thai/Japonesa: langostinos curry/Bangkok/chili 12,50; Teppanyaki: Choco 10,90 · Dorada 16,50 · Atún/Salmón 15,90 · Lubina 17,50 · Langostinos 15,50.

ESPECIALES DEL CHEF — Tres delicias curry 10,50, curry rojo Thai 11,50, Familia Feliz 11,50, Cordero Mongolian/cazuela 12,50.

MENÚ INFANTIL — huevos fritos, bolitas de pollo, nuggets, salchichas, palitos de pescado, tallarines o calamares, con papas — 5,80 cada uno.

MENÚS DEGUSTACIÓN (2 personas, precio/persona) — Menú A 14,90 · Menú B 17,90 · Menú C 20,50 · Menú D 22,90 (sopa/entrantes + pato crujiente + principales, varían).

VINOS Y BEBIDAS — Vinos desde 13,50 botella, cava/champagne 15,95–55,95 (Moët), sangría 8,50/14,95. Cócteles clásicos (Mojito, Margarita, Piña Colada, etc.) 7,10, sin alcohol 4,50, smoothies, cafés 1,50–2,20, refrescos 3,00, cervezas 2,10–3,70.

POSTRES — Helado frito 4,50, Daifuku Mochi 4,90, Tarta de Queso 4,00, Crema Catalana 4,30, Tarta Tiramisú 4,00, Banana Split 4,95, Lychees 3,70, y más (2,80–4,95).

ALÉRGENOS: La carta no detalla alérgenos por plato. Para gluten, frutos secos, marisco u otra alergia, confirma siempre con el personal antes de pedir.

LOCATION & PRACTICAL INFO:
- Address: Av. de las Playas 21, Puerto del Carmen, Lanzarote
- Bus: stop 60m away (Line 2)
- Taxi: rank nearby
- Parking: free public parking on Av. de las Playas and adjacent streets
- Reservation: via website form or by phone +34 646 906 897
- For teppanyaki tables, advance booking is recommended
- WhatsApp: same number +34 646 906 897

YOUR PERSONALITY & RULES:
- You are warm, friendly, knowledgeable, and professional — like a great front-of-house team member
- Answer ANY question the user has, not just restaurant topics — be genuinely helpful
- Always respond in the EXACT same language the user writes in (Spanish → Spanish, German → German, etc.)
- Use occasional relevant emojis to make responses feel warm and inviting
- Keep responses concise (3-5 sentences) unless the user asks for a list or detailed info
- If asked about something outside the restaurant, answer it normally and helpfully
- Never mention competitor restaurants by name
- If unsure about something specific, recommend calling +34 646 906 897`;


/* ─────────────────────────────────────────────────────────────
   AI REVIEW RESPONSE GENERATOR
───────────────────────────────────────────────────────────── */
const reviewResponseCache = {};

async function generateResponse(id, reviewHighlights) {
  const btn = document.querySelector(`[onclick*="generateResponse(${id}"]`);
  const responseDiv = document.getElementById(`response-${id}`);
  if (!responseDiv || !btn) return;

  // If already generated, just toggle
  if (reviewResponseCache[id]) {
    responseDiv.classList.toggle('visible');
    return;
  }

  btn.innerHTML = `<span data-i18n="review_ai_btn">Generating reply</span>
    <span class="review-ai-generating">
      <span></span><span></span><span></span>
    </span>`;
  btn.classList.add('loading');

  const prompt = `You are the owner of ENJOY Asian Restaurant, Puerto del Carmen, Lanzarote. Write a warm, personal, professional response to this guest review. The guest highlighted: "${reviewHighlights}". Write in English. Keep it genuine, grateful, and under 60 words. Sign off as "The ENJOY Team". No quotes around the response.`;

  let reply = '';

  // Try Claude API first
  if (AI_ENDPOINT) {
    try {
      const res = await fetch(AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: prompt }] }),
      });
      const data = await res.json();
      reply = data.reply || '';
    } catch {}
  }

  // Elegant local fallback responses
  if (!reply) {
    const fallbacks = {
      1: "Thank you so much, Sarah! We're thrilled the teppanyaki show made such an impression — Chef Leo loves putting on a performance for our guests. Your kind words about our sushi truly mean the world to us. We hope to see you again very soon. — The ENJOY Team",
      2: "Dear Klaus, coming back three times in one holiday is the greatest compliment we could receive! We're so happy our Thai green curry and beachfront setting made your stay in Lanzarote extra special. We look forward to welcoming you back. — The ENJOY Team",
      3: "Thank you, Marie! The open kitchen is at the heart of ENJOY — we love that guests can see the passion that goes into every dish. We're delighted the sashimi and dim sum lived up to your expectations. À bientôt! — The ENJOY Team",
    };
    reply = fallbacks[id] || "Thank you so much for your wonderful review. Your kind words inspire our entire team every day. We look forward to welcoming you back to ENJOY very soon. — The ENJOY Team";
  }

  reviewResponseCache[id] = reply;

  responseDiv.innerHTML = `
    <div class="review-ai-response-label">✦ Response from ENJOY</div>
    <div class="review-ai-response-text">${reply}</div>
  `;
  responseDiv.classList.add('visible');
  btn.classList.remove('loading');
  btn.classList.add('done');
}

/* ─────────────────────────────────────────────────────────────
   CHATBOT — Motor local inteligente con fallback API
───────────────────────────────────────────────────────────── */
const KB = {
  phone: '+34 646 906 897',
  wa: 'https://wa.me/34646906897',
  maps: 'https://www.google.com/maps/place/Enjoy+Asian+Restaurant',
  gf: 'La carta no marca platos sin gluten de forma explícita — consulta siempre con el personal antes de pedir si tienes intolerancia al gluten.',
  vegan: 'Tofu Nigiri · Rollos Vegetales · Arroz Integral/Blanco · Arroz frito con verduras · Tallarines/fideos con verduras · Sopa vegetal · Sopa de tomate (confirmar con el personal según ingredientes del día)',
  veg: 'Tofu Nigiri · Rollos Vegetales · Tempura de Verduras · Arroz/Tallarines con verduras · Sopa Vegetal · Sopa de Tomate · Sopa Miso (algas y tofu)',
};

function detectIntent(m) {
  m = m.toLowerCase();
  if (/hour|open|clos|time|horari|cuándo|öffn|heures|tijden|abr/i.test(m))        return 'hours';
  if (/park|aparc|parken|stationnement/i.test(m))                                   return 'parking';
  if (/reserv|book|table|mesa|tisch|réserv|tafel/i.test(m))                        return 'reservation';
  if (/deliver|take.?away|domicil|lieferung|livraison|bezorg/i.test(m))            return 'delivery';
  if (/address|location|where|direc|dónde|adresse|adres|wo ist|où/i.test(m))       return 'address';
  if (/phone|call|number|teléf|telefon|numéro|telefoon/i.test(m))                  return 'phone';
  if (/gluten|celiac|sin gluten|glutenfrei|sans gluten|glutenvrij/i.test(m))       return 'glutenfree';
  if (/\bvegan\b|vegano|végétalien|veganist/i.test(m))                             return 'vegan';
  if (/vegetar/i.test(m))                                                            return 'vegetarian';
  if (/allerg|alergi|intoleran|allergie/i.test(m))                                  return 'allergens';
  if (/spic|picant|scharf|épicé|pittig|hot food/i.test(m))                         return 'spicy';
  if (/sushi|nigiri|sashimi|maki|roll/i.test(m))                                   return 'sushi';
  if (/teppanyaki|tepan|grill|plancha|chef leo|live fire/i.test(m))                return 'teppanyaki';
  if (/dim.?sum|gyoza|dumpling|har gau|wonton|frühlingsrolle|spring roll/i.test(m))return 'dimsum';
  if (/thai|tailand|curry|pad thai|tom yum|satay/i.test(m))                        return 'thai';
  if (/chinese|chino|peking|duck|mongolian|kung pao|chinesisch|chinois/i.test(m))  return 'chinese';
  if (/seafood|prawn|fish|sea bass|marisco|pescado|meeresfrüchte/i.test(m))        return 'seafood';
  if (/dessert|postre|nachtisch|mochi|banana|sorbet|desserts/i.test(m))            return 'desserts';
  if (/cocktail|mojito|martini|sake/i.test(m))                                     return 'cocktails';
  if (/drink|vino|wine|beer|cerveza|wein|bière|bier|bebida/i.test(m))             return 'drinks';
  if (/kids|child|niños|kinder|enfants|kinderen/i.test(m))                         return 'kids';
  if (/set menu|menú del día|tasting|3 course|degustación/i.test(m))              return 'setmenus';
  if (/recommend|suggest|best|popular|qué pedir|empfehlen|recommande/i.test(m))   return 'recommend';
  if (/chef|wang|feng|leo/i.test(m))                                               return 'chefs';
  if (/price|cost|precio|preis|prix|prijs|how much|cuánto/i.test(m))              return 'prices';
  if (/hello|hi |hola|hey|guten|bonjour|hallo|goeie|ciao/i.test(m))              return 'greeting';
  if (/thank|gracias|danke|merci|dankjewel/i.test(m))                             return 'thanks';
  return 'fallback';
}

function buildLocalReply(msg) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const intent = detectIntent(msg);
  const wa = `<a href="${KB.wa}" target="_blank">+34 646 906 897</a>`;
  const maps = `<a href="${KB.maps}" target="_blank">Google Maps →</a>`;

  const R = {
    greeting:    () => t.ai_welcome,
    thanks:      () => ({ en:'Our pleasure! 🙏 We look forward to welcoming you at ENJOY.', es:'¡De nada! 🙏 Será un placer tenerte en ENJOY.', de:'Sehr gerne! 🙏 Wir freuen uns, Sie bei ENJOY begrüßen zu dürfen.', fr:'Avec plaisir! 🙏 Nous serons ravis de vous accueillir chez ENJOY.', nl:'Graag gedaan! 🙏 We kijken ernaar uit u te verwelkomen bij ENJOY.' }[currentLang] || 'Our pleasure! 🙏'),
    hours:       () => `🕐 ${t.res_hours_v}`,
    parking:     () => `🅿️ ${t.loc_parking_v}`,
    reservation: () => `📅 ${t.res_title?.replace(/<[^>]+>/g,'') || 'Reserve'}:<br>• ${t.form_submit || 'Form'} ↓<br>• ${t.res_phone_l}: <a href="tel:+34646906897">+34 646 906 897</a>`,
    delivery:    () => `🛵 ${t.res_delivery_v}: <a href=\"tel:+34646906897\">+34 646 906 897</a>`,
    address:     () => `📍 <strong>Av. de las Playas 21, Puerto del Carmen, Lanzarote</strong> — ${maps}`,
    phone:       () => `📞 <strong><a href="tel:+34646906897">+34 646 906 897</a></strong>`,
    glutenfree:  () => `🌾 <strong>Gluten-free:</strong><br>${KB.gf.split('·').map(s=>`• ${s.trim()}`).join('<br>')}`,
    vegan:       () => `🌱 <strong>Vegan:</strong><br>${KB.vegan.split('·').map(s=>`• ${s.trim()}`).join('<br>')}`,
    vegetarian:  () => `🌿 <strong>Vegetarian:</strong><br>${KB.veg.split('·').map(s=>`• ${s.trim()}`).join('<br>')}`,
    allergens:   () => `⚠️ La carta no detalla alérgenos por plato. Para gluten, frutos secos, marisco u otra alergia, confirma siempre con el personal antes de pedir.`,
    spicy:       () => `🌶️🌶️ Curry Rojo/Verde · Pollo/Ternera con salsa picante · Sopa agripicante<br>🌶️ Pad Thai · Satay (cacahuete) · Tom Yam Gung`,
    sushi:       () => `🍣 Nigiri x2 desde 4,00€ (Sake, Maguro, Tako, Ebi, Kani, Suzuki, Unagi 6,00€, Ikura 6,00€) · Tofu Nigiri vegano 4,50€ · Tartar de Sake 9,95€ · Maki x6/x8 desde 4,90€ a 10,50€`,
    teppanyaki:  () => `🔥 Choco 10,90€ · Pollo 9,95€ · Dorada 16,50€ · Atún/Salmón 15,90€ · Langostinos 15,50€ · Lubina 17,50€ · Solomillo 17,50€ · Magret de Pato 15,90€<br><br>¡Show en directo, reserva con antelación!`,
    dimsum:      () => `🥟 Wan Tun frito 4,50€ · Rollos primavera 3,80€ · Tempura verduras/langostinos 7,95–10,95€ · Yakitori pollo/langostinos 6,50–7,20€ · Sopa Wan Tun 5,25€`,
    thai:        () => `🇹🇭 Tom Yam Gung 6,95€ · Tom Kha Gai 6,50€ · Phad Thai 8,40€ · Curry Rojo/Verde/Matsaman desde 8,90€ · Pinchos satay 7,20€ · Entremeses Bangkok (2p) 12,50€`,
    chinese:     () => `🇨🇳 Pato Pekín con crepes desde 9,50€ · Pollo agridulce 7,20€ · Ternera con judías negras 9,30€ · Cerdo agridulce 7,20€ · Arroz/tallarines fritos desde 3,95€`,
    seafood:     () => `🐟 Langostinos curry/agridulce 11,50€ · Bogavante fresco 35,50€ · Lubina fresca al vapor/crujiente 17,50€ · Teppanyaki Lubina 17,50€ · Dorada 16,50€`,
    desserts:    () => `🍡 Lychees 3,70€ · Daifuku Mochi 4,90€ · Tarta de Queso 4,00€ · Crema Catalana 4,30€ · Tarta Tiramisú 4,00€ · Banana Split 4,95€ · Helado frito 4,50€`,
    cocktails:   () => `🍸 Mojito · Sex on the Beach · Tequila Sunrise · Margarita · Piña Colada · Long Island, etc. — 7,10€<br>🥤 Sin alcohol 4,50€ · Smoothies desde 4,50€`,
    drinks:      () => `🍷 Vino desde 13,50€ botella · Cava/Champagne 15,95–55,95€ · Sangría 8,50/14,95€ · Cervezas 2,10–3,70€ · Cafés 1,50–2,20€ · Refrescos 3,00€`,
    kids:        () => `👶 Huevos fritos, bolitas de pollo, nuggets, salchichas, palitos de pescado, tallarines o calamares fritos, todos con papas — 5,80€ cada uno`,
    setmenus:    () => `🍽️ Menú A 14,90€/persona · Menú B 17,90€ · Menú C 20,50€ · Menú D 22,90€ (para 2 personas, incluyen entrantes, pato crujiente y principales)`,
    recommend:   () => `✨ Recomendamos:<br>🍣 Tartar de Sake o Nigiri variado<br>🔥 Teppanyaki en directo (Lubina, Solomillo o Langostinos)<br>🇹🇭 Tom Yam Gung o Phad Thai<br>🇨🇳 Pato Pekín con crepes<br>🍡 Daifuku Mochi`,
    chefs:       () => `👨‍🍳 <strong>Chef Feng Zhang Wang</strong> — born Fujian, China 1964. Opened ENJOY in 1995. 30+ years of mastery.<br>🔥 <strong>Chef Leo</strong> — born Japan 1975, trained in Tokyo. Teppanyaki maestro — fire, precision, theatre.`,
    prices:      () => `💰 Sushi 4,00–10,50€ · Sopas/Entrantes 2,95–14,90€ · Arroz/Tallarines 3,00–10,50€ · Carnes/Aves 6,75–17,50€ · Mariscos 11,50–35,50€ · Postres 2,80–4,95€ · Cócteles 7,10€ · Vino desde 13,50€`,
    fallback:    () => `😊 I can help with: 🍣 Menu · ⚠️ Allergens · 🕐 Hours · 📍 Location · 📅 Reservations · 🛵 Delivery · 🍸 Cocktails. What would you like to know?`,
  };

  return (R[intent] || R.fallback)();
}

function typingDelay(t) { return Math.min(500 + t.length * 10, 2200); }

let chatHistory = [];

async function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addMessage('user', text);
  chatHistory.push({ role: 'user', content: text });
  showTyping();

  let reply = null;

  try {
    const res = await fetch(AI_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: chatHistory.slice(-14), system: RESTAURANT_SYSTEM }),
    });
    if (res.ok) {
      const data = await res.json();
      reply = data.reply || null;
    }
  } catch {}

  if (!reply) reply = buildLocalReply(text);

  chatHistory.push({ role: 'assistant', content: reply });
  removeTyping();
  addMessage('bot', reply);
}

function sendSuggestion(t) { document.getElementById('chatInput').value = t; sendChatMessage(); }
function sendSuggestionKey(key) {
  const T = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  sendSuggestion(T[key] || TRANSLATIONS.en[key] || '');
}
function handleChatKey(e) { if (e.key === 'Enter') sendChatMessage(); }

function addMessage(role, text) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `msg ${role}`;
  const T = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  div.innerHTML = `<span class="msg-label">${role === 'user' ? (T.chat_you_label || 'You') : 'ENJOY AI'}</span>
    <div class="msg-bubble">${text.replace(/\n/g, '<br>')}</div>`;
  msgs.appendChild(div); msgs.scrollTop = msgs.scrollHeight;
}
function showTyping() {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'msg bot'; div.id = 'typingIndicator';
  div.innerHTML = `<span class="msg-label">ENJOY AI</span>
    <div class="typing-dots"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
  msgs.appendChild(div); msgs.scrollTop = msgs.scrollHeight;
}
function removeTyping() { const t = document.getElementById('typingIndicator'); if (t) t.remove(); }

/* ─────────────────────────────────────────────────────────────
   DISH FINDER QUIZ
───────────────────────────────────────────────────────────── */
let quizAnswers = {}, currentStep = 0;

const DISH_LOGIC = {
  'light-fresh':  {'no-restrictions':'Sashimi Selection (12 pcs)','vegetarian':'Seaweed Salad','gluten-free':'Salmon Nigiri (8 pcs)','seafood-only':'Sashimi Selection (12 pcs)'},
  'rich-savoury': {'no-restrictions':'Teppanyaki Beef Sirloin','vegetarian':'Tofu Green Curry','gluten-free':'Teppanyaki King Prawn','seafood-only':'Steamed Sea Bass'},
  'spicy-bold':   {'no-restrictions':'Tom Yum Goong','vegetarian':'Mapo Tofu','gluten-free':'Tom Yum Goong','seafood-only':'Thai Yellow Prawn Curry'},
  'sweet-tangy':  {'no-restrictions':'Sweet & Sour Pork','vegetarian':'Banana Tempura','gluten-free':'Mochi Ice Cream','seafood-only':'Dragon Roll'},
};
const DISH_REASONS = {
  'Sashimi Selection (12 pcs)': 'Ultra-fresh, pristine, elegant — the purest Japanese experience 🍣',
  'Seaweed Salad':              'Light, healthy and beautifully refreshing. Vegan & GF 🌿',
  'Salmon Nigiri (8 pcs)':      'Fresh Atlantic salmon hand-pressed over seasoned rice. Simple elegance 🍣',
  'Teppanyaki Beef Sirloin':    'Prime sirloin with live fire theatre — rich, savoury, unforgettable 🔥',
  'Tofu Green Curry':           'Silken tofu in fragrant coconut curry. Rich, aromatic, plant-based 🌿',
  'Teppanyaki King Prawn':      'Jumbo prawns in a blaze of fire. Gluten-free and spectacular 🦐🔥',
  'Steamed Sea Bass':           'Whole Atlantic sea bass Cantonese-style. Fresh, premium, GF 🐟',
  'Tom Yum Goong':              'Thailand\'s most iconic soup. Fiery, fragrant, unforgettable 🌶️🌶️🌶️',
  'Mapo Tofu':                  'Spicy Sichuan tofu in rich black bean sauce. Bold and comforting 🌶️',
  'Thai Yellow Prawn Curry':    'Juicy prawns in fragrant coconut curry. Spiced perfectly 🦐',
  'Sweet & Sour Pork':          'The iconic Chinese classic — crispy pork in vibrant sweet-sour sauce 🇨🇳',
  'Banana Tempura':             'Warm crispy banana with vanilla ice cream. A sweet dream 🍌',
  'Mochi Ice Cream':            'Japanese rice cakes with matcha, mango, red bean. GF and beautiful 🍡',
  'Dragon Roll':                'Prawn tempura, avocado, spicy mayo — our most popular roll 🍣',
};

function selectOption(step, value) {
  quizAnswers[step] = value;
  document.querySelectorAll(`#step${step} .quiz-option`).forEach(b => b.classList.remove('selected'));
  event.target.classList.add('selected');
  document.getElementById(`dot${step}`).classList.add('done');
  setTimeout(() => {
    if (step < 3) {
      document.getElementById(`step${step}`).classList.remove('active');
      currentStep = step + 1;
      document.getElementById(`step${currentStep}`).classList.add('active');
      document.getElementById(`dot${currentStep}`).classList.add('done');
    } else { runDishFinder(); }
  }, 380);
}

function runDishFinder() {
  document.getElementById('step3').classList.remove('active');
  document.getElementById('quizLoading').classList.add('show');
  setTimeout(() => {
    const fl = quizAnswers[0] || 'light-fresh';
    const dt = quizAnswers[1] || 'no-restrictions';
    const cu = quizAnswers[3];
    let dish;
    if      (cu === 'japanese') dish = dt === 'gluten-free' ? 'Salmon Nigiri (8 pcs)' : 'Sashimi Selection (12 pcs)';
    else if (cu === 'thai')     dish = dt === 'vegetarian' ? 'Mapo Tofu' : fl === 'spicy-bold' ? 'Tom Yum Goong' : 'Thai Green Curry';
    else if (cu === 'chinese')  dish = dt === 'vegetarian' ? 'Mapo Tofu' : 'Peking Duck with Pancakes';
    else if (cu === 'surprise') dish = ['Dragon Roll','Teppanyaki Show Menu','Tom Yum Goong','Peking Duck with Pancakes','Lychee Martini'][Math.floor(Math.random()*5)];
    else dish = (DISH_LOGIC[fl] || {})[dt] || 'Dragon Roll';
    showDishResult(dish, DISH_REASONS[dish] || 'A perfect match for your taste — we think you\'ll love it! ✨');
  }, 1800);
}

function showDishResult(dish, reason) {
  document.getElementById('quizLoading').classList.remove('show');
  document.getElementById('dishResultName').textContent = dish;
  document.getElementById('dishResultDesc').textContent = reason;
  document.getElementById('dishResult').classList.add('show');
}

function resetQuiz() {
  quizAnswers = {}; currentStep = 0;
  document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
  document.getElementById('step0').classList.add('active');
  document.getElementById('dishResult').classList.remove('show');
  document.getElementById('quizLoading').classList.remove('show');
  document.querySelectorAll('.quiz-prog-dot').forEach((d,i) => d.classList.toggle('done', i === 0));
  document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
}

/* ─────────────────────────────────────────────────────────────
   CORE: LOADER · CURSOR · NAVBAR · PARTICLES · REVEAL · LIGHTBOX
───────────────────────────────────────────────────────────── */
// ── LOADER ───────────────────────────────────────────────────
// Uses DOMContentLoaded + hard fallback so it ALWAYS dismisses
// even if external images or fonts are slow to load
function dismissLoader() {
  const loader = document.getElementById('loader');
  const hero   = document.getElementById('hero');
  if (!loader || loader.classList.contains('hidden')) return;
  loader.classList.add('hidden');
  if (hero) hero.classList.add('loaded');
  initParticles();
}

// Primary: dismiss after DOM is ready + 2.4s animation
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(dismissLoader, 2400);
});

// Fallback: if load event fires first (all resources loaded), use that
window.addEventListener('load', () => {
  setTimeout(dismissLoader, 2400);
});

// Hard fallback: ALWAYS dismiss after 4s no matter what
setTimeout(dismissLoader, 4000);

// Custom cursor
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let mx=0, my=0, rx=0, ry=0;
window.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  if (cursorDot) { cursorDot.style.left = mx+'px'; cursorDot.style.top = my+'px'; }
});
(function tick() {
  if (cursorRing) {
    rx += (mx-rx)*0.12; ry += (my-ry)*0.12;
    cursorRing.style.left = rx+'px'; cursorRing.style.top = ry+'px';
  }
  requestAnimationFrame(tick);
})();

// Hero orb mouse parallax
window.addEventListener('mousemove', e => {
  const xR = (e.clientX/window.innerWidth  - 0.5)*2;
  const yR = (e.clientY/window.innerHeight - 0.5)*2;
  document.querySelectorAll('.hero-orb').forEach((orb,i) => {
    const d = [0.025, 0.04][i] || 0.03;
    orb.style.transform = `translate(${xR*40*d*100}px,${yR*40*d*100}px)`;
  });
});

// Hero card mouse glow
const heroCard = document.getElementById('heroCard');
if (heroCard) {
  heroCard.addEventListener('mousemove', e => {
    const r = heroCard.getBoundingClientRect();
    heroCard.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100).toFixed(1)+'%');
    heroCard.style.setProperty('--my', ((e.clientY-r.top)/r.height*100).toFixed(1)+'%');
  });
}

// Particles
function initParticles() {
  const c = document.getElementById('particles');
  if (!c) return;
  for (let i=0; i<16; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `left:${Math.random()*100}vw;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px;animation-duration:${10+Math.random()*14}s;animation-delay:${Math.random()*12}s`;
    c.appendChild(p);
  }
}

// ══════════════════════════════════════════════════════════
// CINEMATIC HERO SCROLL ENGINE
// Fase 1 (0–5.2s): CSS animations manejan la entrada
// Fase 2 (5.2s+):  JS rAF + lerp toma el control del scroll
// Las dos fases NO se solapan — .hero-scroll-active es el handoff
// ══════════════════════════════════════════════════════════

const heroBg       = document.getElementById('heroBg');
const heroSection  = document.getElementById('hero');
const heroTitle    = document.getElementById('heroTitle');
const heroJp       = document.getElementById('heroJp');
const heroSubBrand = document.getElementById('heroSubBrand');
const heroDivider  = document.getElementById('heroDivider');
const heroCta      = document.getElementById('heroCta');
const heroStats    = document.getElementById('heroStats');
const heroScrollEl = document.getElementById('heroScrollIndicator');
const heroRing     = document.getElementById('heroRing');

// Lerp — la clave de la fluidez Apple/Tesla
function lerp(a, b, t) { return a + (b - a) * t; }

// easeOut cúbica — desaceleración orgánica
function easeOut3(t) { return 1 - Math.pow(1 - Math.min(t, 1), 3); }

let rawScroll    = 0;
let smoothScroll = 0;
let heroReady    = false;

window.addEventListener('scroll', () => { rawScroll = window.scrollY; }, { passive: true });

// Handoff: CSS animations done → JS scroll takes over
// DOMContentLoaded + hard timeout (doesn't depend on image loading)
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(activateHeroScroll, 5200);
});
setTimeout(activateHeroScroll, 6000); // hard fallback

function activateHeroScroll() {
  if (heroReady) return; // already activated
  heroReady = true;

    // 1. Añadir clase que desactiva las CSS animations
    if (heroSection) heroSection.classList.add('hero-scroll-active');

    // 2. Fijar estado visible limpio para que JS empiece desde aquí
    const els = [heroJp, heroSubBrand, heroDivider, heroCta, heroStats, heroScrollEl];
    els.forEach(el => {
      if (!el) return;
      el.style.opacity   = '1';
      el.style.transform = '';
    });
    if (heroTitle) {
      heroTitle.style.opacity   = '1';
      heroTitle.style.transform = '';
    }
}

function cinematicLoop() {
  // Factor 0.07: suavísimo, como un slider magnético
  // Sube a 0.12 si quieres más respuesta inmediata
  smoothScroll = lerp(smoothScroll, rawScroll, 0.07);

  const s        = smoothScroll;
  const vh       = window.innerHeight;
  const progress = s / vh;          // 0 = top, 1 = hero fuera de pantalla
  const ep       = easeOut3(progress);

  // Navbar
  navbar.classList.toggle('scrolled', rawScroll > 60);

  if (s < vh * 1.3) {

    // ── FONDO: 28% de velocidad → parallax profundo ─────────
    // El hero-bg-layer tiene top/bottom:-25% para dar margen de movimiento
    if (heroBg) {
      heroBg.style.transform = `translateY(${s * 0.28}px)`;
    }

    // ── ANILLO: velocidad media + fade suave ─────────────────
    if (heroRing) {
      heroRing.style.transform = `translate(-50%, calc(-50% + ${s * 0.14}px))`;
      heroRing.style.opacity   = Math.max(0, 1 - ep * 2.4).toFixed(3);
    }

    // Efectos de contenido solo tras el handoff
    if (heroReady) {

      // ── KANJI: primera en desaparecer (muy rápido) ──────────
      if (heroJp) {
        heroJp.style.opacity   = Math.max(0, 1 - ep * 5.5).toFixed(3);
        heroJp.style.transform = `translateY(${s * 0.10}px)`;
      }

      // ── TÍTULO: se encoge + asciende ────────────────────────
      // scale: 1.0 → 0.90 (sutil, pero crea profundidad real)
      if (heroTitle) {
        const scale = (1 - Math.min(ep * 0.10, 0.10)).toFixed(4);
        heroTitle.style.transform = `translateY(${(s * 0.22).toFixed(1)}px) scale(${scale})`;
        heroTitle.style.opacity   = Math.max(0, 1 - ep * 2.8).toFixed(3);
      }

      // ── SUB-BRAND + DIVISOR ──────────────────────────────────
      if (heroSubBrand) {
        heroSubBrand.style.opacity   = Math.max(0, 1 - ep * 4.2).toFixed(3);
        heroSubBrand.style.transform = `translateY(${(s * 0.16).toFixed(1)}px)`;
      }
      if (heroDivider) {
        heroDivider.style.opacity = Math.max(0, 1 - ep * 3.5).toFixed(3);
      }

      // ── CTA BOTONES ──────────────────────────────────────────
      if (heroCta) {
        heroCta.style.opacity   = Math.max(0, 1 - ep * 3.0).toFixed(3);
        heroCta.style.transform = `translateY(${(s * 0.13).toFixed(1)}px)`;
      }

      // ── STATS: últimas en desaparecer ────────────────────────
      if (heroStats) {
        heroStats.style.opacity   = Math.max(0, 1 - ep * 2.4).toFixed(3);
        heroStats.style.transform = `translateY(${(s * 0.09).toFixed(1)}px)`;
      }

      // ── INDICADOR DE SCROLL: casi inmediato ─────────────────
      if (heroScrollEl) {
        heroScrollEl.style.opacity = Math.max(0, 1 - ep * 8).toFixed(3);
      }
    }
  }

  requestAnimationFrame(cinematicLoop);
}

cinematicLoop();


// Hamburger
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
hamburger.addEventListener('keypress', e => { if (e.key==='Enter') hamburger.click(); });
function closeMobileMenu() {
  hamburger.classList.remove('open'); mobileMenu.classList.remove('open'); document.body.style.overflow = '';
}

// Reveal on scroll
new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('visible');
}), { threshold: 0.1 }).observe = (function(origObserve) {
  return function(el) { origObserve.call(this, el); };
})(IntersectionObserver.prototype.observe);

const revealObs = new IntersectionObserver(entries =>
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(r => revealObs.observe(r));

// Lightbox
function openLightbox(src) {
  document.getElementById('lightboxImg').style.backgroundImage = `url('${src}')`;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lightbox').addEventListener('click', function(e) { if(e.target===this) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key==='Escape') closeLightbox(); });

/* ─────────────────────────────────────────────────────────────
   RESERVATION FORM
───────────────────────────────────────────────────────────── */
function submitReservation(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  btn.textContent = '✓ ' + (t.form_submit || 'Reservation Sent!').replace('✦ ','').replace('Confirm ','') + ' ✓';
  btn.style.background = '#4ade80'; btn.style.color = '#111';
  setTimeout(() => {
    btn.innerHTML = t.form_submit || '✦ Confirm Reservation';
    btn.style.background = ''; btn.style.color = '';
    e.target.reset();
  }, 4000);
}

/* ══════════════════════════════════════════════════════════════
   AI PREMIUM FEATURES
   1. Daily Menu Generator
   2. Special Occasion Planner
   3. Pairing Assistant
   4. Review Sentiment Analyser
══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────
   SHARED: Claude API call (with elegant local fallback)
───────────────────────────────────────────────────────────── */
async function callClaude(prompt, fallbackFn) {
  const key = GEMINI_API_KEY_BROWSER;
  if (key && key !== 'TU_CLAVE_AQUI') {
    try {
      const body = {
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: 'You are the AI assistant for ENJOY Asian Restaurant in Puerto del Carmen, Lanzarote. Respond only with the requested JSON or text, no preamble, no markdown code blocks.' }] },
        generationConfig: { maxOutputTokens: 800, temperature: 0.7 },
      };
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
      );
      if (!res.ok) return null;
      const data = await res.json();
      return (data.candidates?.[0]?.content?.parts || []).map(p => p.text || '').join('\n').trim() || null;
    } catch { return null; }
  }
  if (AI_ENDPOINT) {
    try {
      const res = await fetch(AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: prompt }],
          system: 'You are the AI assistant for ENJOY Asian Restaurant in Puerto del Carmen, Lanzarote. Respond only with the requested JSON or text, no preamble, no markdown code blocks.',
        }),
      });
      const data = await res.json();
      return data.reply || null;
    } catch { return null; }
  }
  return null;
}

function showGenerating(containerId, message = 'Generating your personalised content...') {
  document.getElementById(containerId).innerHTML = `
    <div class="ai-generating-msg">
      <div class="ai-gen-dots"><span></span><span></span><span></span></div>
      <p>${message}</p>
    </div>`;
}

/* ══════════════════════════════════════════════════════════════
   1. DAILY MENU GENERATOR
══════════════════════════════════════════════════════════════ */
const MENU_FALLBACKS = {
  tasting: {
    title: "Chef Wang's Daily Tasting Experience",
    courses: [
      { num: 'Amuse-bouche', name: 'Spiced Miso & Tofu Espuma', desc: 'A delicate spoonful of silken tofu blended with white miso, ginger oil and a dusting of nori powder — an elegant beginning.' },
      { num: 'First Course', name: 'Sashimi Trilogy', desc: 'Bluefin tuna, wild salmon and yellowtail, sourced this morning from local Atlantic fishermen. Served with aged soy, wasabi and yuzu zest.' },
      { num: 'Second Course', name: 'Har Gau & Black Truffle', desc: 'Our house-steamed prawn dumplings elevated with shaved black truffle and a light truffle-sesame dipping oil.' },
      { num: 'Main Course', name: 'Wagyu Teppanyaki — Chef Leo\'s Performance', desc: 'Grade A5 wagyu sirloin on the live iron griddle. Garlic compound butter, black garlic fried rice, seasonal vegetables. A full theatrical performance included.' },
      { num: 'Dessert', name: 'Mochi Trilogy & Matcha', desc: 'House-made mochi: matcha with white chocolate, mango with yuzu curd, red bean with sesame brittle. Served with a ceremonial matcha pour.' },
    ],
    pairing: 'We recommend beginning with a glass of our crisp Albariño, moving to a premium junmai sake with the sashimi, and finishing with a Lychee Martini alongside dessert.'
  },
  lunch: {
    title: "Today's Lunch Special",
    courses: [
      { num: 'Starter', name: 'Tom Kha Gai', desc: 'Fragrant coconut milk soup with free-range chicken, galangal, kaffir lime and lemongrass. A warming, aromatic opening.' },
      { num: 'Main', name: 'Teppanyaki King Prawn', desc: 'Atlantic jumbo prawns on the live griddle with lemon butter, wok-fried seasonal vegetables and jasmine rice. Chef Leo cooks at your table.' },
    ],
    pairing: 'A chilled glass of our house Viura pairs beautifully with the prawn main course.'
  },
  seasonal: {
    title: 'Seasonal Celebration Menu',
    courses: [
      { num: 'Opening', name: 'Canarian Tuna Tataki', desc: 'Local Atlantic bluefin tuna lightly seared with a sesame-citrus crust, pickled cucumber and micro coriander.' },
      { num: 'Soup', name: 'Tom Yum Goong', desc: "Thailand's most iconic soup made with today's catch — king prawns, lemongrass, galangal and wild lime leaves." },
      { num: 'Main', name: 'Slow-Roasted Peking Duck', desc: 'Whole duck slow-roasted for 4 hours with aromatic five-spice, served with house-made pancakes, cucumber and our aged hoisin.' },
      { num: 'Dessert', name: 'Seasonal Fruit Mochi', desc: 'Today\'s mochi filling chosen by Chef Wang based on the finest seasonal fruit available from local Canarian markets.' },
    ],
    pairing: 'A full pairing journey: Chablis with the tataki, Gewürztraminer with the duck, and our signature Tokyo Sour to close.'
  },
  romantic: {
    title: 'An Evening for Two',
    courses: [
      { num: 'Welcome', name: 'Champagne & Amuse-Bouche', desc: 'A glass of Billecart-Salmon Brut and two bites from the kitchen — tonight\'s surprise from Chef Wang.' },
      { num: 'First', name: 'Salmon & Avocado Roses', desc: 'Hand-cut Atlantic salmon and avocado arranged as roses, with citrus ponzu and ikura salmon roe.' },
      { num: 'Main', name: 'Teppanyaki for Two', desc: 'A private teppanyaki experience — wagyu beef and king prawn cooked live by Chef Leo at your table, with fried rice and seasonal vegetables.' },
      { num: 'Dessert', name: 'Chocolate Mochi & Rose Sorbet', desc: 'Dark chocolate mochi with raspberry coulis, house-made rose petal sorbet and edible gold leaf.' },
    ],
    pairing: 'Your sommelier recommends: Champagne to open, an aged Burgundy with the main, and a Sakura Spritz cocktail to close the evening.'
  }
};

async function generateDailyMenu() {
  const ingredients = document.getElementById('dailyMenuInput').value.trim();
  const style       = document.getElementById('dailyMenuStyle').value;
  const langPref    = document.getElementById('dailyMenuLang').value;
  const btn         = document.getElementById('dailyMenuBtn');
  const output      = document.getElementById('dailyMenuOutput');

  btn.innerHTML = '<span>Generating...</span>';
  btn.disabled = true;
  showGenerating('dailyMenuOutput', 'Creating your menu in ' + (langPref === 'all' ? '4 languages' : '1 language') + '...');

  const langs = langPref === 'all' ? ['en','es','de','fr'] : [langPref];
  const menuData = {};

  const prompt = ingredients
    ? `Create a ${style} menu for ENJOY Asian Restaurant (Puerto del Carmen, Lanzarote) featuring: ${ingredients}. Respond as JSON: {"title":"","courses":[{"num":"","name":"","desc":""}],"pairing":""}. Make descriptions evocative and luxurious.`
    : null;

  const apiResult = prompt ? await callClaude(prompt) : null;
  let baseMenu;
  try {
    baseMenu = apiResult ? JSON.parse(apiResult.replace(/```json|```/g,'').trim()) : MENU_FALLBACKS[style];
  } catch {
    baseMenu = MENU_FALLBACKS[style];
  }

  // Generate translations (simplified — in production API would translate)
  const langLabels = { en:'English', es:'Español', de:'Deutsch', fr:'Français' };
  langs.forEach(l => { menuData[l] = { ...baseMenu, lang: l }; });

  renderDailyMenu(menuData, langs, langLabels);
  btn.innerHTML = '<span>✦ Generate Today\'s Menu</span>';
  btn.disabled = false;
}

function renderDailyMenu(menuData, langs, langLabels) {
  const output = document.getElementById('dailyMenuOutput');
  const tabs   = langs.map(l => `<button class="ai-daily-lang-tab${l===langs[0]?' active':''}" onclick="switchMenuLang('${l}')">${langLabels[l]}</button>`).join('');

  const blocks = langs.map(l => {
    const m = menuData[l];
    return `<div class="ai-daily-menu-block${l===langs[0]?' active':''}" id="menu-block-${l}">
      <div class="ai-daily-menu-title">${m.title}</div>
      ${m.courses.map(c => `
        <div class="ai-daily-course">
          <div class="ai-daily-course-num">${c.num}</div>
          <div class="ai-daily-course-content">
            <div class="ai-daily-course-name">${c.name}</div>
            <div class="ai-daily-course-desc">${c.desc}</div>
          </div>
        </div>`).join('')}
      <div class="ai-daily-pairing">
        <div class="ai-daily-pairing-label">🍷 Sommelier Pairing</div>
        <div class="ai-daily-pairing-text">${m.pairing}</div>
      </div>
    </div>`;
  }).join('');

  output.innerHTML = `<div class="ai-daily-result">
    <div class="ai-daily-result-lang">${tabs}</div>
    ${blocks}
    <div style="margin-top:1.5rem;padding-top:1.2rem;border-top:1px solid var(--bg-border);display:flex;gap:1rem;flex-wrap:wrap">
      <a href="#reservation" class="btn-primary" style="font-size:0.55rem;padding:0.65rem 1.4rem"><span>✦ Reserve for this Menu</span></a>
      <button class="btn-secondary" onclick="printDailyMenu()" style="font-size:0.55rem;padding:0.65rem 1.4rem"><span>🖨 Print Menu</span></button>
    </div>
  </div>`;
}

function switchMenuLang(lang) {
  document.querySelectorAll('.ai-daily-lang-tab').forEach(b =>
    b.classList.toggle('active', b.textContent.trim() === {en:'English',es:'Español',de:'Deutsch',fr:'Français'}[lang]));
  document.querySelectorAll('.ai-daily-menu-block').forEach(b => b.classList.remove('active'));
  const block = document.getElementById(`menu-block-${lang}`);
  if (block) block.classList.add('active');
}

function printDailyMenu() {
  const content = document.querySelector('.ai-daily-menu-block.active');
  if (!content) return;
  const w = window.open('', '_blank');
  w.document.write(`<html><head><title>ENJOY Daily Menu</title>
    <style>body{font-family:Georgia,serif;padding:3rem;max-width:600px;margin:0 auto;color:#111}
    h2{font-size:1.8rem;font-weight:300;margin-bottom:2rem;border-bottom:1px solid #ccc;padding-bottom:1rem}
    .course{margin:1.5rem 0;padding:1rem 0;border-bottom:1px solid #eee}
    .num{font-size:0.65rem;letter-spacing:0.3em;text-transform:uppercase;color:#6d3fc0;margin-bottom:0.3rem}
    .name{font-size:1.2rem;font-weight:400;margin-bottom:0.3rem}
    .desc{font-style:italic;color:#666;font-size:0.9rem;line-height:1.6}
    .pairing{margin-top:2rem;padding:1rem;border-left:3px solid #6d3fc0;font-style:italic;color:#444}
    .footer{margin-top:3rem;text-align:center;font-size:0.75rem;color:#999;letter-spacing:0.2em;text-transform:uppercase}
    </style></head><body>${content.innerHTML}
    <div class="footer">ENJOY Asian Restaurant · Av. de las Playas 21 · Puerto del Carmen · Lanzarote</div>
    </body></html>`);
  w.document.close(); w.print();
}

/* ══════════════════════════════════════════════════════════════
   2. SPECIAL OCCASION PLANNER
══════════════════════════════════════════════════════════════ */
const OCCASION_PRESETS = {
  birthday:    "It's a birthday celebration for a group of 4 friends. They love sushi and trying new cocktails. One person is vegetarian.",
  anniversary: "Our 25th wedding anniversary dinner for 2. We both love Japanese cuisine, especially teppanyaki. Looking for something very special and romantic.",
  business:    "Business dinner for 6 clients visiting from London. They want to impress — premium experience, teppanyaki show, good wine. Professional but warm atmosphere.",
  proposal:    "I'm planning to propose during dinner. Table for 2, she loves sushi and rose champagne. I need everything to be perfect and completely private.",
};

const OCCASION_FALLBACKS = {
  birthday: {
    banner_title: 'A Birthday Celebration at ENJOY',
    banner_sub: 'A personalised evening crafted just for you',
    welcome_cocktail: 'We suggest our Dragon Blood cocktail as a welcome — vibrant, fun and unforgettable.',
    menu_suggestion: 'We recommend our Sushi Mix Especial to share, followed by Teppanyaki Chicken for the main show. For your vegetarian guest: Tofu Green Curry.',
    special_touch: 'A complimentary Mochi Ice Cream selection with a lit candle and our team singing — let us know the name for the personalised card.',
    greeting: 'Dear [Name], welcome to ENJOY on your special day! Tonight is all about you. Our team is here to make every moment unforgettable. Enjoy! — Chef Wang & the ENJOY Team',
  },
  anniversary: {
    banner_title: 'An Anniversary Evening to Remember',
    banner_sub: 'Your love story continues at ENJOY',
    welcome_cocktail: 'We propose our Sakura Spritz — delicate, floral, and romantic — to begin your evening.',
    menu_suggestion: 'A private teppanyaki table for two: Salmon and King Prawn cooked live by Chef Leo, followed by our Sashimi Selection to start.',
    special_touch: 'Rose petals on the table, a personalised handwritten card from Chef Wang, and a complimentary Champagne toast.',
    greeting: 'Dear [Names], twenty-five years of love — and many more to come. Tonight, ENJOY is entirely yours. — The ENJOY Team',
  },
  business: {
    banner_title: 'A Premium Business Dinner',
    banner_sub:"Impress your guests with Asia\'s finest",
    welcome_cocktail: 'We recommend our Tokyo Sour as a conversation-starting welcome cocktail — sophisticated and unexpected.',
    menu_suggestion: 'Begin with our Sharing Platter, followed by the full Teppanyaki Show Menu — 3 courses cooked live by Chef Leo. A natural talking point for the table.',
    special_touch: 'Reserved section of the teppanyaki area, premium wine service, and a personalised place card for each guest.',
    greeting: 'Welcome to ENJOY. This evening has been curated to ensure your guests experience the very best of Asian cuisine. We are honoured to host you. — The ENJOY Team',
  },
  proposal: {
    banner_title: 'The Perfect Proposal Dinner',
    banner_sub: 'We will make sure she says yes',
    welcome_cocktail: 'A glass of Billecart-Salmon Rosé Champagne — the only choice for this moment.',
    menu_suggestion: 'Our Salmon & Avocado Roses to start (beautifully presented), followed by a private teppanyaki for two. We can hide the ring in the mochi dessert if you wish.',
    special_touch: 'Rose petals spelling her name at the table, a pre-hidden bottle of Champagne ready for the moment, and complete privacy from other tables.',
    greeting: '"To the love of my life — I chose ENJOY because this is where every great adventure begins. Will you marry me?" — (we can personalise this completely for you)',
  },
};

function fillOccasion(preset) {
  document.getElementById('occasionInput').value = OCCASION_PRESETS[preset] || '';
}

async function generateOccasion() {
  const input     = document.getElementById('occasionInput').value.trim();
  const btn       = document.getElementById('occasionBtn');
  if (!input) { document.getElementById('occasionInput').focus(); return; }

  btn.innerHTML = '<span>Creating...</span>';
  btn.disabled = true;
  showGenerating('occasionOutput', 'Creating your personalised proposal...');

  const prompt = `You are ENJOY Asian Restaurant's concierge in Puerto del Carmen, Lanzarote. A guest says: "${input}". Create a personalised dining proposal. Respond as JSON with keys: banner_title, banner_sub, welcome_cocktail, menu_suggestion, special_touch, greeting. Be warm, personal and premium. Under 60 words per field.`;

  const apiResult = await callClaude(prompt);
  let data;
  try {
    data = apiResult ? JSON.parse(apiResult.replace(/```json|```/g,'').trim()) : null;
  } catch { data = null; }

  // Fallback: detect preset from input keywords
  if (!data) {
    const low = input.toLowerCase();
    const key = low.includes('birthday') ? 'birthday'
              : low.includes('annivers') ? 'anniversary'
              : low.includes('business') || low.includes('client') ? 'business'
              : low.includes('propos') || low.includes('marry') ? 'proposal'
              : 'anniversary';
    data = OCCASION_FALLBACKS[key];
  }

  renderOccasion(data, input);
  btn.innerHTML = '<span>✦ Create My Proposal</span>';
  btn.disabled = false;
}

function renderOccasion(d, inputText) {
  document.getElementById('occasionOutput').innerHTML = `
    <div class="ai-occasion-result">
      <div class="ai-occasion-banner">
        <div class="ai-occasion-banner-title">${d.banner_title}</div>
        <div class="ai-occasion-banner-sub">${d.banner_sub}</div>
      </div>
      <div class="ai-occasion-section">
        <div class="ai-occasion-section-title">🥂 Welcome Cocktail</div>
        <div class="ai-occasion-section-content">${d.welcome_cocktail}</div>
      </div>
      <div class="ai-occasion-section">
        <div class="ai-occasion-section-title">🍽️ Menu Suggestion</div>
        <div class="ai-occasion-section-content">${d.menu_suggestion}</div>
      </div>
      <div class="ai-occasion-section">
        <div class="ai-occasion-section-title">✨ Special Touch</div>
        <div class="ai-occasion-section-content">${d.special_touch}</div>
      </div>
      <div class="ai-occasion-section">
        <div class="ai-occasion-section-title">💬 Personalised Greeting</div>
        <div class="ai-occasion-greeting">${d.greeting}</div>
      </div>
      <div class="ai-occasion-cta">
        <a href="#reservation" class="btn-primary" style="font-size:0.55rem;padding:0.65rem 1.4rem">
          <span>✦ Book This Experience</span>
        </a>
        <a href="tel:+34646906897" class="btn-secondary" style="font-size:0.55rem;padding:0.65rem 1.4rem">
          <span>📞 Call to Discuss</span>
        </a>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════════════════════
   3. PAIRING ASSISTANT
══════════════════════════════════════════════════════════════ */
const PAIRING_DISHES = [
  'Sashimi Selection', 'Dragon Roll', 'Teppanyaki Beef Sirloin',
  'Teppanyaki King Prawn', 'Tom Yum Goong', 'Thai Green Curry',
  'Peking Duck', 'Pad Thai', 'Tofu Green Curry', 'Sea Bass',
];

const PAIRING_DATA = {
  'Sashimi Selection': [
    { icon:'🍶', name:'Junmai Daiginjo Sake', type:'Premium Sake', match:5, why:'The purest sake style — clean, floral and almost invisible on the palate. It elevates the delicate fish without competing.' },
    { icon:'🍷', name:'Chablis Premier Cru', type:'White Wine', match:5, why:'Mineral, unoaked, with a precise acidity that mirrors the clean sea notes in the fish. A textbook pairing.' },
    { icon:'🍸', name:'Lychee Martini', type:'Signature Cocktail', match:3, why:'As an aperitif before sashimi — the lychee sweetness creates a beautiful contrast. Not a pairing for during.' },
  ],
  'Dragon Roll': [
    { icon:'🍶', name:'Nigori Sake (cloudy)', type:'Unfiltered Sake', match:4, why:'The creamy texture of nigori sake complements the spicy mayo and avocado beautifully. An unexpected delight.' },
    { icon:'🍸', name:'Asian Spice Mojito', type:'Signature Cocktail', match:5, why:'Lemongrass and ginger in the mojito echo the Asian spices in the roll. A perfect modern pairing.' },
    { icon:'🍺', name:'Asahi Super Dry', type:'Japanese Beer', match:4, why:'The dry finish of Asahi cuts through the richness of the tempura prawn and avocado. Classic and reliable.' },
  ],
  'Teppanyaki Beef Sirloin': [
    { icon:'🍷', name:'Rioja Reserva (Tempranillo)', type:'Red Wine', match:5, why:'The firm tannins and dark fruit of Rioja stand up perfectly to the charred, buttery wagyu. An iconic pairing.' },
    { icon:'🍷', name:'Burgundy Pinot Noir', type:'Red Wine', match:5, why:'Earthy, silky and with enough acid to cut the fat. The teppanyaki smoke adds complexity that mirrors Burgundy.' },
    { icon:'🍸', name:'Tokyo Sour', type:'Signature Cocktail', match:4, why:'Japanese whisky in the Tokyo Sour has natural affinity with the teppanyaki technique — smoke meets smoke.' },
  ],
  'Tom Yum Goong': [
    { icon:'🍷', name:'Riesling Spätlese (Off-dry)', type:'White Wine', match:5, why:'The residual sugar in Spätlese Riesling tames the chilli heat while its acidity amplifies the lemongrass brightness.' },
    { icon:'🍸', name:'Lychee & Mint Lemonade', type:'Non-Alcoholic', match:5, why:'The cooling sweetness and mint cut through the intense spice beautifully. Perfect for those avoiding alcohol.' },
    { icon:'🍺', name:'Sapporo Premium', type:'Japanese Beer', match:3, why:'Cold lager provides instant relief from the heat and cleanses the palate between sips of the intense broth.' },
  ],
  'Thai Green Curry': [
    { icon:'🍷', name:'Viognier (Rhône Valley)', type:'White Wine', match:5, why:'Stone fruit and floral notes in Viognier mirror the lemongrass and kaffir lime. The body holds against coconut cream.' },
    { icon:'🍸', name:'Coconut & Pineapple Shake', type:'Non-Alcoholic', match:4, why:'Coconut echoes the curry base, while pineapple adds a tropical brightness. Completely harmonious.' },
    { icon:'🍶', name:'Warm Sake (Junmai)', type:'Sake', match:4, why:'Warm sake softens the chilli and has an umami quality that deepens the flavour of the green curry paste.' },
  ],
  'Peking Duck': [
    { icon:'🍷', name:'Pinot Noir (New Zealand)', type:'Red Wine', match:5, why:'Lighter in body than Burgundy but with the same cherry fruit. The NZ style has a vivacity that cuts the rich duck fat.' },
    { icon:'🍺', name:'Tsingtao Beer', type:'Chinese Beer', match:5, why:'The classic Chinese pairing — Tsingtao\'s malt and light bitterness is exactly what Peking duck was made to accompany.' },
    { icon:'🍸', name:'Rising Sun Cocktail', type:'Signature Cocktail', match:4, why:'Blood orange and ginger beer in the Rising Sun echo the hoisin sauce and give the duck a vibrant, modern partner.' },
  ],
};

let selectedPairingDish = null;

function initPairingDishes() {
  const container = document.getElementById('pairingDishes');
  if (!container) return;
  container.innerHTML = PAIRING_DISHES.map(d =>
    `<button class="pairing-dish-btn" onclick="selectPairingDish('${d}')">${d}</button>`
  ).join('');
}

function selectPairingDish(dish) {
  selectedPairingDish = dish;
  document.querySelectorAll('.pairing-dish-btn').forEach(b =>
    b.classList.toggle('selected', b.textContent === dish));
  document.getElementById('pairingCustom').value = '';
}

async function generatePairing() {
  const customInput = document.getElementById('pairingCustom').value.trim();
  const dish = customInput || selectedPairingDish;
  if (!dish) { alert('Please select or type a dish first.'); return; }

  const btn = document.getElementById('pairingBtn');
  btn.innerHTML = '<span>Analysing...</span>';
  btn.disabled = true;
  showGenerating('pairingOutput', 'Our AI sommelier is finding the perfect pairing...');

  // Check local data first
  const localData = PAIRING_DATA[dish];
  if (localData && !customInput) {
    renderPairing(dish, localData);
    btn.innerHTML = '<span>🍷 Get Perfect Pairing</span>';
    btn.disabled = false;
    return;
  }

  // Try API for custom dishes
  const prompt = `You are the sommelier at ENJOY Asian Restaurant, Puerto del Carmen, Lanzarote. Our drinks menu: White wine €4.50, Red wine €4.50, Sake €6.50, Japanese Beer (Asahi/Sapporo) €4.50, Lychee Martini €11, Asian Spice Mojito €10, Tokyo Sour €12, Dragon Blood €11, Sakura Spritz €10.50, Buddha Margarita €11.50, Geisha €11, Rising Sun €10.50, Mango Lassi €6.50, Thai Iced Tea €5.50, Lychee Lemonade €5.50. For the dish "${dish}", suggest 3 pairings. Respond as JSON array: [{"icon":"emoji","name":"drink name","type":"drink type","match":1-5,"why":"1 sentence explanation"}]. Be specific and knowledgeable.`;

  const apiResult = await callClaude(prompt);
  let pairings;
  try {
    pairings = apiResult ? JSON.parse(apiResult.replace(/```json|```/g,'').trim()) : null;
  } catch { pairings = null; }

  if (!pairings) {
    // Generic intelligent fallback
    pairings = [
      { icon:'🍷', name:'House White Wine (Viura)', type:'White Wine', match:4, why:`A crisp, dry white wine is a versatile companion for ${dish} — the acidity brightens the dish's flavours.` },
      { icon:'🍶', name:'Junmai Sake', type:'Sake', match:4, why:`The subtle umami and clean finish of junmai sake complements Asian cuisine elegantly.` },
      { icon:'🍸', name:'Asian Spice Mojito', type:'Signature Cocktail', match:3, why:`Lemongrass and ginger in our house mojito echo the Asian spices and add a refreshing contrast.` },
    ];
  }

  renderPairing(dish, pairings);
  btn.innerHTML = '<span>🍷 Get Perfect Pairing</span>';
  btn.disabled = false;
}

function renderPairing(dish, pairings) {
  const scoreDots = n => [1,2,3,4,5].map(i =>
    `<div class="ai-pairing-score-dot${i<=n?' on':''}"></div>`).join('');
  document.getElementById('pairingOutput').innerHTML = `
    <div class="ai-pairing-result">
      <div class="ai-pairing-dish-name">Pairings for: ${dish}</div>
      ${pairings.map(p => `
        <div class="ai-pairing-item">
          <div class="ai-pairing-item-icon">${p.icon}</div>
          <div class="ai-pairing-item-content">
            <div class="ai-pairing-item-name">${p.name}</div>
            <div class="ai-pairing-item-type">${p.type}</div>
            <div class="ai-pairing-score">${scoreDots(p.match)}</div>
            <div class="ai-pairing-item-why">${p.why}</div>
          </div>
        </div>`).join('')}
      <div style="margin-top:1.2rem;padding-top:1rem;border-top:1px solid var(--bg-border)">
        <a href="#reservation" class="btn-secondary" style="font-size:0.52rem;padding:0.6rem 1.2rem;display:inline-flex">
          <span>Reserve & try this pairing →</span>
        </a>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════════════════════
   4. REVIEW SENTIMENT ANALYSER
══════════════════════════════════════════════════════════════ */
// Animate bars when section comes into view
const sentimentObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.sentiment-bar-fill').forEach(bar => {
        const pct = bar.getAttribute('data-pct');
        setTimeout(() => { bar.style.width = pct + '%'; }, 300);
      });
      sentimentObs.disconnect();
    }
  });
}, { threshold: 0.3 });

const sentimentSection = document.getElementById('ai-sentiment');
if (sentimentSection) sentimentObs.observe(sentimentSection);

async function generateSentimentSummary() {
  const btn = document.getElementById('sentimentBtn');
  btn.innerHTML = '<span>Analysing...</span>';
  btn.disabled = true;

  const prompt = `You are the analytics AI for ENJOY Asian Restaurant in Puerto del Carmen, Lanzarote. Based on this sentiment data: Food Quality 96%, Teppanyaki Show 98%, Location & Ambience 94%, Value for Money 89%, Service 91%. Most praised: teppanyaki show, fresh sushi, beachfront, Chef Leo, green curry, open kitchen, dim sum, sashimi quality. Areas to watch: wait times peak hours, reservation availability. Write a 3-sentence executive summary for the restaurant owner. Professional, data-driven, actionable. No bullet points.`;

  const apiResult = await callClaude(prompt);
  const summary = apiResult || 'ENJOY Asian Restaurant maintains exceptional guest satisfaction across all key metrics, with the teppanyaki show and food quality standing out as signature strengths that drive repeat visits and word-of-mouth referrals. The beachfront location and Chef Leo\'s theatrical cooking style create a differentiated experience that guests describe as unrepeatable on the island. The primary opportunity lies in managing peak-hour demand more effectively — specifically through optimised reservation slots and a waitlist system to convert overflow demand into bookings rather than missed revenue.';

  document.getElementById('sentimentSummary').innerHTML = `
    <div class="sentiment-summary-result">
      <div class="review-ai-response-label" style="margin-bottom:0.6rem">✦ AI Executive Summary</div>
      <div class="sentiment-summary-text">${summary}</div>
    </div>`;
  btn.innerHTML = '<span>✦ Regenerate Summary</span>';
  btn.disabled = false;
}

/* ── INIT PAIRING DISHES ON LOAD ──────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initPairingDishes();
});
