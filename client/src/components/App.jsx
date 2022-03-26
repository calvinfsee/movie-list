import React from 'react';
import MovieList from './MovieList.jsx';

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
        <MovieList />
      </div>
    )
  }
}

export default App;