import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import { withRouter } from "react-router-dom";
import MenuData from "../data/menus.json";

const MenuDropDown = ({ history, match }) => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle nav caret color="secondary" className="white-text">
        Shop By Department
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        {MenuData.map(({ id, title, linkURL }) => {
          return (
            <MDBDropdownItem
              key={id}
              onClick={() => history.push(`${match.url}${linkURL}`)}
            >
              {title.toUpperCase()}
            </MDBDropdownItem>
          );
        })}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
};
export default withRouter(MenuDropDown);
