import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  render() {
    return(
      <div>
        <input type="text" value={this.props.query} onChange={(e) => this.props.search(e.target.value)} />
        <input type="button" value="Go!" />
      </div>
    )
  }
}

export default Search;