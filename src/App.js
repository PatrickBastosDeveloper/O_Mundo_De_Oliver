import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Pictures from './pages/Pictures';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/pictures" component={ Pictures } />
      </Switch>
    );
  }
}

export default App;
