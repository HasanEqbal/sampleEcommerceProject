import React from "react";
import SHOP_DATA from "../components/data/ShopData";
import ShopMenu from "../components/shop/ShopMenu";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections_at_shop: SHOP_DATA
    };
  }

  render() {
    const { collections_at_shop } = this.state;
    return (
      <div>
        {collections_at_shop.map(({ id, ...other }) => {
          return <ShopMenu key={id} {...other} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
