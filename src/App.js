import React from 'react';
import Drinks from './components/drinks';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/drinks")
      .then(response => response.json())
      .then(drinks => this.setState({ drinks }));
  }



  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Drinks drinks={this.state.drinks} />
      </div>
    );
  }
}

export default App;
