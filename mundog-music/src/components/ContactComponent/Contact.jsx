import React from'react';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
import Logo from "../logotrans.png"
import './contact.css';

function Contact() {
    return (
        <div className='pageContainer'>
        <Card className='card'>
            <CardBody>
                <CardTitle className='bigText' >Contact</CardTitle>
                        <CardText>For general and booking inquiries please <a href="mailto:mundogmusic@gmail.com">email me here.</a></CardText>
                        <CardText>To follow me on social media and check out my work please select the "Follow Me (Arrow)" button in the top right corner of the page.</CardText>
                        <CardImg src={Logo} style={{height:'500px', width:'auto'}} />
            </CardBody>
        </Card>
        </div>


)
};

export default Contact;