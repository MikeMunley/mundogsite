import React from "react";
import SpotifyPlayer from 'react-spotify-player';
import './playlist.css';



function Playlist() {

    const size = {
        width: '100%',
        height: "100vh"
      };
      const view = 'list'; // or 'coverart'
      const theme = 'black'; // or 'white'

    return (
        <div className="playlist">
        <SpotifyPlayer
        uri="spotify:playlist:4whyTQSURKNOvGYxvoNEHt"
        size={size}
        view={view}
        theme={theme}
        />
        </div>
    )
}

export default Playlist;