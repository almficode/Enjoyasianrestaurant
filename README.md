# ENJOY AI — Backend de conexión a Google Gemini (gratis)

Esto conecta el asistente de IA de la web (chat, generador de menú,
asistente de maridaje, planificador de ocasiones especiales, respuestas
a reseñas) con la API **gratuita** de Google Gemini, para que pueda
responder a cualquier pregunta sobre el restaurante con lenguaje natural.

El frontend (`script.js`) ya está configurado para llamar a `/api/chat`.
Solo falta desplegar UNA de las dos opciones siguientes según el hosting
que tenga el restaurante.

---

## Obtener la clave de API (gratis)

1. Ve a https://aistudio.google.com/app/apikey
2. Inicia sesión con una cuenta de Google
3. Click en "Create API key"
4. Copia la clave (empieza por `AIzaSy...`)

No requiere tarjeta de crédito para el nivel gratuito.

**Límites del nivel gratuito** (modelo `gemini-2.0-flash`, sujeto a
cambios por Google): aproximadamente 15 peticiones por minuto y 1500 al
día. Más que suficiente para el chat de un restaurante.

---

## Opción A — Funciones serverless (Vercel, Netlify) — RECOMENDADA

Usa `api/chat.js`. No necesita servidor propio ni `npm install` — la
plataforma lo gestiona automáticamente. Es la forma más sencilla y
también gratuita.

1. Coloca la carpeta `api/` en la raíz de tu proyecto (junto a
   `index.html`, `menu.html`, etc.)
2. En el panel de Vercel → tu proyecto → **Settings** →
   **Environment Variables**, añade:
   ```
   GEMINI_API_KEY = AIzaSy...
   ```
3. Despliega (o "Redeploy" si ya estaba desplegado). La ruta
   `/api/chat` quedará disponible automáticamente.

---

## Opción B — Servidor Node.js (Render, Railway, VPS, etc.)

Usa `server.js`. Funciona en cualquier hosting que permita ejecutar un
proceso Node.js continuo.

1. Sube la carpeta `server/` a tu repositorio / hosting.
2. Crea un archivo `.env` (copia `.env.example`) con tu clave real:
   ```
   GEMINI_API_KEY=AIzaSy...
   ```
3. Instala dependencias y arranca:
   ```
   npm install
   npm start
   ```
4. El servidor escuchará en el puerto 3001 (o el que indiques en `PORT`).
5. Configura tu hosting/proxy para que las peticiones a
   `https://tudominio.com/api/chat` lleguen a este servidor.

---

## Seguridad incluida

- La clave de API **nunca** se expone al navegador — solo vive en el
  servidor/función.
- Límite de peticiones por IP (10 por minuto) para no superar el nivel
  gratuito de Gemini.
- Validación y recorte de mensajes para controlar el tamaño de cada
  petición.

---

## Si algo falla

Si `/api/chat` no responde (o no está desplegado), el asistente cae
automáticamente al motor de respuestas locales basado en reglas que ya
tenías — la web sigue funcionando, solo con respuestas menos flexibles.

Si ves el error "AI service is temporarily unavailable", revisa los
logs de Vercel/tu servidor — normalmente significa que la clave de API
es incorrecta o que se ha superado el límite gratuito momentáneamente.
