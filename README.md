# 📚 Book Store REST API

A simple RESTful API for managing a Book Store using **Node.js**, **Express**, and **MongoDB**.

This API allows you to **Create**, **Read**, **Update**, and **Delete** (CRUD) books from the database.

---

## 🚀 Features

- Add a new book
- View all books
- Update book details
- Delete a book by ID
- MongoDB database integration

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure



bookstore-api/
├── config/
│ └── db.js # MongoDB connection setup
├── controllers/
│ └── bookController.js # API logic (CRUD)
├── models/
│ └── Book.js # Mongoose Book schema
├── routes/
│ └── bookRoutes.js # Route definitions
├── .env # Environment variables
├── index.js # App entry point
├── package.json # Project dependencies
└── README.md # Project documentation





---

## 📖 Book Schema

Each book has the following fields:

- `title` (String) — Book title
- `author` (String) — Author name
- `price` (Number) — Book price
- `publishedDate` (Date) — Date of publication

---

## 📌 API Endpoints

| Method | Route           | Description                |
|:--------|:----------------|:-----------------------------|
| GET     | `/books`         | Get all books                 |
| POST    | `/books`         | Add a new book                |
| PUT     | `/books/:id`     | Update a book by its ID       |
| DELETE  | `/books/:id`     | Delete a book by its ID       |

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository:

```bash
git clone https://github.com/yourusername/bookstore-api.git
cd bookstore-api




2️⃣ Install dependencies
npm install


Configure environment variables:
Create a .env file in the project root:
PORT=3000
MONGODB_URI=your_mongodb_connection_string




4️⃣ Run the development server:
npm run dev




📡 Example POST Request (Add a Book)
POST /books
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 500,
  "publishedDate": "2018-10-16"
}



📊 Testing the API
You can test the API using tools like:
Postman



👨‍💻 Author
Made with ❤️ by John 