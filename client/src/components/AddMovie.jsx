import React from 'react';
import axios from 'axios';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    axios.post('/movies', {title: this.state.title})
      .then((result) => {
        console.log('added: ', this.state.title);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.title} onChange={(e) => {
          this.setState({title: e.target.value});
        }} />
        <input type="button" value="submit" onClick={this.handleSubmit} />
      </div>
    )
  }
};

export default AddMovie;