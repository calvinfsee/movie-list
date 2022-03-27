var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Secret99!',
  database: 'movies'
});

connection.connect();

var findMovies = function (callback, query) {
  connection.query(
    `SELECT * FROM mymovies WHERE title LIKE '${query}%'`, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      callback(results);
    }
  );
}

var insertMovies = function (newMovie) {
  connection.query(
    `INSERT INTO mymovies(title) VALUES(?)`, [newMovie], (err, results) => {
      if (err) {
        console.error(err);
      }
      console.log(results);
    }
  );
}

module.exports.findMovies = findMovies;
module.exports.insertMovies = insertMovies;