import React from'react';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
import Logo from "../logotrans.png"
import './pressKit.css';

function pressKit() {
    return (
        <div className='pageContainer'>
        <Card className='card'>
            <CardBody>
                <CardTitle className='bigText' >Press Kit</CardTitle>
                        <CardText>Check back soon. I am currently compiling my press kit.</CardText>
                
                        <CardImg src={Logo} style={{height:'500px', width:'auto'}} />
            </CardBody>
        </Card>
        </div>


)
};

export default pressKit;