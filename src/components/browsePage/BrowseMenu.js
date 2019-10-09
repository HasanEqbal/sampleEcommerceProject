import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import ProductDisplay from "../productDisplay/ProductDisplay";
import "./BrowseMenu.css";

function BrowseMenu({ title, items }) {
  return (
    <div className="browseMenu">
      <Breadcrumb>
        <Breadcrumb.Item href="#">{title.toUpperCase()}</Breadcrumb.Item>
      </Breadcrumb>
      <Container style={{ top: 10, bottom: 50 }}>
        <Row>
          {items.map(item => {
            return <ProductDisplay key={item.id} item={item} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default BrowseMenu;
