const express = require("express");
const crypto = require("crypto-js");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Route to serve the home page (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route to serve the second page (page2.html)
app.get("/page2", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "page2.html"));
});

// Route to serve the password challenge (page3.html)
app.get("/page3", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "page3.html"));
});

// Handle the password check
app.post("/check-password", (req, res) => {
  const password = req.body.password;

  if (password === "unlock") {
    res.redirect("/success");
  } else {
    res.send("Incorrect password. Try again!");
  }
});

// Success page (final page with downloadable file)
app.get("/success", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "success.html"));
});

// Provide the downloadable treasure file
app.get("/download/treasure.txt", (req, res) => {
  res.download(path.join(__dirname, "public", "treasure.txt"));
});

// Vercel requires an export of the server as a function
module.exports = app;
