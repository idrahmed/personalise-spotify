import React, { useEffect, useState, useContext } from "react";
import "../styles/Body.css";
import axios from "../axios";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Header from "./Header";
import { SavedTracksContext } from "./SavedTracksContext";
import {selectedOption} from './selectedOptionStyle'


function TopTracks({ useruri, user, userName }) {
  const [top_tracks, setTracks] = useState([]);
  const [option, selectOption] = useState("All Time");
  const [img, setImg] = useState("");
  const id = top_tracks.map((track) => track.uri);
  const [state, setState] = useContext(SavedTracksContext);

 

  useEffect(() => {
    if (option === "All Time") {
      axios.get("/top-tracks/long_term").then((res) => {
        setTracks(res.data);
      });
    } else if (option === "6 mos") {
      axios.get("/top-tracks/medium_term").then((res) => {
        setTracks(res.data);
      });
    } else if (option === "3 mos") {
      axios.get("/top-tracks/short_term").then((res) => {
        setTracks(res.data);
      });
    }
  }, [option]);

  useEffect(() => {
    setImg(
      top_tracks[Math.floor(Math.random() * top_tracks.length)]?.album
        ?.images[1]?.url
    );
  }, [top_tracks]);

  return (
    <div className="page">
      <div className="body">
        <Header
          user={user}
          userName={userName}
          img={img}
          title="Top Tracks"
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
          {top_tracks?.map((track) => (
            <div className="row">
              <div className="row_content">
                <a href={track.uri}>
                  <li className="list_elements">
                    <img className="img_tile" src={track.album.images[2]?.url} alt="" />
                    <div className="titles">
                      <h3>{track.name} </h3>
                      <h4>{track.artists[0].name} </h4>
                    </div>
                  </li>
                </a>
              </div>
              <div className="favourite">
                <IconButton onClick={() => setState(track.id)}>
                  <FavoriteBorderIcon style={{ color: "de4463" }} />
                </IconButton>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopTracks;
