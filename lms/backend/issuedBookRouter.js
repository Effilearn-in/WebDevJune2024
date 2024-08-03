const express = require('express');
const IssuedBook = require('./models/IssuedBook');
const Book = require('./models/Book');
const authMiddleware = require('./middlewares/authMiddleware');
const router = express.Router();

// Issue a book
router.post('/issue-book',authMiddleware, async (request, response) => {
    try {
        const { studentId, studentName, bookId, bookName, issuedDate, returnDate } = request.body;

        // Check if the book exists and has available copies
        const book = await Book.findById(bookId);
        if (!book) {
            return response.status(404).json({ message: "Book not found" });
        }

        if (book.quantity < 1) {
            return response.status(400).json({ message: "Book is not available" });
        }

        // Create a new issued book record
        const issuedBook = new IssuedBook({
            studentId,
            studentName,
            bookId,
            bookName,
            issuedDate,
            returnDate,
            status: 'Pending'
        });

        // Save the issued book record
        await issuedBook.save();

        // Decrease the quantity of the book by 1
        book.quantity -= 1;
        await book.save();

        response.status(201).json({ message: "Book issued successfully", issuedBook });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Return a book
router.post('/return-book/:id',authMiddleware, async (request, response) => {
    try {
        const { id } = request.params;

        // Find the issued book record
        const issuedBook = await IssuedBook.findById(id);
        if (!issuedBook) {
            return response.status(404).json({ message: "Issued book record not found" });
        }

        if (issuedBook.status === 'Returned') {
            return response.status(400).json({ message: "Book has already been returned" });
        }

        // Find the book
        const book = await Book.findById(issuedBook.bookId);
        if (!book) {
            return response.status(404).json({ message: "Book not found" });
        }

        // Update the issued book record status to 'Returned'
        issuedBook.status = 'Returned';
        await issuedBook.save();

        // Increase the quantity of the book by 1
        book.quantity += 1;
        await book.save();

        response.status(200).json({ message: "Book returned successfully", issuedBook });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Get all issued books
router.get('/', async (request, response) => {
    try {
        const issuedBooks = await IssuedBook.find({});
        response.status(200).json(issuedBooks);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Get a specific issued book by ID
router.get('/:id', async (request, response) => {
    try {
        const issuedBook = await IssuedBook.findById(request.params.id);
        if (!issuedBook) {
            return response.status(404).json({ message: "Issued book record not found" });
        }
        response.status(200).json(issuedBook);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Get issued books by student ID
router.get('/student-id/:studentId', async (request, response) => {
    try {
        const issuedBooks = await IssuedBook.find({ studentId: request.params.studentId });
        response.status(200).json(issuedBooks);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Get issued books by student name
router.get('/student-name/:studentName', async (request, response) => {
    try {
        const issuedBooks = await IssuedBook.find({ studentName: request.params.studentName });
        response.status(200).json(issuedBooks);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Get issued books by book ID
router.get('/book-id/:bookId', async (request, response) => {
    try {
        const issuedBooks = await IssuedBook.find({ bookId: request.params.bookId });
        response.status(200).json(issuedBooks);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Get issued books by book name
router.get('/book-name/:bookName', async (request, response) => {
    try {
        const issuedBooks = await IssuedBook.find({ bookName: request.params.bookName });
        response.status(200).json(issuedBooks);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

module.exports = router;
