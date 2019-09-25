import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBRow, MDBCol,  } from 'mdbreact';
import { addToBag } from '../../actions/index';
import ModalPage from '../../modal/Modal'
import { connect } from 'react-redux'

function ShopItems({item, addToBag}) {
  const {id, name, imageUrl, price} = item;
    return (
        <div>
        <MDBRow>
        <MDBCol className="pb-2 px-md-4" >
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={imageUrl} style={ {width: 250, height: 250}}/>
            <MDBCardBody cascade className="px-md-1">
              <MDBCardText>{name}</MDBCardText>
              <MDBCardText>Price: ${price}</MDBCardText>
              <MDBBtn gradient="aqua" onClick={()=> addToBag({id, name, imageUrl, price})}>Add to Bag</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
        </div>
         )
}

const mapDispatchToProps = dispatch => ({
  addToBag: cartItem => dispatch(addToBag(cartItem))
})

export default connect(null, mapDispatchToProps)(ShopItems);