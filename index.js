const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Book Store Backend API!</h1>
    <p>This is the backend URL.</p>
    <h2>Features:</h2>
    <ul>
      <li>Add a new book</li>
      <li>View all books</li>
      <li>Update book details</li>
      <li>Delete a book by ID</li>
      <li>MongoDB database integration</li>
    </ul>
    <h2>API Endpoints:</h2>
    <ul>
      <li>GET /books</li>
      <li>POST /books</li>
      <li>PUT /books/:id</li>
      <li>DELETE /books/:id</li>
    </ul>
    <h2>Book Schema:</h2>
    <p>title, author, price, publishedDate</p>
  `);
});


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error('MongoDB connection error:', err));
