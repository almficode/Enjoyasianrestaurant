/* ═══════════════════════════════════════════════════════════════
   ENJOY Asian Restaurant — AI Backend (server.js)
   Proxies chat requests from the website to the Google Gemini API
   (free tier).

   SETUP:
   1. npm install
   2. Get a free API key from https://aistudio.google.com/app/apikey
   3. Create a .env file with: GEMINI_API_KEY=AIzaSy...
   4. npm start
   5. In script.js, set: const AI_ENDPOINT = '/api/chat';

   DEPLOY:
   Works on any Node host that supports a custom server, e.g.
   Render, Railway, Fly.io, a VPS, etc. (NOT plain static hosting
   like GitHub Pages or basic Netlify/Vercel "static" sites —
   those need the "serverless function" version instead, see
   api/chat.js for that variant).

   FREE TIER LIMITS (gemini-2.0-flash, subject to change by Google):
   ~15 requests/minute, ~1500 requests/day. More than enough for a
   restaurant chat assistant.
═══════════════════════════════════════════════════════════════ */

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL = 'gemini-2.0-flash';

if (!GEMINI_API_KEY) {
  console.error('Missing GEMINI_API_KEY in .env — the AI assistant will not work.');
}

app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Simple in-memory rate limiting per IP (basic abuse protection)
const requestLog = new Map(); // ip -> [timestamps]
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 10; // stay safely under Gemini's free per-minute limit

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

app.post('/api/chat', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket.remoteAddress;

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a minute.' });
  }

  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Server is missing its API key.' });
  }

  const { messages, system } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Missing "messages" array.' });
  }

  // Basic validation / sanitisation of the conversation history
  const cleanMessages = messages
    .filter(m => m && typeof m.content === 'string' && (m.role === 'user' || m.role === 'assistant'))
    .slice(-14) // keep payload small
    .map(m => ({ role: m.role, content: m.content.slice(0, 4000) })); // cap message length

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

    return res.json({ reply });
  } catch (err) {
    console.error('Server error calling Gemini API:', err);
    return res.status(500).json({ error: 'Unexpected server error.' });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`ENJOY AI backend running on port ${PORT}`);
});
