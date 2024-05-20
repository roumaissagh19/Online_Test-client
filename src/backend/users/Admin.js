const express = require('express');
const router = express.Router(); // Move this line after importing express
const mysql = require('mysql');
// Remove bcrypt import
const jwt = require('jsonwebtoken');

const connection = require("../config/config");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Login Route
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Fetch admin from database
    connection.query('SELECT * FROM admin WHERE email = ? AND password = ?', [email, password], (error, results) => {
        if (error) {
            console.error('Error fetching admin:', error);
            res.status(500).send('Internal Server Error');
        } else if (results.length === 0) {
            console.log('No admin found for email:', email);
            res.status(401).send('Invalid email or password');
        } else {
            const admin = results[0];
            console.log('Login successful for email:', email);
            // Create JWT
            const token = jwt.sign({ id: admin.id, email: admin.email }, 'your_secret_key', { expiresIn: '1h' });
            res.json({ token });
        }
    });
});

// Middleware to verify JWT
function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const decoded = jwt.verify(token, 'your_secret_key');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}

// Protected Route
app.get('/protected', verifyToken, (req, res) => {
    res.send('You have access to this protected route!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = router;
