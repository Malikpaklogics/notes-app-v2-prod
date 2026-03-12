# Notes App v2 - Production

A modern, full-stack notes application built with React, Express, and MongoDB.

## 🎯 Features

✅ Create, read, update, delete notes
✅ Search notes by title
✅ Responsive Tailwind UI
✅ JWT authentication (coming soon)
✅ Real-time sync
✅ Docker support

## 🏗️ Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS enabled

## 🚀 Quick Start

### Backend
```bash
cd server
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd client
cp .env.example .env
npm install
npm run dev
```

### Docker
```bash
docker-compose up --build
```

## 📡 API Endpoints

```
GET    /api/notes           - Get all notes
GET    /api/notes/:id       - Get single note
POST   /api/notes           - Create note
PUT    /api/notes/:id       - Update note
DELETE /api/notes/:id       - Delete note
```

## 📋 License

MIT
