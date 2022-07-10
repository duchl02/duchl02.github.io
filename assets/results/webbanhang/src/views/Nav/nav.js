import React, { useEffect, useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Nav = (props) => {
  let listProduct = props.listProduct;
  let user = props.user;
  let checkUser = props.checkUser;

  // const [product, setProduct] = useState(listProduct);
  let numberProduct = listProduct.length;
  // useEffect(() => {
  //   console.log(listProduct)
  //   setProduct(listProduct)
  // },[listProduct])
  let header = document.getElementsByClassName("wide");
  let searchBox = document.getElementsByClassName("search-nav");
  let loginNav = document.getElementsByClassName("login-nav");
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (offset < 200) {
    header[0].style.height = 100 + "px";
    searchBox[0].style.display = "flex";
  }
  if (offset > 200) {
    header[0].style.height = 80 + "px";
    searchBox[0].style.display = "none";
  }
  let history = useHistory();
  const handleClickLogo = () => {
    history.push("/");
  };
  const handleClickCartIcon = () => {
    history.push("/cart");
  };
  const handlerClickLogin = () => {
    history.push("/login");
  };
  // var navSecond = document.getElementsByClassName('nav-second')
  // var navOverLay = document.getElementsByClassName('nav-overlay')
  // const handleClickNav = () =>{
  //   navOverLay[0].style.display = "none";
  //   navSecond[0].style.transform = "translateX(0)";

  //   console.log(navOverLay)
  // }
  return (
    <div className="header-container">
      <div className="header">
        <div className="wide grid">
          <div className="nav-button">
            <label htmlFor="nav-input-id">
              <i className="bar-icon icon fa-solid fa-bars"></i>
            </label>
          </div>
          <div className="header-left">
            <img
              onClick={() => handleClickLogo()}
              src="https://duchl02.github.io/assets/results/webbanhang/src/assets/img/logoheader.png"
            />
          </div>
          <div className="header-center">
            <div className="navbar8">
              <ul className="navbar8-nav  ">
                <li>
                  <NavLink activeClassName="active" exact={true} to="/">
                    Trang chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/product">
                    Sản phẩm
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/news">
                    Tin mới
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/contact">
                    Liên hệ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="search-nav">
              <div className="search-box">
                <input type="text" className="" />
                <ul className="search-auto">
                  <li>
                    <span>Bộ trà Hũ trà An Nhiên...</span>
                  </li>
                  <li>
                    <span>Đĩa sâu lòng Hồng Mai...</span>
                  </li>
                  <li>
                    <span>Bình hoa Thuận Buồm...</span>
                  </li>
                  <li>
                    <span>Bình hoa Lý Ngư...</span>
                  </li>
                </ul>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className="header-right">
            {checkUser === false && (
              <a onClick={() => handlerClickLogin()} className="login-nav">
                Đăng nhập
              </a>
            )}
            {checkUser === true && (
              <div onClick={() => handlerClickLogin()} className="user-main">
                <img src={user.imageUrl} />{" "}
                <a>
                  {user.familyName} {user.givenName}
                </a>
              </div>
            )}
            <div className="cart-icon">
              <i
                onClick={() => handleClickCartIcon()}
                className="fa-solid fa-cart-shopping"
              ></i>
              <span>{numberProduct}</span>
            </div>
          </div>
        </div>
        <input type="checkbox" hidden className="nav-input" id="nav-input-id" />
        <label htmlFor="nav-input-id" className="nav-overlay"></label>
        <div className="nav-second">
          <div className="wide grid">
            <div className="header-left">
              <div className="nav-button">
                <label htmlFor="nav-input-id">
                  <i className="bar-icon icon fa-solid fa-bars"></i>
                </label>
              </div>
              <img src="https://duchl02.github.io/assets/results/webbanhang/src/assets/img/logoheader.png" />
            </div>
            <div className="header-center">
              <div className="navbar8">
                <ul className="navbar8-nav ">
                  <li>
                    <i className="fa-solid fa-house"></i>
                    <NavLink activeClassName="active" exact={true} to="/">
                      Trang chủ
                    </NavLink>
                  </li>
                  <li>
                    <i className="fa-brands fa-product-hunt"></i>
                    <NavLink activeClassName="active" to="/product">
                      Sản phẩm
                    </NavLink>
                  </li>
                  <li>
                    <i className="fa-solid fa-newspaper"></i>
                    <NavLink activeClassName="active" to="/news">
                      Tin mới
                    </NavLink>
                  </li>
                  <li>
                    <i className="fa-solid fa-address-book"></i>
                    <NavLink activeClassName="active" to="/contact">
                      Liên hệ
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="search-nav">
                <div className="search-box">
                  <input type="text" className="" />
                  <ul className="search-auto">
                    <li>
                      <span>Bộ trà Hũ trà An Nhiên...</span>
                    </li>
                    <li>
                      <span>Đĩa sâu lòng Hồng Mai...</span>
                    </li>
                    <li>
                      <span>Bình hoa Thuận Buồm...</span>
                    </li>
                    <li>
                      <span>Bình hoa Lý Ngư...</span>
                    </li>
                  </ul>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
            <div className="header-right">
              {checkUser === false && (
                <a onClick={() => handlerClickLogin()} className="login-nav">
                  Đăng nhập
                </a>
              )}
              {checkUser === true && (
                <div onClick={() => handlerClickLogin()} className="user-main">
                  <img src={user.imageUrl} />{" "}
                  <a>
                    {user.familyName} {user.givenName}
                  </a>
                </div>
              )}
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <img src="https://duchl02.github.io/assets/results/webbanhang/src/assets/img/bgr.jpg" />
      </div>
    </div>
  );
};

export default Nav;
