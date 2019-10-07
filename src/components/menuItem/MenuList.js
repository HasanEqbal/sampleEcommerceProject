import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import MenuData from "../data/menus.json";
import { withRouter } from "react-router-dom";

function MenuList({ history, match }) {
  return (
    <>
      <Container>
        <Row>
          {MenuData.map(({ title, imageUrl, text, id, linkURL }, index) => {
            const className = `${index > 2 ? "col-6" : "col"}`;
            const width = `${index > 2 ? "32rem" : "20rem"}`;
            return (
              <div className={className} md="auto" key={id}>
                <Card style={{ width: width }}>
                  <Card.Img variant="top" src={imageUrl} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button
                      onClick={() => history.push(`${match.url}${linkURL}`)}
                      className="justify-content-center"
                      variant="primary"
                    >
                      Shop Now
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default withRouter(MenuList);
