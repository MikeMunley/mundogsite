import React from'react';
import ProfPic from './profpic.jpg';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
import './home.css';

function Home() {
        return (
                <div className='pageContainer'>
                <Card className='card'>
                    <CardBody>
                        <CardTitle className='bigText'>Welcome!</CardTitle>
                                <CardText>Hello fellow house music lover and welcome to The Dog House!</CardText>
                                <CardText>This is the central hub for everything MUNDOG. You can check for news, new releases and upcoming events!</CardText>
                                <CardText> Make sure to click the Follow Me button above and add me on your social media!</CardText>
                                <CardImg src={ProfPic} style={{height:'300px', width:'auto'}} />
                    </CardBody>
                </Card>
                </div>


        )
};

export default Home;