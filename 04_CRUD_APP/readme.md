# PostApp 📸

PostApp is a simple full-stack application where users can **create, view, and delete posts with images and captions**.
It demonstrates CRUD operations, file uploads, and integration between **React, Node.js, Express, MongoDB, and ImageKit**.

---

## 🚀 Features

* 📤 Upload posts with images
* 📝 Add captions to posts
* 🗑 Delete posts
* 📦 Store images using **ImageKit**
* 💾 Store post data using **MongoDB**
* ⚡ Fast frontend built with **React**

---

## 🛠 Tech Stack

### Frontend

* React
* CSS
* Axios

### Backend

* Node.js
* Express.js
* Multer (file upload)
* ImageKit (image storage)

### Database

* MongoDB
* Mongoose

---

## 📂 Project Structure

```
PostApp
│
├── backend
│   ├── routes
│   ├── models
│   │   └── post.model.js
│   ├── services
│   │   └── storage.service.js
│   ├── db
│   │   └── connectDB.js
│   └── server.js
│
├── frontend
│   ├── components
│   │   └── Feed.jsx
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git https://github.com/SehajdeepSinghNibber/PostApp.git
```

---

### 2️⃣ Install backend dependencies

```bash
cd server
npm install
```

---

### 3️⃣ Install frontend dependencies

```bash
cd client
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the **backend** folder.

```
PORT=8000

MONGO_URI=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint

```

⚠️ Never push `.env` to GitHub.

---

## ▶️ Running the App

### Start server

```bash
cd server
nodemon server.js
```

### Start client

```bash
cd client
npm run dev
```

---

## 📡 API Routes

### Create Post

```
POST /posts
```

Form data:

* `Post` -> image
* `Caption` -> text caption

---

### Get Posts

```
GET /posts
```

Returns all posts.

---

### Delete Post

```
DELETE /posts/:id
```

Deletes a specific post.

---

## 📸 Example Post Object

```json
{
  "_id": "12345",
  "Post": "image_url",
  "Caption": "My first post"
}
```

---

## 🎯 Learning Goals

This project helped practice:

* React state management
* REST API development
* MongoDB + Mongoose
* File uploads with Multer
* Cloud image storage (ImageKit)

---

## 👨‍💻 Author

**Sehajdeep Singh**

---
