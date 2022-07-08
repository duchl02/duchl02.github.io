import React, { useEffect, useState } from 'react';
import "./nav.css";
import { NavLink } from "react-router-dom";
import {  useHistory } from "react-router-dom";

import logoheader from "../../assets/img/logoheader.png";
import bgr from "../../assets/img/bgr.jpg";

const Nav = (props) =>{
  let listProduct = props.listProduct
  // const [product, setProduct] = useState(listProduct);
  let numberProduct = listProduct.length 
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
  if (offset < 200 ) {
    header[0].style.height = 120 + "px";
    searchBox[0].style.display = "flex";
    loginNav[0].style.display = "block";
  }
  if (offset > 200) {
    header[0].style.height = 80 + "px";
    searchBox[0].style.display = "none";
    loginNav[0].style.display = "none";
  }
  let history = useHistory()
  const handleClickLogo = () =>{
    history.push("/")
  }
  const handleClickCartIcon=() =>{
    history.push("/cart")
  }
  // var navSecond = document.getElementsByClassName('nav-second')
  // var navOverLay = document.getElementsByClassName('nav-overlay')
  // const handleClickNav = () =>{
  //   navOverLay[0].style.display = "none";
  //   navSecond[0].style.transform = "translateX(0)";

  //   console.log(navOverLay)
  // }
    return (
      <div className='header-container'>
        <div className="header">
        <div className="wide grid">
          <div className="nav-button">
          <label htmlFor="nav-input-id"><i className="bar-icon icon fa-solid fa-bars"></i></label>
          </div>
          <div className="header-left">
          
            <img onClick={()=>handleClickLogo()} src={logoheader} />
          </div>
          <div className="header-center">
            <div className="navbar8">
              <ul className="navbar8-nav  " >
                <li>
                  <NavLink  activeClassName="active" exact={true} to="/">
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
            <a href="#" className="login-nav">Đăng nhập</a>
            <div className="cart-icon">
            <i onClick={() =>handleClickCartIcon()} className="fa-solid fa-cart-shopping"></i>
            <span>{numberProduct}</span>
            </div>
          </div>
        </div>
        <input type="checkbox" hidden className="nav-input" id="nav-input-id"/>
            <label htmlFor="nav-input-id" className="nav-overlay"></label>
        <div className="nav-second">
        <div className="wide grid">
          
          <div className="header-left">
          <div className="nav-button">
          <label htmlFor="nav-input-id"><i className="bar-icon icon fa-solid fa-bars"></i></label>
          </div>
            <img src={logoheader} />
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
            <a href="#">Đăng nhập</a>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
        </div>
      </div>
      <div className="background">
        <img src={bgr}/>
      </div>
      </div>
    );
  }

export default Nav;
