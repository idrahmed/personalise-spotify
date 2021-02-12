import "./App.css";
import { useContext, useEffect, useState } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopTracks from "./components/TopTracks";
import Recent from "./components/Recent";
import TopArtists from "./components/TopArtists";
import Sidebar from "./components/Sidebar";
import Recommendations from "./components/Recommendations";
import axios from './axios'
import { SavedTracksContext } from './components/SavedTracksContext'
import { useAlert } from 'react-alert'

function App() {
  const [user, setUser] = useState('');
  const [userName, setUserName] = useState('')
  const [useruri, setUserUri] = useState('')
  const [state, setState] = useContext(SavedTracksContext)
  const alert = useAlert()

  useEffect(() => {
    axios.get("/me").then((response) => {
      setUser(response.data.images[0]?.url);
      setUserName(response.data.display_name)
      setUserUri(response.data.uri)
      console.log(response.data)
    });
  }, []);

  useEffect (() => {
     function saveTrack() {
      if (state) {
    axios.post('/saved-tracks', {
      track_id: state
    }).then(alert.show(<div style={{fontSize: '13px'}}>Added to saved tracks</div>))
  }
}
  saveTrack()
  }, [state])

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/recommendations">
        <Sidebar/>
            <Recommendations useruri={useruri} user={user} userName={userName}/>
          </Route>
        <Route path="/recently-played">
        <Sidebar/>
            <Recent useruri={useruri} user={user} userName={userName}/>
          </Route>
        <Route path="/topartists">
              <Sidebar/>
            <TopArtists useruri={useruri} user={user} userName={userName}/>
          </Route>
          <Route path="/toptracks">
          <Sidebar/>
            <TopTracks useruri={useruri} user={user} userName={userName}/>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
