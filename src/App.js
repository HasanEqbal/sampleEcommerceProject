import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Header from './components/header/HeaderComponent';
import Shop from './shop/Shop';
import createHistory from './history';

class App extends React.Component{

  render() {
    return (
      <Router history={createHistory}>
      <Header />
      <Switch>
      <Route path="/" exact component={ HomePage } />
      <Route path="/shop" exact component={ Shop } />
      </Switch>
      </Router>
      )
  }

}

export default App;
