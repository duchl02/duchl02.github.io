import logo from "./logo.svg";
import "./App.scss";
import Nav from "./views/Nav";
import { useState } from "react";
import ListTodo from "./views/ListTodo";
import Covid19 from "./views/Covid19";
import Blog from "./views/Blog";
import { Countdow, NewCountdow } from "./views/Countdow";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import DetailBlog from './views/DetailBlog'
import AddNewBlog from "./views/AddNewBlog";
import NotFoundError from "./views/Notfound";
function App() {
  let [name, setName] = useState("duchl02");
  let [add, setAdd] = useState("hello word");
  let [todo, setTodo] = useState([
    { name: "duc", age: 20 },
    { name: "giang", age: 17 },
  ]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    let ntodo = { name: name, age: Math.floor(Math.random() * 10000) + 1 };
    setTodo([...todo, ntodo]);
    setName("");
  };
  const deleteTodo = (age) => {
    let currentTodo = todo;
    currentTodo = currentTodo.filter((item) => item.age !== age);
    setTodo(currentTodo);
  };
  const getTimeEnd = () => {
    console.log("getTimeEnd");
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Covid19 in Viet Nam</p>

          {/* <ListTodo todos={todo} deleteTodo={deleteTodo}/> */}
          {/* <Covid19></Covid19> */}

          <Switch>
            <Route exact path="/">
              <Covid19 />
            </Route>
            <Route path="/todo">
              <input
                type="text"
                value={name}
                onChange={(e) => handleChange(e)}
              />
              <button className="btn btn-success" onClick={() => handleClick()}>
                click
              </button>
              <ListTodo todos={todo} deleteTodo={deleteTodo} />
            </Route>
            <Route path="/about">
              <Countdow getTimeEnd={getTimeEnd} />
              <NewCountdow getTimeEnd={getTimeEnd} />
            </Route>
            <Route exact path="/blog">
            <Blog />
            </Route>
            <Route  path="/blog/:id">
            <DetailBlog />
            </Route>
            <Route  path="/add-new-post">
            <AddNewBlog />
          </Route>
          <Route  path="*">
            <NotFoundError />
          </Route>
          
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
