import React from "react";
import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import MenuDropDown from './MenuDropDown'

const HeaderComponent = () => {
    return (
    <div>   
    <MDBContainer>
      <MDBRow>
        <MDBCol size="10">
          <MDBNav color="aqua-gradient" className="font-weight-bold py-4 px-2 mb-4">
            <MenuDropDown/>
            <MDBNavLink className="white-text" to="/shop" style={{ text: `left` }}>Shop</MDBNavLink>
            <MDBNavLink className="white-text" to="#!" >Sign In</MDBNavLink>
            <MDBNavLink className="white-text" to="#!" >SIGN UP</MDBNavLink>
          </MDBNav>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>)
};

export default HeaderComponent;