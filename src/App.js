import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homePage/HomePage";
import SignInAndSignUpPage from "./pages/signInAndSignUp/SignInAndSignUp";
import Header from "./components/header/HeaderComponent";
import Shop from "./shop/Shop";
import BrowsePage from "./pages/browsePage/BrowsePage";
import createHistory from "./history";
import { auth, createUserProfileDocument } from "./firebase/firbase-utils";
import { setUserstatus } from "../src/actions/index";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshop => {
          setCurrentUser({
            id: snapshop.id,
            ...snapshop.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router history={createHistory}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:id" component={BrowsePage} />
          <Route
            path="/signin"
            exact
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ currentUser: state.user.currentUser });

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setUserstatus(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
