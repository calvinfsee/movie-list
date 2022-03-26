var mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Secret99!',
  database: 'movies'
});

connection.connect();

var findMovies = function (callback) {
  connection.query(
    `SELECT * FROM mymovies`, (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(results);
      callback(results);
    }
  );
}

var insertMovies = function () {
  connection.query(
    `INSERT INTO mymovies(title) VALUES('ABB')`, (err, results) => {
      if (err) {
        console.error(err);
      }
      console.log(results);
    }
  );
}

module.exports.findMovies = findMovies;
module.exports.insertMovies = insertMovies;