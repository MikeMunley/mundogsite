import React, { Component } from "react";
import {Modal, ModalHeader, ModalBody, Button, Row, NavLink} from "reactstrap";
import Logo from "../logotrans.png"
import ReactPlayer from "react-player";
import "./topbar.css";

class Topbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
          };

        this.toggleModal = this.toggleModal.bind(this);
    };

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {

        return (        
            <div className="topbarContainer">
                <div className="topbarLeft">
                
                </div>
                <div className="topbarCenter">
                <img src={Logo}  />
                    <h1 className="bigText">MUNDOG MUSIC</h1>
                </div>
                <div className="topbarRight">
                    
                            <>
                            <Button className="bigText follow" style={{backgroundColor: 'black', border: 'none'}} onClick={this.toggleModal} >
                                <a><i className="fa fa-arrow-right" /><span className='d-none d-sm-block'> Follow Me!</span> </a>
                            </Button>
                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                <ModalHeader className="bigText mhbg">Follow Me!</ModalHeader>
                                <ModalBody className="mb">
                                  <Row>
                                     <Button className="btn btn-dark btn-links" href="http://twitch.tv/mundogmusic"><i class="fa fa-twitch fa-lg"></i>  Twitch</Button>
                                  </Row>
                                  <Row>
                                      <Button className="btn btn-dark btn-links" href="https://twitter.com/MundogMusic"><i class="fa fa-twitter fa-lg"></i>  Twitter</Button>
                                  </Row>
                                  <Row>
                                      <Button className="btn btn-dark btn-links" href="https://open.spotify.com/playlist/4whyTQSURKNOvGYxvoNEHt?si=ef13407f2a54425f"><i class="fa fa-spotify fa-lg"></i>  Spotify</Button>
                                  </Row>
                                  <Row>
                                      <Button className="btn btn-dark btn-links"><i class="fa fa-apple fa-lg"></i>  Apple Music</Button>
                                  </Row>
                                  <Row>
                                      <Button className="btn btn-dark btn-links" href="https://soundcloud.com/mundogmusic"><i class="fa fa-soundcloud fa-lg"></i>  SoundCloud</Button>
                                  </Row>
                                  <Row>
                                      <Button className="btn btn-dark btn-links" href="https://www.facebook.com/mundogmusic"><i class="fa fa-facebook fa-lg"></i>  Facebook</Button>
                                  </Row>
                                  <Row>
                                      <Button className="btn btn-dark btn-links" href="https://www.instagram.com/mundogmusic/"><i class="fa fa-instagram fa-lg"></i>  Instagram</Button>
                                  </Row>
                                  <Row>
                                      <Button className="btn btn-dark btn-links" href="https://www.youtube.com/channel/UCAf8izURaIlX2j36ahCtynQ"><i class="fa fa-youtube fa-lg"></i>  YouTube</Button>
                                  </Row>
                                  <Row>
                                      <Button className="btn btn-dark btn-links" href="https://www.tiktok.com/@MundogMusic"><i class="fab fa-tiktok" ></i>  TikTok</Button>
                                  </Row>
                                  <Row><Button className="btn btn-dark btn-links" onClick={this.toggleModal}>
                                    Close
                                    </Button>
                                    </Row>
                                </ModalBody>
                            </Modal>
                            </>
                        </div>
                  
        
                        
                    </div>
        )
    }
};

export default Topbar;