import "../styles/global.css"
import Nav from "./Nav/nav";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
