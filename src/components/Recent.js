import React, { useContext, useEffect, useState } from "react";
import "../styles/Body.css";
import axios from "../axios";
import { IconButton } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Header from "./Header";
import { SavedTracksContext } from "./SavedTracksContext";
import { motion } from "framer-motion";

function Recent({ user, userName, useruri }) {
  const [recent, setRecent] = useState([]);
  const id = recent.map((track) => track.track.uri);
  const img =
    recent[Math.floor(Math.random() * recent.length)]?.track.album?.images[1]
      ?.url;
  const option = "";
  const [setState] = useContext(SavedTracksContext);

  useEffect(() => {
    axios.get("/recently-played").then((res) => {
      setRecent(res.data);
    });
  }, []);
  
  const onClick = (id) => {
    setState(id)
  }

  return (
    <div className="page">
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
      <div className="body">
        <Header
          user={user}
          userName={userName}
          img={img}
          title="Recent"
          id={id}
          option={option}
          useruri={useruri}
        />

        <ul className="list" style={{ paddingTop: "70px" }}>
          {recent?.map((track) => (
            <div className="row">
              <div className="row_content">
                <a href={track.track.uri}>
                  <li className="list_elements">
                    <img className="img_tile" src={track.track.album.images[2]?.url} alt="" />
                    <div className="titles">
                      <h3>{track.track.name} </h3>
                      <h4>{track.track.album.artists[0].name} </h4>
                    </div>
                  </li>
                </a>
              </div>
              <div className="favourite">
                <IconButton onClick={() => onClick(track.track.id)}>
                  <FavoriteBorderOutlinedIcon style={{ color: "de4463" }} />
                </IconButton>
              </div>
            </div>
          ))}
        </ul>
      </div>
      </motion.div>
    </div>
  );
}

export default Recent;
