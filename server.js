const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// API route to return data when requested
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});