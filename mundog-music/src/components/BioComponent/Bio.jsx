import React from'react';
import DJPic from './DJ.jpg';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
import './bio.css';

function Bio() {
    return (
        <div className='pageContainer'>
        <Card className='card'>
            <CardBody>
                <CardTitle className='bigText' >Biography</CardTitle>
                        <CardText>MUNDOG, born Michael Munley, is a Chicago native with a love for bassy house music. He bought his first mixer when he was 17 and made money as a mobile DJ playing block parties, college parties and so on until he was old enough to run DJ and karaoke shows at bars. He produces house and pop music and enjoys DJing tech and bass house. The MUNDOG project was started in 2021 after 10 years of using the pseudonym Spex.</CardText>
                        
                        <CardImg src={DJPic} style={{height:'300px', width:'auto'}} />
            </CardBody>
        </Card>
        </div>


)
};

export default Bio;