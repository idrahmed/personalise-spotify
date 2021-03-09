import React from "react";
import "../styles/Login.css";
import Button from "@material-ui/core/Button";
import HeadsetIcon from "@material-ui/icons/Headset";

function Login() {
  return (
    <div className="login">
      <div className="content">
        <HeadsetIcon className="icon" fontSize="large" />
        <h1>Listen to your favourite songs</h1>
        <p>
          Using spotify, this app helps you keep track of all your favourite
          songs and artists you've listened to in the past and provides you with
          recommendations so you can keep listening to the songs you love.
        </p>
        <Button
          className="loginButton"
          href="https://personalised-spotify.herokuapp.com/login"
          // href="http://localhost:9000/login"
          variant="contained"
          color="secondary"
          size="large"
        >
          LOGIN WiITH SPOTIFY
        </Button>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3f51b5"
          fill-opacity=".4"
          d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,186.7C672,192,768,128,864,106.7C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Login;
