# 🚀 Tushar Barik — Developer Portfolio

A full-stack personal portfolio with a built-in admin panel to manage all content dynamically — no code edits needed. Data is fetched from MongoDB and gracefully falls back to static constants when the backend is unavailable.

---

🌍 Live Demo :  🔗 [https://tusharbarik.vercel.app/]

<img width="100%" height="100%" alt="image" src="https://github.com/Tushar-Barik-78/myportfolio/blob/main/frontend/src/assets/HomePage.png" />


## ✨ Features

- **Dynamic content** — All sections (hero, skills, experience, projects, education, contact) are editable via the admin panel
- **Smart fallback** — If the API is unreachable, `constants.js` data is shown automatically so the portfolio is always visible
- **Image uploads** — Profile pictures and logos are stored on Cloudinary
- **JWT-protected admin** — Secure login to manage portfolio data at `/admin`
- **Responsive design** — Looks great on all screen sizes

---

## 🛠️ Tech Stack

**Frontend**
- React + Vite
- Tailwind CSS
- Axios
- React Router DOM

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Cloudinary (image storage)
- JWT Authentication
- Multer (file uploads)

**Deployment**
- Frontend → [Vercel](https://vercel.com)
- Backend → [Render](https://render.com)

---

## 📁 Project Structure

```
myportfolio/
├── frontend/
│   ├── src/
│   │   ├── components/       # Navbar, About, Skills, Experience, Works, Education, Contact, Footer
│   │   ├── admin/            # AdminLogin, PortfolioAdmin panel
│   │   ├── hooks/
│   │   │   └── usePortfolio.jsx   # API fetch + constants fallback logic
│   │   ├── constants.js      # Static fallback data
│   │   └── api.js            # Axios instance + API calls
│   └── .env
└── backend/
    ├── config/               # DB, Cloudinary, Multer config
    ├── middleware/            # Auth (JWT), Upload (Multer)
    ├── models/               # Portfolio, Admin schemas
    ├── routes/               # /api/auth, /api/portfolio
    └── index.js
```

---

## ⚙️ Local Setup

### Prerequisites
- Node.js v18+
- MongoDB URI
- Cloudinary account

### 1. Clone the repo

```bash
git clone https://github.com/Tushar-Barik-78/myportfolio.git
cd myportfolio
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

```bash
npm start
```

### 3. Frontend setup

```bash
cd frontend
npm install
```

Create a `.env` file in `/frontend`:

```env
VITE_API_URL=http://localhost:5000/api
```

```bash
npm run dev
```

Open `http://localhost:5173` to view the portfolio.  
Admin panel: `http://localhost:5173/admin`

---

## 🌐 Deployment Notes

This project uses **Render's free tier** for the backend, which spins down after 15 minutes of inactivity. On the first visit, the backend may take 30–60 seconds to wake up — during this time the portfolio shows fallback data from `constants.js` automatically.

**To keep the backend always alive (free):** Use [UptimeRobot](https://uptimerobot.com) to ping your Render URL every 10 minutes.

---

## 🔐 Admin Panel

Navigate to `/admin` to log in. From the dashboard you can update:
- Hero section (name, bio, roles, resume link, profile image)
- Skills
- Work experience
- Projects
- Education
- Contact info

All images are uploaded to Cloudinary and stored as URLs in MongoDB.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
