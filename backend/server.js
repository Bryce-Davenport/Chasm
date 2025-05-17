// backend/server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 4012;

// Middleware to parse JSON
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '../frontend/src')));

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Catch-all: send index.html for any unknown routes (for SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/src/index.html'));
});

app.listen(PORT, () => {
  console.log(`CHASM server running at http://localhost:${PORT}`);
});
