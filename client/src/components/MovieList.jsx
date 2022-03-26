import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import axios from 'axios';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{name: 'the nice guys'}, {name: 'in bruges'}]
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount() {
    this.fetch();
  }

  fetch () {
    axios.get('/movies')
      .then((results) => {
        console.log(results);
        this.setState({
          movies: results.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    console.log(this.state.movies);
    return(
      <div>
        <span>Movies</span>
        {this.state.movies.map((movie) => <MovieListEntry movie={movie} />)}
      </div>
    );
  }
};

export default MovieList;