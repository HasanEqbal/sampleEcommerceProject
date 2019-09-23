import React from "react";
import {MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import {withRouter} from 'react-router-dom';
import MenuData from '../data/menus.json'


const MenuDropDown = ({history, match}) => {
    return (
      <MDBNavItem>
 <MDBDropdown>
   <MDBDropdownToggle nav caret color="secondary" className="white-text">
     Shop By Department
   </MDBDropdownToggle>
   <MDBDropdownMenu color="secondary">
     {MenuData.map(({id, title, linkURL}) => {
       return (
        <MDBDropdownItem key={id} onClick={() => history.push(`${match.url}${linkURL}`)}>{title.toUpperCase()}</MDBDropdownItem>
       )
     })}
     
   </MDBDropdownMenu>
 </MDBDropdown>
</MDBNavItem>
    ); 
}
export default withRouter(MenuDropDown);
