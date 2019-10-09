import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from "mdbreact";
import { addToBag } from "../../actions/index";
import ModalPage from "../../modal/Modal";
import { connect } from "react-redux";
import createHistory from "../../history";
import "./ProductDisplay.css";

function ProductDisplay({ item, addToBag }) {
  const { id, name, imageUrl, price } = item;
  return (
    <div className="productDisplayComponent">
      <MDBRow>
        <MDBCol className="pb-2 px-md-4">
          <MDBCard narrow>
            <MDBCardImage
              cascade
              className="img-fluid"
              src={imageUrl}
              style={{ width: 250, height: 250 }}
            />
            <div class="text-center">
              <MDBCardBody
                cascade
                className="px-md-1"
                style={{
                  height: "120px",
                  padding: "5px"
                }}
              >
                <p class="text-center">{name}</p>
                <p class="text-center">Price: ${price}</p>
                <MDBBtn
                  style={{
                    padding: "10px"
                  }}
                  gradient="aqua"
                  onClick={() => {
                    modalOverLayDiplay({ name, imageUrl });
                    addToBag({ id, name, imageUrl, price });
                  }}
                >
                  Add to Bag
                </MDBBtn>
              </MDBCardBody>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

const modalOverLayDiplay = (name, imageUrl) => {
  return (
    <ModalPage
      title="Add to Bag overlay"
      content={name}
      action={imageUrl}
      onDismiss={() => createHistory.push("/")}
    />
  );
};
const mapDispatchToProps = dispatch => ({
  addToBag: cartItem => dispatch(addToBag(cartItem))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductDisplay);
