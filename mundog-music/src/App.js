import React, {Component} from "react";
import Topbar from "./components/Topbar/TopbarComponent.jsx";
import Home from "./components/HomeComponent/Home";
import Bio from "./components/BioComponent/Bio";
import MoveStuffAround from './components/TickerComponent/Ticker'
import Contact from "./components/ContactComponent/Contact";
import Navbar from "./components/MenuComponent/Navbar";
import News from "./components/NewsComponent/News";
import Playlist from "./components/PlaylistComponent/Playlist.jsx";
import PressKit from "./components/PressKitComponent/PressKit";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import './App.css';

class App extends Component {

  render(){
  return (
    <div className='app'>
    <Router>
        
    
      <div className='topper'>
      <MoveStuffAround className="ticker " />
        <Topbar />
        <Navbar />
       
        <Switch>                  
                    <Route path="/" exact component={Home} />
                    <Route path="/bio" component={Bio} />                
                    <Route path="/news" component={News} />
                    <Route path="/contact" component={Contact} />                   
                    <Route path="/epk" component={PressKit} />
        </Switch>
      

      <Playlist />
      </div>

    </Router>
    </div>
    
  )
}
};

export default App;
