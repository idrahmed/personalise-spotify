import React, { useContext, useEffect, useState } from "react";
import "../styles/Body.css";
import axios from "../axios";
import { IconButton } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Header from "./Header";
import { SavedTracksContext } from "./SavedTracksContext";
import { selectedOption } from "./selectedOptionStyle";
import { motion } from "framer-motion";
import LoadingSkeleton from "./LoadingSkeleton";

function Recommendations({ user, userName, useruri }) {
  const [recommended, setRecommended] = useState(null);
  const [option, selectOption] = useState("Weekly Mix");
  const [img, setImg] = useState("");
  const id = recommended?.map((track) => track.track.uri);
  const [state, setState] = useContext(SavedTracksContext);

  useEffect(() => {
    if (option === "Weekly Mix") {
      axios.get("/recommendations/weekly").then((res) => {
        setRecommended(res.data);
      });
    } else if (option === "Daily Mix") {
      axios.get("/recommendations/daily").then((res) => {
        setRecommended(res.data);
      });
    }
  }, [option]);

  useEffect(() => {
    setImg(
      recommended?.[Math.floor(Math.random() * recommended.length)]?.track.album
        ?.images[1]?.url
    );
  }, [recommended]);

  const onClick = (id) => {
    setState(id);
  };

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
            title="Recommended"
            id={id}
            option={option}
            useruri={useruri}
          />

          <div className="options">
            <h2
              onClick={() => {
                setRecommended(null);
                selectOption("Weekly Mix");
              }}
              className="option_element"
              style={option === "Weekly Mix" ? selectedOption : {}}
            >
              Weekly Mix
            </h2>
            <h2
              onClick={() => {
                setRecommended(null);
                selectOption("Daily Mix");
              }}
              className="option_element"
              style={option === "Daily Mix" ? selectedOption : {}}
            >
              Daily Mix
            </h2>
          </div>

          <ul className="list">
            {!recommended && (
              <div>
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
              </div>
            )}

            {recommended?.length === 0 && (
              <h1 className="no_data">No data to display</h1>
            )}

            {recommended?.map((track) => (
              <div className="row">
                <div className="row_content">
                  <a href={track.track.uri}>
                    <li className="list_elements">
                      <img
                        className="img_tile"
                        src={track.track.album.images[2]?.url}
                        alt=""
                      />
                      <div className="titles">
                        <h3>{track.track.album.name} </h3>
                        <h4>{track.track.artists[0].name} </h4>
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

export default Recommendations;
