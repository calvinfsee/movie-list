import React from 'react';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <span>hello world!</span>
        <AddMovie />
        <MovieList />
      </div>
    )
  }
}

export default App;