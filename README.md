# 🔐 Password Manager

A simple and secure **Password Manager** built with **React.js**, **Tailwind CSS**, and **MongoDB**.  
It allows users to save, edit, and manage multiple passwords for different websites in a clean UI.  

---

## 🚀 Features
- Save multiple website credentials (Site, Username, Password)
- Edit and delete saved credentials
- Copy password to clipboard with one click
- Responsive UI using Tailwind CSS
- Secure backend with MongoDB
- Toast notifications for better UX

---

## 🛠️ Tech Stack
**Frontend:**
- React.js
- Tailwind CSS
- React Toastify

**Backend:**
- Node.js
- Express.js
- MongoDB

---

## 📂 Project Structure
password-manager/
│── backend/ # Express + MongoDB API
│ ├── server.js
│ ├── models/
│ ├── routes/
│ └── .env
│
│── frontend/ # React + Tailwind UI
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
└── README.md


---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/password-manager.git
cd password-manager

2. Backend Setup
cd backend
nodemon server.js


Create a .env file in backend/ with:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start the backend:

npm start

3. Frontend Setup
cd ../frontend
npm install
npm run dev

he MIT License.
