import React, { useEffect, useState } from "react";
import "../styles/Body.css";
import axios from "../axios";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Header from "./Header";
import { useAlert } from 'react-alert'
import {selectedOption} from './selectedOptionStyle'

function TopArtists({ user, userName, useruri }) {
  const [top_artists, setArtists] = useState([]);
  const [option, selectOption] = useState("All Time");
  const [img, setImg] = useState("");
  const id = top_artists.map((artist) => artist.id);
  const alert = useAlert()

  console.log(top_artists)

  useEffect(() => {
    if (option === "All Time") {
      axios.get("/top-artists/long_term").then((res) => {
        setArtists(res.data);
      });
    } else if (option === "6 mos") {
      axios.get("/top-artists/medium_term").then((res) => {
        setArtists(res.data);
      });
    } else if (option === "3 mos") {
      axios.get("/top-artists/short_term").then((res) => {
        setArtists(res.data);
      });
    }
  }, [option]);
 

  useEffect(() => {
    setImg(
      top_artists[Math.floor(Math.random() * top_artists.length)]?.images[1]
        ?.url
    );
  }, [top_artists]);

  const addToSaved = (id) => {
    axios.put('/saved-artist', {
      track_id : id    
    }).then(alert.show(<div style={{ fontSize: '14px'}}>Followed Artist</div>))
  }

  return (
    <div className="page">
      <div className="body">
        <Header
          user={user}
          userName={userName}
          img={img}
          title="Top Artists"
          id={id}
          option={option}
          useruri={useruri}
        />
        <div className="options">
          <h2
            onClick={() => {
              selectOption("All Time");
            }}
            className="option_element"
            style={option === 'All Time' ? selectedOption : {}}
          >
            {" "}
            All time{" "}
          </h2>
          <h2
            onClick={() => {
              selectOption("6 mos");
            }}
            className="option_element"
            style={option === '6 mos' ? selectedOption : {}}
          >
            Last 6 months
          </h2>
          <h2
            onClick={() => {
              selectOption("3 mos");
            }}
            className="option_element"
            style={option === '3 mos' ? selectedOption : {}}
          >
            Last month
          </h2>
        </div>

        <ul className="list">
          {top_artists?.map((artist) => (
            
            <div className="row">
            <div className="row_content">
                <a href={artist.uri}>
              <li className="list_elements">
                <img className="img_tile" src={artist.images[2].url} alt="" />
                <div className="titles">
                  <h3>{artist.name} </h3>
                  <h4>{artist.genres.join(", ")} </h4>
                </div>
              </li>
              </a>
              </div>
              <div className="favourite">
                <IconButton onClick={() => {addToSaved(artist.id) }}>
                  <FavoriteBorderIcon  style={{ color: "de4463"}} />
                </IconButton>
              </div>
            </div>
            
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopArtists;
