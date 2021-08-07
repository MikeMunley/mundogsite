import React from'react';
import {Card, CardImg, CardTitle, CardText, CardBody, Button } from 'reactstrap';
import Logo from "../logotrans.png"
import './news.css';

function News() {
    return (
        <div className='pageContainer'>
        <Card className='card'>
            <CardBody>
                <CardTitle className='bigText' >News</CardTitle>
                        <CardText>08/06/2021</CardText>
                        <CardText> Two big announcements!</CardText>
                        <CardText>We will be hosting our first boat party this September. Grab your tickets at the link below!</CardText>
                        <CardText>I will also be releasing my first tune as MUNDOG on Phunk Junk Dark. Keep an eye out for RETURN TO MONKE!</CardText>
                        
            </CardBody>
</Card>
            <Button className="btn btn-danger" href="https://www.eventbrite.com/e/shipwreckt-tickets-164565835845">Buy Tickets!</Button>
            <CardImg src={Logo} style={{height:'300px', width:'auto'}} />              
        
        </div>


)
};

export default News;