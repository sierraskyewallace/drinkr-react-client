import React from 'react';
import { connect } from 'react-redux';
import Home from './components/home';
import Drinks from './components/drinks';
import Liquors from './components/liqours';

class App extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Home />
        <Drinks />
        <Liquors />
      </div>
    );
  }
}
  
export default connect()(App);