import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import MenuData from "../data/menus.json";
import { withRouter } from "react-router-dom";
import "./MenuList.css";

function MenuList({ history, match }) {
  return (
    <div className="menuComponent">
      <Container>
        <Row>
          {MenuData.map(({ title, imageUrl, text, id, linkURL }, index) => {
            return (
              <div
                className={`${index > 2 ? "col-6" : "col-4"}`}
                md="auto"
                key={id}
              >
                <Card
                  style={{
                    width: `${index > 2 ? "39rem" : "26rem"}`,
                    height: `${index > 2 ? "40rem" : "28rem"}`,
                    marginTop: 10
                  }}
                >
                  <Card.Img variant="top" src={imageUrl} />
                  <Card.Body
                    style={{
                      padding: `${index > 2 ? "1rem" : "1rem"}`
                    }}
                  >
                    <Card.Title>{title.toUpperCase()}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <MDBBtn
                      gradient="aqua"
                      onClick={() => history.push(`${match.url}${linkURL}`)}
                      className="justify-content-center"
                    >
                      Shop Now
                    </MDBBtn>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(MenuList);
