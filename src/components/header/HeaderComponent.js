import React from "react";
import { MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";
import { connect } from "react-redux";
import MenuDropDown from "./MenuDropDown";
import { auth } from "../../firebase/firbase-utils";
import "./HeaderComponent.css";
import CartIconAndCardDropDown from "../cartItem/CartIconAndCardDropDown";

const HeaderComponent = ({ currentUser }) => {
  return (
    <div className="headerComponent">
      <MDBNav
        right
        color="aqua-gradient"
        className="font-weight-bold py-2 px-2 mb-2"
      >
        <MenuDropDown />
        <MDBNavItem>
          <MDBNavLink to="/shop">
            <div className="white-text pull-xs-right">Shop</div>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavLink className="white-text pull-xs-right" to="/signin">
          Contact
        </MDBNavLink>
        {currentUser ? (
          <MDBNavLink
            className="white-text pull-xs-right"
            to="/"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </MDBNavLink>
        ) : (
          <MDBNavLink className="white-text pull-xs-right" to="/signin">
            Sign In
          </MDBNavLink>
        )}
        <CartIconAndCardDropDown />
      </MDBNav>
    </div>
  );
};

const mapStateToProps = state => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(HeaderComponent);
