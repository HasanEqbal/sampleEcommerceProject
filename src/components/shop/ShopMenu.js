import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import ShopItems from './ShopItems';
import { Card,  Button, Container, Row} from 'react-bootstrap';

function ShopMenu({title, items}) {
    return (
        <div>
            <Breadcrumb>  
            <Breadcrumb.Item href="#">{title.toUpperCase()}</Breadcrumb.Item> 
            </Breadcrumb>
            <Container style={ {top:10, bottom: 50} }>
            <Row>
            {items.filter((item, index) => index < 4)
            .map(({id, ...other})=>{
                return <ShopItems key={id} {...other}/>
            })} 
            </Row>
            </Container>
        </div>
         )
}

export default ShopMenu;