import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Loading from './pages/Loading';
import Home from './pages/Home';
import Pictures from './pages/Pictures';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/pictures" component={ Pictures } />
      <Route path="/Loading" component={ Loading } />
    </Switch>
  );
}
