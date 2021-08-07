import React from 'react';
import Ticker from 'react-ticker';
import './ticker.css';
 

const MoveStuffAround = () => (

    <Ticker speed={10} offset="10" mode="smooth"  >
        {({ index }) => (
            <>
                <h1 className="tickytext">Make sure to follow me on socials for the latest news and events! | | | | | We only serve USDA Prime house music here. | | | | | Follow my Spotify playlist "The Dog House" below for my latest favorites! | | | | |</h1>                
            </>
        )}
    </Ticker>
)
 
export default MoveStuffAround