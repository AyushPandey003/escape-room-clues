module.exports = (req, res) => {
  const { answer } = req.body;

  // Correct answer for the riddle
  const correctAnswer = 'egg';

  if (answer.toLowerCase() === correctAnswer) {
      res.redirect(302, '/success'); // Redirect to success page if the answer is correct
  } else {
      res.send('Incorrect answer. Try again!');
  }
};