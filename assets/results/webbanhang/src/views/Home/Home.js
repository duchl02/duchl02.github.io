import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import h1cover from "../../assets/img/h1cover.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "../Home/Homestyle.scss";


const Home = () => {
  return (
    <div className="home-container">
      <div className=" grid wide">
        <div className="intro">
          <div className="row8">
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
                  <img className="slide-1" src={slide1} />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="slide-1" src={slide2} />
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
            <div className="item-center">
              <h1>Sản phẩm mới</h1>
              <img src={h1cover} />
            </div>
          </div>
        </div>
        <div className="center-item-1">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="slide-1" src={slide1} />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Home;
