import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Exe/MyComponent";
import ListTodo from "./todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/nav";
import Home from "./Exe/Home";
import ListUser from "./ListUser/ListUser";
import DetailUser from "./ListUser/DetailUser";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Nav />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/todo">
            <ListTodo />
          </Route>
          <Route  path="/about">
            <MyComponent />
          </Route>
          <Route exact path="/user">
            <ListUser />
          </Route>
          <Route  path="/user/:id">
            <DetailUser />
          </Route>
        </Switch>
         
        </header>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
      </BrowserRouter>
  );
}

export default App;
