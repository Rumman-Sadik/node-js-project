const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

//  Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

//  Serve each HTML page from the "views" folder
// Homepage
app.get('/index', function (_req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });

// Other pages
app.get('/about', (_req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/menu', (_req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'menu.html'));
});

app.get('/feature', (_req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'feature.html'));
});

app.get('/blog', (_req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

app.get('/testimonial', (_req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'testimonial.html'));
});

app.get('/team', (_req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'team.html'));
});

app.get('/contact', (_req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// 404 fallback
app.use((_req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(` Chefer server is running at http://localhost:${PORT}`);
});