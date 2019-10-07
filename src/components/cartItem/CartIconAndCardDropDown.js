import React, { Component } from "react";
import {
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
  MDBBtn,
  MDBNavLink
} from "mdbreact";

class CartIconAndCardDropDown extends Component {
  render() {
    return (
      <MDBPopover placement="bottom" popover clickable id="popper3">
        <MDBNavLink className="white-text text-left">
          Shopping Cart <i className="fas fa-shopping-bag"></i>
        </MDBNavLink>
        <div>
          <MDBPopoverHeader>Here is your shopping cart</MDBPopoverHeader>
          <MDBPopoverBody>
            0 items in your bag. Shop great deals now!
          </MDBPopoverBody>
          <MDBBtn>
            <i className="fas fa-shopping-cart"></i>Checkout
          </MDBBtn>
        </div>
      </MDBPopover>
    );
  }
}

export default CartIconAndCardDropDown;
