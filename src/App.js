import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import HomePage from './pages/homePage/HomePage';
import SignInAndSignUpPage from './pages/signInAndSignUp/SignInAndSignUp';
import Header from './components/header/HeaderComponent';
import Shop from './shop/Shop';
import createHistory from './history';
import {auth, createUserProfileDocument} from './firebase/firbase-utils';
import { setUserstatus } from '../src/actions/index'

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props
    auth.onAuthStateChanged(async userAuth => {
     if (userAuth){
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapshop => {
         setCurrentUser({
           id: snapshop.id,
           ...snapshop.data()
         })
       })
     }
     setCurrentUser(userAuth);
    })
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <Router history={createHistory}>
      <Header/>
      <Switch>
      <Route path="/" exact component={ HomePage } />
      <Route path="/shop" exact component={ Shop } />
      <Route path="/signin" exact component={ SignInAndSignUpPage } />
      </Switch>
      </Router>
      )
  }

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setUserstatus(user))
})

export default connect(null, mapDispatchToProps)(App);
