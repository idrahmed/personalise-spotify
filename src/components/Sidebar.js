import React from "react";
import "../styles/Sidebar.css";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import HistoryIcon from "@material-ui/icons/History";
import { Link } from "react-router-dom";

function Sidebar() {
  
  let tab = window.location.pathname
  

  return (
    <div className="sidebar">
      <div className="sidebar_icons">

        <Link className="link" to="/toptracks">
        <div className="sidebar_element">
          <StarIcon fontSize="large" className="element" style={{color: tab === '/toptracks' ? 'white' : '', }}/>
          <h4 style={{color: tab === '/toptracks' ? 'white' : '', }}>Top Tracks</h4>
        </div>
        </Link>

        <Link className="link" to="/topartists">
        <div className="sidebar_element" >
          <FavoriteIcon fontSize="large" className="element" style={{color: tab === '/topartists' ? 'white' : '', }} />
          <h4 style={{color: tab === '/topartists' ? 'white' : '', }}>Top Artists</h4>
        </div>
        </Link>

        <Link className="link" to="/recently-played">
        <div className="sidebar_element" >
          <HistoryIcon fontSize="large" className="element" style={{color: tab === '/recently-played' ? 'white' : '', }}/>
          <h4 style={{color: tab === '/recently-played' ? 'white' : '', }}>Recent</h4>
        </div>
        </Link>

        <Link className="link" to="/recommendations">
        <div className="sidebar_element" >
          <LibraryMusicIcon fontSize="large" className="element" style={{color: tab === '/recommendations' ? 'white' : '', }}/>
          <h4 style={{color: tab === '/recommendations' ? 'white' : '', }}>Recommended</h4>
        </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Sidebar;
