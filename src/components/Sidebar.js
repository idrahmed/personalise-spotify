import React from "react";
import "../styles/Sidebar.css";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import HistoryIcon from "@material-ui/icons/History";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core"

function Sidebar() {
  const mobile = useMediaQuery("(max-width: 600px)")
  let tab = window.location.pathname
  
  const iconColor = {
    color: 'white'
  }


  return (
    <div className="sidebar">
      <div className="sidebar_icons">

        <Link className="link" to="/toptracks">
        <div className="sidebar_element">
          <StarIcon fontSize={!mobile ? "large" : ''} className="element" style={tab === '/toptracks' ? iconColor : {}}/>
          <h4 style={tab === '/toptracks' ? iconColor : {}}>Top Tracks</h4>
        </div>
        </Link>

        <Link className="link" to="/topartists">
        <div className="sidebar_element" >
          <FavoriteIcon fontSize={!mobile ? "large" : ''} className="element" style={tab === '/topartists' ? iconColor : {}} />
          <h4 style={tab === '/topartists' ? iconColor : {}}>Top Artists</h4>
        </div>
        </Link>

        <Link className="link" to="/recently-played">
        <div className="sidebar_element" >
          <HistoryIcon fontSize={!mobile ? "large" : ''} className="element" style={tab === '/recently-played' ? iconColor : {}}/>
          <h4 style={tab === '/recently-played' ? iconColor : {}}>Recent</h4>
        </div>
        </Link>

        <Link className="link" to="/recommendations">
        <div className="sidebar_element" >
          <LibraryMusicIcon fontSize={!mobile ? "large" : ''} className="element" style={tab === '/recommendations' ? iconColor : {}}/>
          <h4 style={tab === '/recommendations' ? iconColor : {}}>Recommended</h4>
        </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Sidebar;
