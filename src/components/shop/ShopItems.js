import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBRow, MDBCol,  } from 'mdbreact';

function ShopItems({id, name, imageUrl, price}) {
    return (
        <div>
        <MDBRow>
        <MDBCol className="pb-2 px-md-4" >
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src={imageUrl} style={ {width: 250, height: 250}}/>
            <MDBCardBody cascade className="px-md-1">
              <MDBCardText>{name}</MDBCardText>
              <MDBCardText>Price: ${price}</MDBCardText>
              <MDBBtn gradient="aqua">Add to Bag</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
        </div>
         )
}

export default ShopItems;