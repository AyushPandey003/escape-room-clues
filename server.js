
// Serve the first clue (Base64 decode clue)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the second clue (AES encrypted clue)
app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'page2.html'));
});

// Serve the password challenge
app.get('/page3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'page3.html'));
});

// Handle password submission
app.post('/check-answer', express.urlencoded({ extended: true }), (req, res) => {
  const password = req.body.password;

  if (password === 'unlock') {
    res.redirect('/success');
  } else {
    res.send('Incorrect password. Try again!');
  }
});

// Success page (final page with downloadable file)
app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

// Provide the downloadable treasure file
app.get('/download/treasure.txt', (req, res) => {
  res.download(path.join(__dirname, 'public', 'treasure.txt'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
