import { Swiper, SwiperSlide } from "swiper/react";
import "../Product/ProductStyle.scss";
import useFetch from "../../custom/fetch";
import a1 from "../../assets/img/news/a1.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Product = () => {
  const { data: dataBlock, loadedData } = useFetch(
    "https://6288a9b610e93797c15d8515.mockapi.io/api/product"
  );
  const handleSortBat = () => {
    console.log(1)
  }
  console.log(dataBlock)
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
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            
            <SwiperSlide onClick={()=>handleSortBat()}  >
                <div className="sort-type">
                    <img src={a1}/>
                    <p>Taats acr</p>
                </div>
            </SwiperSlide>
            <SwiperSlide onClick={()=>handleSortBat()}  >
                <div className="sort-type">
                    <img src={a1}/>
                    <p>Taats acr</p>
                </div>
            </SwiperSlide>
            <SwiperSlide onClick={()=>handleSortBat()}  >
                <div className="sort-type">
                    <img src={a1}/>
                    <p>Taats acr</p>
                </div>
            </SwiperSlide>
            <SwiperSlide onClick={()=>handleSortBat()}  >
                <div className="sort-type">
                    <img src={a1}/>
                    <p>Taats acr</p>
                </div>
            </SwiperSlide>
            <SwiperSlide onClick={()=>handleSortBat()}  >
                <div className="sort-type">
                    <img src={a1}/>
                    <p>Taats acr</p>
                </div>
            </SwiperSlide>
            <SwiperSlide onClick={()=>handleSortBat()}  >
                <div className="sort-type">
                    <img src={a1}/>
                    <p>Taats acr</p>
                </div>
            </SwiperSlide>
            <SwiperSlide onClick={()=>handleSortBat()}  >
                <div className="sort-type">
                    <img src={a1}/>
                    <p>Taats acr</p>
                </div>
            </SwiperSlide>
            <SwiperSlide onClick={()=>handleSortBat()}  >
                <div className="sort-type">
                    <img src={a1}/>
                    <p>Taats acr</p>
                </div>
            </SwiperSlide>

           
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Product;
