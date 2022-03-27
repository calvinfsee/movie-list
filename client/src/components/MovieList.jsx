import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
import axios from 'axios';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div>
        <span>Movies</span>
        {this.props.movies.map((movie) => <MovieListEntry movie={movie} />)}
      </div>
    );
  }
};

export default MovieList;