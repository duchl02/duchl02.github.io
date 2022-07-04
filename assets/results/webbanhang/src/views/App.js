import "../styles/global.css";
import Nav from "./Nav/nav";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Product from "./Product/Product";
import News from "./News/News";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
