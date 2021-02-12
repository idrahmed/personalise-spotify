import { Avatar, Button, Tooltip } from "@material-ui/core";
import React, { useState } from "react";
import "../styles/Header.css";
import axios from "../axios";
import Zoom from "@material-ui/core/Zoom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Checkmark } from "react-checkmark";

function Header({ img, title, user, id, option, useruri, userName }) {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  let date = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const addNewPlaylist = () => {
    if (title === "Top Artists") {
      axios.post("/artist-top-tracks", {
        track_id: id,
        name: `${title} ${option} ${date}`,
      });
    } else {
      axios.post("/create-playlist", {
        track_id: id,
        name: `${title} ${option} ${date}`,
      });
    }
  };

  return (
    <div className="header">
      <div className="header_left">
        <a href="https://accounts.spotify.com/en/status">
          <Tooltip
            title="Sign Out / Switch Account"
            placement="right-end"
            arrow
            TransitionComponent={Zoom}
          >
            <div className="user_logo">
              <Avatar
                alt=""
                src={user}
                className="element"
                style={{ color: "white" }}
              />
              <h4>{userName}</h4>
            </div>
          </Tooltip>
        </a>
        <h1 className="header_title">{title}</h1>
        <div className="header_button">
          <Button
            onClick={() => {
              addNewPlaylist();
              onOpenModal();
            }}
            size="large"
            style={{ fontWeight: 750, borderRadius: "36px" }}
            variant="contained"
          >
            Create Playlist
          </Button>
          <Modal open={open} onClose={onCloseModal} center>
            <div className="modal_content">
              <h1 className="modal_title">Playlist Created!</h1>
              <Checkmark xxLarge color="#3f50b5" />
              <Button
                href={useruri}
                style={{
                  borderRadius: "36px",
                  fontWeight: 550,
                }}
                size="large"
                color="primary"
                variant="contained"
              >
                View in Spotify
              </Button>
            </div>
          </Modal>
        </div>
      </div>
      <img className="header_img" src={img} alt="" />
    </div>
  );
}

export default Header;
