import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Map from "./components/Map"
import TopBar from "./components/TopBar";
import EscapeRoomList from "./components/EscapeRoomList";
import Beach from "./components/Beach";

function App() {

    return (
        <Router>
    <div>

        <Switch>
            <Route path="/" exact>
        <TopBar/>
        <Map/>
            </Route>
            <Route path="/escaperooms">
                <TopBar/>
                <EscapeRoomList/>
            </Route>
            <Route path="/beach/:id" component={Beach} />
        </Switch>

    </div>
        </Router>
  );


}

export default App;
