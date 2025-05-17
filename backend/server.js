// backend/server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 4012;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from frontend/public
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Default route (if needed)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
