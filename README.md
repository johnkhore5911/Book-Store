# 📚 Book Store REST API

A simple RESTful API for managing a Book Store using **Node.js**, **Express**, and **MongoDB**.

This API supports **Create**, **Read**, **Update**, and **Delete** (CRUD) operations for books.

---

## 🚀 Features

- Add new books  
- Retrieve all books  
- Update book details by ID  
- Delete books by ID  
- MongoDB integration for data persistence  

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
│ └── bookController.js # API logic (CRUD operations)
├── models/
│ └── Book.js # Mongoose schema for Book
├── routes/
│ └── bookRoutes.js # API route definitions
├── .env # Environment variables
├── index.js # App entry point
├── package.json # Project dependencies and scripts
└── README.md # Project documentation



---

## 📖 Book Schema

Each book has the following fields:

- `title` (String) — Book title  
- `author` (String) — Author name  
- `price` (Number) — Price of the book  
- `publishedDate` (Date) — Publication date  

---

## 📌 API Endpoints

| Method | Endpoint       | Description               |
|--------|----------------|---------------------------|
| GET    | `/books`       | Retrieve all books        |
| POST   | `/books`       | Add a new book            |
| PUT    | `/books/:id`   | Update an existing book   |
| DELETE | `/books/:id`   | Delete a book by ID       |

---

## 📡 Deployment

This API is deployed and accessible at:

**https://book-store-one-sand.vercel.app**

> Note: Update your clients to use this base URL when consuming the API.

---

## 📦 Installation & Setup (Local Development)

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/bookstore-api.git
cd bookstore-api
Install dependencies

npm install
Create a .env file in the project root:


PORT=3000
MONGODB_URI=your_mongodb_connection_string_here
Run the development server


npm run dev
The server will run locally at: http://localhost:3000

📡 Example API Requests
Add a Book (POST /books)
Request Body (JSON):


{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 500,
  "publishedDate": "2018-10-16"
}
Get All Books (GET /books)
Returns a JSON array of all books.

📊 Testing the API
You can test the API endpoints using:

Postman

Insomnia

Or via command line using curl

Example:

curl https://book-store-one-sand.vercel.app/books
👨‍💻 Author
Made with ❤️ by John 
GitHub

📜 License
This project is licensed under the MIT License.


---

# 2️⃣ Detailed Postman Collection Guide

```markdown
# 🚀 Get Started with Book Store REST API in Postman

This Postman collection guides you through performing CRUD operations (Create, Read, Update, Delete) on the Book Store API built with **Express**, **Node.js**, and **MongoDB**.

---

## 🔖 How to Use This Book Store API

### 📌 Step 1: Available Endpoints

The Book schema looks like this:

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "price": 500,
  "publishedDate": "2023-01-01"
}
RESTful API endpoints:

Method	Endpoint	Description
GET	/books	Fetch all books
POST	/books	Add a new book
PUT	/books/:id	Update a book by its ID
DELETE	/books/:id	Delete a book by its ID

📌 Step 2: Send Requests
Use Postman or curl to send requests to the deployed API.

Base URL:
https://book-store-one-sand.vercel.app

➝ GET /books
Fetch all books

Expected Status: 200 OK

Response: JSON array of books

➝ POST /books
Add a new book

Expected Status: 201 Created

Example Request Body:

{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 500,
  "publishedDate": "2018-10-16"
}
➝ PUT /books/:id
Update an existing book by its MongoDB _id

Expected Status: 200 OK

Example Request Body (only fields to update):

{
  "price": 450
}
➝ DELETE /books/:id
Delete a book by its _id

Expected Status: 200 OK

📌 Step 3: View Responses
After sending each request, check:

Status code (e.g., 200, 201, 400)

Response body (JSON with data or error)

Response time and size

📌 Step 4: Use Environment Variables (Optional)
Set a Postman environment variable called base_url with your API base URL:

base_url = https://book-store-one-sand.vercel.app
Then use the variable in your requests, e.g.:



