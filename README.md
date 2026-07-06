# Creator Directory

A full-stack Creator Directory application built with **Next.js**, **TypeScript**, **Express.js**, **React Query**, and **Tailwind CSS**.

## Features

- Display creators in a paginated table
- Server-side pagination
- Server-side sorting
- Server-side filtering
- Add new creators
- Edit creator details
- Delete creators
- React Query for data fetching and caching
- Responsive UI with Tailwind CSS

---

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- TanStack React Query

### Backend
- Node.js
- Express.js
- CORS

---

## Folder Structure

```
Creator-Directory
│
├── backend
│   ├── server.js
│   ├── seed.json
│   └── package.json
│
├── frontend
│   ├── app
│   ├── components
│   ├── hooks
│   ├── services
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/princekumart/creator-directory.git
```

---

## Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:4001
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev -- --webpack
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

Supports:

- page
- limit
- sortBy
- order
- niche
- minFollowers
- maxFollowers

---

### Create Creator

```
POST /creators
```

---

### Update Creator

```
PATCH /creators/:id
```

---

### Delete Creator

```
DELETE /creators/:id
```

---

## Screenshots

(Add screenshots here after deployment.)

---

## Future Improvements

- Authentication
- MongoDB Database
- Search by name
- Toast notifications
- Form validation
- Dashboard Analytics
- Dark Mode

---

## Author

**Prince Kumar Tiwari**

GitHub:
https://github.com/princekumart
