import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Timer/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default App;
