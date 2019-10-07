/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
import React from "react";
import SHOP_DATA from "../../components/data/ShopData";
import BrowseMenu from "../../components/browsePage/BrowseMenu";
import PageNotFound from "../../modal/PageNotFound";

class BrowsePage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
      paramFound: false
    };
  }

  render() {
    const { collections } = this.state;
    let renderPage;
    let paramFound = collections.filter(
      colletion => colletion.routeName === this.props.match.params.id
    );
    if (paramFound.length === 0) {
      renderPage = <PageNotFound searchKeyword={this.props.match.params.id} />;
    } else {
      paramFound.map(({ id, ...other }) => {
        renderPage = <BrowseMenu key={id} {...other} />;
      });
    }
    return <div>{renderPage}</div>;
  }
}

export default BrowsePage;
