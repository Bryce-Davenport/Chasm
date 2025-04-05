const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON (for API endpoints)
app.use(express.json());

// Serve static files (HTML, CSS, JS) from /public
app.use(express.static(path.join(__dirname, '../public')));

// Example placeholder API route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Fallback route: serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

