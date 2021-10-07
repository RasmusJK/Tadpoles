import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Map from "./components/Map"
import TopBar from "./components/TopBar";
import EscapeRoomList from "./components/EscapeRoomList";


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
        </Switch>

    </div>
        </Router>
  );


}

export default App;
