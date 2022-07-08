import "../ProductPage/ProductPageStyle.scss";
import { NavLink } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../../custom/fetch";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Autoplay, Zoom, Navigation } from "swiper";

const ProductPage = (props) => {
  let history = useHistory()
  let { id } = useParams();
  let handlePush = props.handlePush
 const handleClickShopNow=()=>{
  history.push('/cart')
 }
window.scrollTo({top: 0})
  let dataBlock = props.dataBlock.filter((item)=>{
    return item.id === id
  })
  let loadedData = props.loadedData
  useEffect(() => {
  },[dataBlock]);
  return (
    <div className="product-page-container">
      <div className="grid wide">
        {loadedData === false && dataBlock[0] && (
          <>
            <div className="link-product">
              <NavLink activeClassName="active" exact={true} to="/">
                Trang chủ
              </NavLink>
              &nbsp;/&nbsp;
              <NavLink activeClassName="active" to="/product">
                Sản phẩm
              </NavLink>
              &nbsp;/&nbsp;<span>{dataBlock[0].name}</span>
            </div>
            <div className="row">
              <div className="col l-7 m-7 c-12">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  zoom={true}
                  navigation={true}
                  modules={[Zoom, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="swiper-zoom-container">
                      <img className="slide-1" src={dataBlock[0].image} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-zoom-container">
                      <img className="slide-1" src={dataBlock[0].image} />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="col l-5 m-5 c-12">
                <div className="content-right">
                  <h1>{dataBlock[0].name}</h1>
                  <p>Giá: {parseInt(dataBlock[0].price).toLocaleString()}đ</p>
                  <p>Xuất xứ: Việt Nam</p>
                  <p>Loại: {dataBlock[0].type}</p>
                  <p>Số lượng: 1</p>
                  
                  <button onClick={()=>handleClickShopNow()} className="buy-btn"> Đi đến giỏ hàng</button>
                  <button onClick={() => handlePush(dataBlock[0].id)}className="buy-btn ">Mua Ngay</button>
                </div>
              </div>
            </div>
            <div className="info-product">
              <h1>Thông tin về sản phẩm</h1>
              <p>{dataBlock[0].content}</p>
            </div>
            
          </>
        )}
      </div>
    </div>
  );
};
export default ProductPage;
