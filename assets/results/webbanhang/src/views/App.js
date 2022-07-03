import "../styles/global.css";
import Nav from "./Nav/nav";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
