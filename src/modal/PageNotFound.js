import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBContainer
} from "mdbreact";

const PanelPage = props => {
  return (
    <MDBContainer>
      <MDBCard style={{ width: "72rem", marginTop: "1rem" }}>
        <MDBCardBody>
          <MDBCardTitle>
            We found 0 results for {props.searchKeyword}
          </MDBCardTitle>
          <MDBBtn gradient="aqua" href="/">
            Continue the Shopping
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default PanelPage;
