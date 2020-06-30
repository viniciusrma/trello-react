import React, {Component} from "react";
import TrelloList from './trellolist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <TrelloList title="test"/>
      </div>
    )
  };
};

export default App;
