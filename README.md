# Creator Directory

A full-stack Creator Directory application built with **Next.js**, **Node.js**, and **Express.js**. Users can browse, search, filter, sort, add, edit, and delete creators through a clean and responsive interface.

## Live Demo

**Frontend:** https://creator-directory-omega.vercel.app

**Backend API:** https://creator-directory-backend.onrender.com

**API Endpoint:**
https://creator-directory-backend.onrender.com/creators

## GitHub Repository

https://github.com/princekumart/creator-directory

---

## Features

- View creators
- Add new creators
- Edit creator details
- Delete creators
- Filter by niche
- Filter by minimum followers
- Filter by maximum followers
- Sort by followers
- Sort by engagement rate
- Responsive UI
- REST API integration

---

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Axios
- CSS

### Backend
- Node.js
- Express.js
- CORS

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Project Structure

```
creator-directory/
│
├── backend/
│   ├── server.js
│   ├── seed.json
│   ├── package.json
│
├── frontend/
│   ├── app/
│   ├── api.ts
│   ├── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/princekumart/creator-directory.git
```

### Backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:4001
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## API Endpoints

### Get Creators

```
GET /creators
```

### Add Creator

```
POST /creators
```

### Update Creator

```
PATCH /creators/:id
```

### Delete Creator

```
DELETE /creators/:id
```

---

## Deployment

### Frontend

Vercel

https://creator-directory-omega.vercel.app

### Backend

Render

https://creator-directory-backend.onrender.com

---

## Author

**Prince Kumar Tiwari**

GitHub:
https://github.com/princekumart

---

## License

This project is for educational and portfolio purposes.
