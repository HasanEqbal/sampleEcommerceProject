import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import "./ShopMenu.css";
import ProductDisplay from "../productDisplay/ProductDisplay";

function ShopMenu({ title, items }) {
  return (
    <div className="shopMenu">
      <Breadcrumb>
        <Breadcrumb.Item href="#">{title.toUpperCase()}</Breadcrumb.Item>
      </Breadcrumb>
      <Container style={{ top: 10, bottom: 50 }}>
        <Row>
          {items
            .filter((item, index) => index < 4)
            .map(item => {
              return <ProductDisplay key={item.id} item={item} />;
            })}
        </Row>
      </Container>
    </div>
  );
}

export default ShopMenu;
