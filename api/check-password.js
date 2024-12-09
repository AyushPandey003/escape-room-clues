// /api/check-password.js
module.exports = (req, res) => {
    const { password } = req.body;
  
    if (password === 'unlock') {
      res.redirect(302, '/success'); // Redirect to success page if password is correct
    } else {
      res.send('Incorrect password. Try again!');
    }
  };
  