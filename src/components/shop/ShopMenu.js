import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import ShopItems from './ShopItems';
import { Container, Row} from 'react-bootstrap';
import './ShopMenu.css';

function ShopMenu({title, items}) {
    return (
        <div>
            <Breadcrumb>  
            <Breadcrumb.Item href="#">{title.toUpperCase()}</Breadcrumb.Item> 
            </Breadcrumb>
            <Container style={ {top:10, bottom: 50} }>
            <Row>
            {items.filter((item, index) => index < 4)
            .map((item)=>{
                return <ShopItems key={item.id} item= {item}/>
            })} 
            </Row>
            </Container>
        </div>
         )
}

export default ShopMenu;