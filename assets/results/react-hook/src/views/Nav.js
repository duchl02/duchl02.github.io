import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default ">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar"
              >
                <span className="glyphicon glyphicon-align-justify"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse" id="navbar">
              <ul className="nav navbar-nav  ">
                <li className="nav-item">
                  <NavLink activeClassName="active" exact={true} to="/">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" to="/todo">
                    TODO
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" to="/about">
                    PORTFOLIO
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" to="/blog">
                    LIST USER
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" to="/add-new-post">
                    DETAIL-BLOG
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
