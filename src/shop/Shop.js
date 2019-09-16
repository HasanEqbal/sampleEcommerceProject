import React from 'react';
import ShopMenu from '../components/shop/ShopMenu';
import SHOP_DATA from './ShopData';


class ShopPage extends React.Component{
    constructor () {
        super()
        this.state = {
         collections: SHOP_DATA
        }
    }
        
  render() {
     const {collections} = this.state;
    return (
     <div>
         {collections.map(({id, ...other})=>{
         return(<ShopMenu key={id} {...other}/>)
         })}
     </div>
      )
  }

}

export default ShopPage;