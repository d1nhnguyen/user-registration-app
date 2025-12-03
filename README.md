# User Registration System 🚀

A full-stack application with secure user registration, featuring password hashing, email validation, and a modern responsive UI.

## 🛠 Tech Stack

* **Frontend:** React + TypeScript (Vite), Material UI, React Hook Form, React Query
* **Backend:** NestJS, TypeORM, PostgreSQL, Bcrypt
* **Database:** Neon (Serverless PostgreSQL)
* **Deployment:** Vercel (Frontend) & Render (Backend)

## 🌐 Live Demo

* **Frontend:** [https://user-registration-app-woad.vercel.app/](https://user-registration-app-woad.vercel.app/)
* **Backend API:** [https://user-registration-app-duan.onrender.com](https://user-registration-app-duan.onrender.com)

---

## ✨ Features

* ✅ **Secure Registration:** Passwords hashed with bcrypt (10 rounds)
* ✅ **Email Validation:** Prevents duplicate emails and validates format
* ✅ **Input Validation:** Client & server-side validation with meaningful error messages
* ✅ **Error Handling:** Proper HTTP status codes (409 for duplicates, 400 for validation)
* ✅ **Responsive UI:** Mobile-friendly Material UI design
* ✅ **API State Management:** React Query for optimistic updates and error handling
* ✅ **CORS Enabled:** Secure cross-origin requests
* ✅ **Login UI:** Demonstration of authentication flow (frontend simulation)

---

## 📁 Project Structure
```
user-registration-app/
├── backend/           # NestJS API
│   ├── src/
│   │   ├── user/      # User module (controller, service, entity, DTOs)
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── .env           # Database configuration
│
└── frontend/          # React application
    ├── src/
    │   ├── pages/     # Home, Login, SignUp
    │   ├── context/   # Auth context (optional)
    │   ├── App.tsx
    │   └── main.tsx
    └── .env           # API URL (optional)
```

---

## 💻 Getting Started Locally

### Prerequisites

* Node.js (v18+)
* npm or yarn
* PostgreSQL database (or use Neon free tier)

### 1. Clone the Repository
```bash
git clone https://github.com/d1nhnguyen/user-registration-app.git
cd user-registration-app
```

### 2. Backend Setup ⚙️
```bash
cd backend
npm install
```

**Environment Variables:**

Create a `.env` file in the `backend` folder:
```env
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"
PORT=3000
```

**Install bcrypt:**
```bash
npm install bcrypt
npm install -D @types/bcrypt
```

**Run the Server:**
```bash
npm run start:dev
```

The backend will run on [http://localhost:3000](http://localhost:3000)

**Test the API:**
```bash
curl -X POST http://localhost:3000/user/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### 3. Frontend Setup 🎨

Open a **new terminal**:
```bash
cd frontend
npm install
```

**Update API URL (if needed):**

If running backend locally, update the fetch URL in `src/pages/SignUp.tsx`:
```typescript
const response = await fetch('http://localhost:3000/user/register', {
  // ...
});
```

**Run the Frontend:**
```bash
npm run dev
```

The frontend will run on [http://localhost:5173](http://localhost:5173)

---

## 🧪 Testing

### Test Registration (Postman/cURL)

**Valid Registration:**
```bash
curl -X POST http://localhost:3000/user/register \
  -H "Content-Type: application/json" \
  -d '{"email":"newuser@example.com","password":"securepass123"}'
```

**Expected Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "email": "newuser@example.com",
    "createdAt": "2024-12-03T..."
  }
}
```

**Duplicate Email (409):**
```json
{
  "message": "Email already exists",
  "error": "Conflict",
  "statusCode": 409
}
```

**Invalid Email (400):**
```json
{
  "message": ["email must be an email"],
  "error": "Bad Request",
  "statusCode": 400
}
```

---

## 🔐 Security Features

* **Password Hashing:** Bcrypt with salt rounds (10)
* **CORS Protection:** Configured for specific origins
* **Input Validation:** class-validator on backend, React Hook Form on frontend
* **Environment Variables:** Sensitive data stored securely
* **SQL Injection Protection:** TypeORM parameterized queries

---

## 📝 API Documentation

### POST /user/register

Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "createdAt": "2024-12-03T10:30:00.000Z"
  }
}
```

**Error Responses:**
* `400` - Invalid email format or missing fields
* `409` - Email already exists
* `500` - Internal server error

---

* GitHub: [@d1nhnguyen](https://github.com/d1nhnguyen)
