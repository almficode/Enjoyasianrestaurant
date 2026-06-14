/* ═══════════════════════════════════════════════════════════════
   ENJOY Asian Restaurant — AI Backend (Vercel serverless variant)
   Using Google Gemini API (free tier)

   USE THIS IF you're deploying on Vercel (or another platform that
   supports serverless functions) and want a FREE AI backend.

   SETUP ON VERCEL:
   1. Put this file at: api/chat.js  (at the project root)
   2. Get a free API key from https://aistudio.google.com/app/apikey
   3. In the Vercel dashboard → Settings → Environment Variables,
      add: GEMINI_API_KEY = AIzaSy...
   4. Deploy. The endpoint will be available at /api/chat
   5. In script.js, set: const AI_ENDPOINT = '/api/chat';

   No package.json needed — Vercel handles this automatically for
   files inside /api.

   FREE TIER LIMITS (gemini-2.0-flash, subject to change by Google):
   ~15 requests/minute, ~1500 requests/day. More than enough for a
   restaurant chat assistant.
═══════════════════════════════════════════════════════════════ */

const MODEL = 'gemini-2.0-flash';

// Simple in-memory rate limiting (per serverless instance — best effort only)
const requestLog = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 10; // stay safely under Gemini's free per-minute limit

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a minute.' });
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Server is missing its API key.' });
  }

  const { messages, system } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Missing "messages" array.' });
  }

  const cleanMessages = messages
    .filter(m => m && typeof m.content === 'string' && (m.role === 'user' || m.role === 'assistant'))
    .slice(-14)
    .map(m => ({ role: m.role, content: m.content.slice(0, 4000) }));

  if (cleanMessages.length === 0) {
    return res.status(400).json({ error: 'No valid messages provided.' });
  }

  // Gemini uses "user" / "model" roles instead of "user" / "assistant"
  const contents = cleanMessages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const body = {
    contents,
    generationConfig: { maxOutputTokens: 600, temperature: 0.7 },
  };

  if (typeof system === 'string' && system.trim()) {
    body.systemInstruction = { parts: [{ text: system.slice(0, 6000) }] };
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error('Gemini API error:', response.status, errText);
      return res.status(502).json({ error: 'AI service is temporarily unavailable.' });
    }

    const data = await response.json();
    const reply = (data.candidates?.[0]?.content?.parts || [])
      .map(p => p.text || '')
      .join('\n')
      .trim();

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Server error calling Gemini API:', err);
    return res.status(500).json({ error: 'Unexpected server error.' });
  }
}

