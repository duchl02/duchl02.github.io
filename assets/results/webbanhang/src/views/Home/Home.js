import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import h1cover from "../../assets/img/h1cover.png";
// import required modules
import { Autoplay, Pagination, Navigation, Grid } from "swiper";
import "../Home/Homestyle.scss";

const Home = (props) => {
  let handlePush= props.handlePush

  document.title = "Gốm nhà Khuê My";
  let dataBlock = props.dataBlock;
  let loadedData = props.loadedData;
  let newproducts = dataBlock.filter((item) => {
    return item.news === true && item.topSale === false;
  });
  let saleproducts = dataBlock.filter((item) => {
    return item.topSale === true && item.news === false;
  });
  const bestProduct = dataBlock.filter((item) => {
    return item.news === true;
  });
  const databestProduct = bestProduct.slice(8, 14);
  let history = useHistory();
  const handleClickProduct = (id) => {
    history.push(`/product/${id}`);
  };
  return (
    <div className="home-container">
      <div className=" grid wide">
        <div className="intro">
          <div className="row">
            <div className="slide-left col l-9 m-12 c-12">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img className="slide-1" src='https://duchl02.github.io/assets/results/webbanhang/src/assets/img/slide1.jpg' />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="slide-1" src='https://duchl02.github.io/assets/results/webbanhang/src/assets/img/slide2.jpg' />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="slide-right col l-3 m-12 c-12">
              <div className="slide-item">
                <i className="fa-solid fa-medal"></i>
                <div className="slide-content">
                  <h3>Gốm sứ chất lượng cao</h3>
                  <p>Quy trình sản xuất đạt tiêu chuẩn</p>
                </div>
              </div>
              <div className="slide-item">
                <i className="fa-solid fa-store"></i>
                <div className="slide-content">
                  <h3>Mua hàng(T2-CN)</h3>
                  <p>Mở cửa tất cả các ngày trong tuần!</p>
                </div>
              </div>
              <div className="slide-item">
                <i className="fa-solid fa-truck-fast"></i>
                <div className="slide-content">
                  <h3>Miễn phí giao hàng</h3>
                  <p>Dành cho hóa đơn trên 300k và &lt; 4km </p>
                </div>
              </div>
            </div>
            <div className="title-name-center">
              <h1>Sản phẩm mới</h1>
              <img src='https://duchl02.github.io/assets/results/webbanhang/src/assets/img/h1cover.png' />
            </div>
          </div>
        </div>
        <div className="center-item-1">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            // centeredSlides={true}
            // grid={{
            //             rows: 2,
            //         }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation, Grid]}
            className="mySwiper"
          >
            {loadedData === false &&
              newproducts.map((item) => {
                if (item.id > 0) {
                  return (
                    <SwiperSlide>
                      <div key={item.id} className="product-item  ">
                        <Link to={`/product/${item.id}`}>
                          <img src={item.image} />
                        </Link>
                        <div className="product-content">
                          <Link to={`/product/${item.id}`}>
                            <a>{item.name}</a>
                          </Link>

                          <h5>{parseInt(item.price).toLocaleString()}đ</h5>
                          <span onClick={() => handlePush(item.id)}>
                            <a>MUA NGAY</a>
                          </span>
                        </div>
                        <div className="product-tag">
                          <div className="product-tag-news">
                            <Link to={`/product/${item.id}`}>
                              {item.news === true && <span>news</span>}
                            </Link>
                          </div>
                          <div className="product-tag-sale">
                            <Link to={`/product/${item.id}`}>
                              {item.topSale === true && <span>sale</span>}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
          </Swiper>
        </div>
        <div className="title-name-center">
          <h1>Sản phẩm bán chạy</h1>
          <img src='https://duchl02.github.io/assets/results/webbanhang/src/assets/img/h1cover.png' />
        </div>
        <div className="center-item-1">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Navigation, Grid]}
            className="mySwiper"
          >
            {loadedData === false &&
              saleproducts.map((item) => {
                if (item.id > 0) {
                  return (
                    <SwiperSlide>
                      <div key={item.id} className="product-item  ">
                        <Link to={`/product/${item.id}`}>
                          <img src={item.image} />
                        </Link>
                        <div className="product-content">
                          <Link to={`/product/${item.id}`}>
                            <a>{item.name}</a>
                          </Link>

                          <h5>{parseInt(item.price).toLocaleString()}đ</h5>
                          <span onClick={() => handlePush(item.id)}>
                              <a>MUA NGAY</a>
                          </span>
                        </div>
                        <div className="product-tag">
                          <div className="product-tag-news">
                            <Link to={`/product/${item.id}`}>
                              {item.news === true && <span>news</span>}
                            </Link>
                          </div>
                          <div className="product-tag-sale">
                            <Link to={`/product/${item.id}`}>
                              {item.topSale === true && <span>sale</span>}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
          </Swiper>
        </div>
        <div className="title-name-center">
          <h1>Sản phẩm tiêu biểu</h1>
          <img src='https://duchl02.github.io/assets/results/webbanhang/src/assets/img/h1cover.png' />
        </div>
        <div className="best-product">
          {loadedData === false &&
            databestProduct.map((item) => {
              return (
                <div className="best-product-item">
                  <div className="best-img-item">
                    <img
                      onClick={() => handleClickProduct(item.id)}
                      src={item.image}
                    ></img>
                  </div>
                  <div className="dis-best-product">
                    <div className="title-name-center">
                      <h1 onClick={() => handleClickProduct(item.id)}>
                        {item.name}
                      </h1>
                    </div>
                    <p>{parseInt(item.price).toLocaleString()}vnd</p>
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}

          <div className="best-product-img">
            <img src='https://duchl02.github.io/assets/results/webbanhang/src/assets/img/center.png'></img>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-bar">
          <h1>LIÊN HỆ</h1>
          <h3>Chăm sóc khách hàng là niềm vui của chúng tôi!</h3>
        </div>
        <div className="contact-address wide grid">
          <div className="contact-item-1 boder-db">
            <h2>Cửa hàng 1</h2>
            <p>Địa chỉ: 23 Nguyễn Ái Quốc - Hoàng Mai</p>
            <p>Số điện thoại: 0123456789</p>
            <p>Email: gomnhakhuemy@gmail.com</p>
            <a href="https://www.facebook.com/G%E1%BB%91m-nh%C3%A0-Khu%C3%AA-My-106591728105268/">
              Website: Gốm nhà Khuê My
            </a>
          </div>
          <div className="contact-item-2 boder-db">
            <h2>Cửa hàng 2</h2>
            <p>Địa chỉ: 23 Nguyễn Tri Phương - Cầu Giấy</p>
            <p>Số điện thoại: 0123456789</p>
            <p>Email: gomnhakhuemy@gmail.com</p>
            <a href="https://www.facebook.com/G%E1%BB%91m-nh%C3%A0-Khu%C3%AA-My-106591728105268/">
              Website: Gốm nhà Khuê My
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
