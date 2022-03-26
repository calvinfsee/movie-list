DROP DATABASE movies;
CREATE DATABASE movies;

USE movies;

CREATE TABLE mymovies (
  ID int NOT NULL AUTO_INCREMENT,
  title varchar(100) NOT NULL,
  PRIMARY KEY (ID)
);