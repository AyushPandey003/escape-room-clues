const express = require("express");
const path = require("path");

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));

// Route to serve the home page (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Route to serve the second page (page2.html)
app.get("/page2", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "page2.html"));
});

// Route to serve the password challenge (page3.html)
app.get("/page3", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "page3.html"));
});

// Handle the password check
app.post("/check-answer", (req, res) => {
  const password = req.body.password;

  if (password === "unlock") {
    res.redirect("/success");
  } else {
    res.status(400).send("Incorrect password. Try again!");
  }
});

// Success page (final page with downloadable file)
app.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "success.html"));
});

// Provide the downloadable treasure file
app.get("/download/treasure.txt", (req, res) => {
  res.download(path.join(__dirname, "../public", "treasure.txt"));
});

// Export the app for Vercel
module.exports = app;
