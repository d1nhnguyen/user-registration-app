# User Registration System 🚀

A full-stack application handling user registration with a secure backend and a modern React frontend.

## 🛠 Tech Stack

* **Frontend:** React (Vite), Material UI, React Hook Form, React Query
* **Backend:** NestJS, TypeORM, PostgreSQL
* **Database:** Neon (Cloud Postgres)
* **Deployment:** Vercel (Frontend) & Render (Backend)

## 🌐 Live Demo

* **Frontend:** [https://user-registration-app-woad.vercel.app/](https://user-registration-app-woad.vercel.app/)
* **Backend API:** [https://user-registration-app-duan.onrender.com](https://user-registration-app-duan.onrender.com)

---

## 💻 Getting Started Locally

Follow these steps to run the project on your own machine.

### 1. Clone the Repository
```bash
git clone https://github.com/d1nhnguyen/user-registration-app.git
cd user-registration-app
```

### 2. Backend Setup ⚙️

The backend runs on port 3000.

```bash
cd backend
npm install
```

**Configuration:**
Create a `.env` file in the `backend` folder and add your database connection string:

```env
DATABASE_URL="postgres://..."
```

**Run the Server:**
```bash
npm run start:dev
```

### 3. Frontend Setup 🎨

The frontend runs on port 5173. Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

---

## ✅ Features

* **User Registration:** Securely creates users with hashed passwords.
* **Validation:** Prevents invalid emails or empty passwords.
* **Cloud Architecture:** Fully deployed serverless architecture.
* **Login Simulation:** Frontend UI demonstration of login flow (visual only).