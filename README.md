# WayfareWise

A complete full-stack AI Travel Recommendation SaaS built with React + Vite, TailwindCSS, Framer Motion, Flask, MongoDB, JWT authentication, OpenAI API integration, and Mapbox-ready interactive maps.

## Folder Structure

```text
ai-travel-planner/
├── frontend/
│   ├── src/
│   │   ├── animations/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── .env.example
│   ├── app.py
│   └── requirements.txt
├── .gitignore
└── README.md
```

## Features

- Cinematic landing page with premium dark SaaS UI
- Signup/login with hashed passwords and JWT authentication
- AI travel chat assistant powered by OpenAI when `OPENAI_API_KEY` is set
- Streaming AI chat responses over Server-Sent Events
- Deterministic fallback AI responses when no OpenAI key is configured
- Recommendation engine using budget, weather, interests, travel type, season, and history signals
- Vector embedding recommendations with OpenAI embeddings and local fallback vectors
- AI itinerary generation
- Hotel matching by budget, luxury, family, workcation, and backpacking style
- Hidden gems recommender
- Weather-aware travel suggestions
- Review intelligence summaries
- Budget optimization
- Crowd prediction
- Interactive map panel with Mapbox when token is configured, demo map fallback otherwise
- Dashboard with saved trips, recent searches, and favorite destinations
- Vercel-ready frontend and Render-ready backend

## Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

## Frontend Setup

Open a second terminal:

```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## Environment Variables

Backend `.env`:

```text
SECRET_KEY=replace-with-a-long-random-secret
JWT_SECRET=replace-with-a-different-long-random-secret
JWT_EXPIRES_DAYS=7
MONGO_URI=mongodb://localhost:27017/ai_travel_planner
OPENAI_API_KEY=sk-your-openai-api-key
OPENAI_MODEL=gpt-4.1-mini
OPENAI_EMBEDDING_MODEL=text-embedding-3-small
MAPBOX_TOKEN=pk-your-mapbox-token
OPENWEATHER_API_KEY=your-openweather-key
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
FLASK_DEBUG=true
PORT=5000
```

Frontend `.env`:

```text
VITE_API_URL=http://127.0.0.1:5000/api
VITE_MAPBOX_TOKEN=pk-your-mapbox-token
```

## MongoDB

Use local MongoDB or MongoDB Atlas. Put the connection string in `backend/.env`.

If MongoDB is not running, the backend uses an in-memory fallback so the app still works for demos. For production, use MongoDB Atlas.

## OpenAI API

The backend uses the OpenAI Python SDK and the Responses API. Add your key to `backend/.env`:

```text
OPENAI_API_KEY=sk-your-openai-api-key
OPENAI_MODEL=gpt-4.1-mini
```

Without a key, chat, itinerary, and review intelligence still return high-quality fallback responses so the project remains demoable.

Embeddings use `text-embedding-3-small` by default. If no OpenAI key is configured, the backend uses a deterministic local hashing vectorizer so semantic recommendation scoring still works during demos.

## Mapbox

Add a public Mapbox token to `frontend/.env`:

```text
VITE_MAPBOX_TOKEN=pk-your-mapbox-token
```

Without a token, the UI displays an interactive styled demo map with live backend markers.

## Main API Routes

```text
POST /api/auth/signup
POST /api/auth/login
GET  /api/user/dashboard
POST /api/user/favorite
GET  /api/travel/destinations
POST /api/travel/recommendations
POST /api/travel/itinerary
POST /api/travel/chat
POST /api/travel/chat/stream
POST /api/travel/hotels/:destinationId
GET  /api/travel/hidden-gems/:destinationId
GET  /api/travel/weather/:destinationId
GET  /api/travel/reviews/:destinationId
POST /api/travel/budget/:destinationId
POST /api/travel/crowd/:destinationId
POST /api/travel/maps
POST /api/travel/save-trip
```

## Deployment

Frontend on Vercel:

```bash
cd frontend
npm run build
```

Set `VITE_API_URL` to your Render backend URL plus `/api`.

Backend on Render:

```bash
cd backend
gunicorn app:app
```

Set environment variables in Render, especially `MONGO_URI`, `JWT_SECRET`, `OPENAI_API_KEY`, and `CORS_ORIGINS`.
