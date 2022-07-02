import React from "react";
import './nav.scss'
import {NavLink} from "react-router-dom"
class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
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
                  <li >
                    <NavLink activeClassName="active" exact={true} to="/">Trang chủ</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active"  to="/productions">Sản phẩm</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active"  to="/news">Tin mới</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active"  to="/contact">Liên hệ</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Nav;
