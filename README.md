# 🧾 Vendor Management Dashboard

A full-stack vendor management application built using **React + Vite**, **Node.js**, and **MongoDB**, featuring **Google OAuth login**, full CRUD functionality for vendors, and a paginated UI. Developed as part of an internship assignment.

---

## 🔧 Features

### ✅ Authentication
- Google Sign-In via OAuth 2.0 (Google Developer Console)
- Secure logout

### ✅ Vendor Management
- **Create Vendor** with the following fields:
  - Vendor Name (**required**)
  - Bank Account No (**required**)
  - Bank Name (**required**)
  - Address Line 1
  - Address Line 2
  - City
  - Country
  - Zip Code

- **Vendor List View**
  - Paginated list of vendors
  - Columns: Vendor Name, Bank Account No, Bank Name
  - Edit and Delete actions

- **Edit Vendor**
  - Load existing vendor details
  - Submit updated data

- **Delete Vendor**
  - Confirm before deletion

---

## 🛠️ Tech Stack

| Layer       | Technology                   |
|-------------|------------------------------|
| Frontend    | React (Vite) + Tailwind CSS  |
| Auth        | Google OAuth 2.0 (Google Console) |
| Backend     | Node.js + Express.js         |
| Database    | MongoDB (via Mongoose)       |
| Deployment  | Netlify (Frontend), Render (Backend) |

---

## 🧪 Functional Preview

- 🔐 Google OAuth login and logout
- 📋 Add, edit, and delete vendors
- 📄 Paginated vendor listing
- ✅ Required field validation
- 💡 Responsive UI with Tailwind CSS

---

## 🚀 Live Demo
 [https://vendors-dashboard.netlify.app](https://vendor-dashboard4u.netlify.app/)  

---

## ⚙️ Local Setup

### 1. Clone the Repo

```bash
git clone https://github.com/ayushrajput545/Vendors-DashBoard.git
cd Vendors-DashBoard
```

---

### 2. Set Up Environment Variables

#### 📁 Create a `.env` file in the `server/` directory:

```ini
MONGO_URI=your_mongodb_connection_string
PORT=5000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:5000/auth/google/callback

FRONTEND_URL=http://localhost:5173
SESSION_SECRET=your_random_secret_key
```

---

### 3. Run the Application

#### ▶️ Backend

```bash
cd server
npm install
node app.js
```

#### ▶️ Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🗃️ Folder Structure (Simplified)

```
Vendors-DashBoard/
│
├── client/       → React frontend
│   ├── components/
│   ├── pages/
│   └── ...
│
├── server/       → Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── ...
```

---


