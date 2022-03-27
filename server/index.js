const database = require('../db/index.js');
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('client/dist'));

app.post('/search', (req, res) => {
  database.findMovies((movieList) => {
    res.json(movieList);
  }, req.body.query);
});

app.post('/movies', (req, res) => {
  database.insertMovies(req.body.title);
  res.send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})