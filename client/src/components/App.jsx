import React from 'react';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      query: ""
    };
    this.fetch = this.fetch.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  fetch () {
    axios.post('/search', {
      query: this.state.query
    })
      .then((results) => {
        this.setState({
          movies: results.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  componentDidMount() {
    this.fetch();
  }

  handleOnChange (query) {
    this.setState({
      query: query
    });
  }

  render() {
    return (
      <div>
        <span>hello world!</span>
        <AddMovie update={this.fetch} />
        <Search query={this.state.query} search={this.handleOnChange} update={this.fetch} />
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;