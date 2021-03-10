import {
  BrowserRouter as Router,


  Route, Switch
} from "react-router-dom";
import './App.css';
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Home from './components/Home/Home';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/country/:countryName">
          <CountryDetails/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h2>Not Found</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
