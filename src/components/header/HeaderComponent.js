import React from "react";
import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { connect } from 'react-redux';
import MenuDropDown from './MenuDropDown';
import { auth } from '../../firebase/firbase-utils'
import './HeaderComponent.css';
import CartIconAndCardDropDown from '../cartItem/CartIconAndCardDropDown'

const HeaderComponent = ({currentUser}) => {
    return (
    <div className="headerComponent">   
    <MDBContainer>
      <MDBRow>
        <MDBCol size="11">
          <MDBNav color="aqua-gradient" className="font-weight-bold py-4 px-2 mb-4">
            <MenuDropDown/>
            <MDBNavLink className="white-text text-left" to="/shop">Shop</MDBNavLink>
            <MDBNavLink className="white-text text-left" to="/signin">Contact</MDBNavLink>
            {currentUser ? <MDBNavLink className="white-text text-left" to="/" onClick={()=> auth.signOut()}>SIGN OUT</MDBNavLink> :
          <MDBNavLink className="white-text" to="/signin" >Sign In</MDBNavLink>}
          <CartIconAndCardDropDown/>
          </MDBNav>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>)
};


  const mapStateToProps = (state) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(HeaderComponent);