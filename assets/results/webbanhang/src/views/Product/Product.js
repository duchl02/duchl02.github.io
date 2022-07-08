import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from "react";
import "../Product/ProductStyle.scss";
import useFetch from "../../custom/fetch";
import a1 from "../../assets/img/ab.png";
import { NavLink , Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { autoplay, Pagination, Navigation } from "swiper";
let dontLoad = false;
const Product = (props) => {
  document.title = "Sản Phẩm - Gốm nhà Khuê My"
  let handlePush = props.handlePush
  let dataBlock = props.dataBlock
  let loadedData = props.loadedData
  dontLoad = true
  let [newData, setNewData] = useState(dataBlock);
  const handleSortBat = (e) => {
    if (e.target.alt === "bat") {
      if (dataBlock && dataBlock.length > 0) {
        let data = dataBlock.filter((item) => {
          return item.type === "Bát";
        });
        // console.log(data);
        setNewData(data);
      }
    }
    if (e.target.alt === "binhHoa") {
      if (dataBlock && dataBlock.length > 0) {
        let data = dataBlock.filter((item) => {
          return item.type === "Bình hoa";
        });
        // console.log(data);
        setNewData(data);
      }
    }
    if (e.target.alt === "au") {
      if (dataBlock && dataBlock.length > 0) {
        let data = dataBlock.filter((item) => {
          return item.type === "Âu";
        });
        // console.log(data);
        setNewData(data);
      }
    }
    if (e.target.alt === "boTra") {
      if (dataBlock && dataBlock.length > 0) {
        let data = dataBlock.filter((item) => {
          return item.type === "Bộ trà";
        });
        // console.log(data);
        setNewData(data);
      }
    }
    if (e.target.alt === "dia") {
      if (dataBlock && dataBlock.length > 0) {
        let data = dataBlock.filter((item) => {
          return item.type === "Đĩa";
        });
        // console.log(data);
        setNewData(data);
      }
    }
    if (e.target.alt === "tachTra") {
      if (dataBlock && dataBlock.length > 0) {
        let data = dataBlock.filter((item) => {
          return item.type === "Tách trà";
        });
        // console.log(data);
        setNewData(data);
      }
    }
    if (e.target.alt === "all") {
      if (dataBlock && dataBlock.length > 0) {
        setNewData(dataBlock);
      }
    }
  };

  const handleValueFilter = (e) => {
    if (e.target.value === "Bán chạy") {
      if (dataBlock && dataBlock.length > 0) {
        let data = dataBlock.filter((item) => {
          return item.topSale === true;
        });
        // console.log(data);
        setNewData(data);
      }
    }
    if (e.target.value === "Mới nhất") {
      if (dataBlock && dataBlock.length > 0) {
        let data = dataBlock.filter((item) => {
          return item.news === true;
        });
        // console.log(data);
        setNewData(data);
      }
    }
    if (e.target.value === "Giá: Thấp đến Cao") {
      if (dataBlock && dataBlock.length > 0) {
        let price = [];
        let data = dataBlock.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        // console.log(data);
        setNewData([...data, price]);
      }
    }
    if (e.target.value === "Giá: Cao đến thấp") {
      if (dataBlock && dataBlock.length > 0) {
        let price = [];
        let data = dataBlock.sort(
          (a, b) => -parseFloat(a.price) + parseFloat(b.price)
        );
        // console.log(data);
        setNewData([...data, price]);
      }
    }
    if (e.target.value === "Tất cả sản phẩm") {
      setNewData(dataBlock);
    }
  };
  useEffect(() => {
    setNewData(dataBlock);
  }, [dataBlock]);
  return (
    <div className="product-container">
      <div className="grid wide">
        <div className="product-slide">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div onClick={(e) => handleSortBat(e)} className="sort-type">
                <img alt="all" src={a1} />
                <p>Tất cả</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={(e) => handleSortBat(e)} className="sort-type">
                <img
                  alt="binhHoa"
                  src="https://duchl02.github.io/assets/results/reactbasic/src/untitled%20folder/5a9c909068e1eda45cd6104c141119de-min.png"
                />
                <p>Bình hoa</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={(e) => handleSortBat(e)} className="sort-type">
                <img
                  alt="tachTra"
                  src="https://duchl02.github.io/assets/results/reactbasic/src/untitled%20folder/c8-min.png"
                />
                <p>Tách trà</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={(e) => handleSortBat(e)} className="sort-type">
                <img
                  alt="bat"
                  src="https://duchl02.github.io/assets/results/reactbasic/src/untitled%20folder/4105e8c78fb90792fc41f98d86823cec-min%20(1).png"
                />
                <p>Bát</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div onClick={(e) => handleSortBat(e)} className="sort-type">
                <img
                  alt="dia"
                  src="https://duchl02.github.io/assets/results/webbanhang/src/assets/img/productimg/a7a210d8d3fb2c1217fda09b289ba35a-min.png"
                />
                <p>Đĩa</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={(e) => handleSortBat(e)}
                
                className="sort-type"
              >
                <img alt="au" src="https://duchl02.github.io/assets/results/webbanhang/src/assets/img/productimg/c2-min.png" />
                <p>Âu</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                onClick={(e) => handleSortBat(e)}
                
                className="sort-type"
              >
                <img alt="boTra" src="https://duchl02.github.io/assets/results/webbanhang/src/assets/img/productimg/249770791a0ff26bd6db03e6c620ea1d-min.png" />
                <p>Bộ trà</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="product-filter">
          <span>Lọc sản phẩm theo</span>
          <select
            onChange={(e) => handleValueFilter(e)}
            className="product-select"
          >
            <option value="Tất cả sản phẩm">Tất cả sản phẩm</option>
            <option value="Giá: Thấp đến Cao">Giá: Thấp đến Cao </option>
            <option value="Giá: Cao đến thấp">Giá: Cao đến thấp</option>
            <option value="Bán chạy">Bán chạy</option>
            <option value="Mới nhất">Mới nhất</option>
          </select>
        </div>
        <div className="product-area">
          <div className="row">
            {loadedData === false &&
              newData.map((item) => {
                if (item.id > 0) {
                  return (
                    <div
                      key={item.id}
                      className="product-item col l-3 m-4 c-6 "
                    >
                      <Link  to={`/product/${item.id}`}>
                        <img src={item.image} />
                      </Link>
                      <div className="product-content">
                        <Link  to={`/product/${item.id}`}>
                          <a>{item.name}</a>
                        </Link>

                        <h5>{parseInt(item.price).toLocaleString()}đ</h5>
                        <span onClick={() => handlePush(item.id)}>
                            <a>MUA NGAY</a>
                        </span>
                      </div>
                      <div className="product-tag">
                        <div className="product-tag-news">
                          <Link  to={`/product/${item.id}`}>
                            {item.news === true && <span>news</span>}
                          </Link>
                        </div>
                        <div className="product-tag-sale">
                          <Link  to={`/product/${item.id}`}>
                            {item.topSale === true && <span>sale</span>}
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            {loadedData === true && <h1 className="loading">Loading...</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
