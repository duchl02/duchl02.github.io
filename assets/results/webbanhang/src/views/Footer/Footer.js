import "../Footer/FooterStyle.scss";
import logoheader from "../../assets/img/logoheader.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="inmain">
        <div className="fanpage">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/G%E1%BB%91m-nh%C3%A0-Khu%C3%AA-My-106591728105268/"
            data-tabs="timeline"
            data-width="260"
            data-height="160"
            data-small-header="false"
            data-adapt-container-width="false"
            data-hide-cover="false"
            data-show-facepile="false"
          >
            <blockquote
              cite="https://www.facebook.com/G%E1%BB%91m-nh%C3%A0-Khu%C3%AA-My-106591728105268/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/G%E1%BB%91m-nh%C3%A0-Khu%C3%AA-My-106591728105268/">
                Gốm nhà Khuê My
              </a>
            </blockquote>
          </div>
        </div>
        <div className="foorter-item">
          <p>Địa chỉ: 23 Nguyễn Ái Quốc - Hoàng Mai</p>
          <p>Số điện thoại: 0123456789</p>
          <p>Email: gomnhakhuemy@gmail.com</p>
          <a href="https://www.facebook.com/G%E1%BB%91m-nh%C3%A0-Khu%C3%AA-My-106591728105268/">
            Website: Gốm nhà Khuê My
          </a>
        </div>
        <div className="foorter-item-2">
          <h3>Gốm sứ chất lượng cao</h3>
          <p>Quy trình sản xuất đạt tiêu chuẩn</p>
          <h3>Mua hàng(T2-CN)</h3>
          <p>Mở cửa tất cả các ngày trong tuần!</p>
          <h3>Miễn phí giao hàng</h3>
          <p>Dành cho hóa đơn trên 300k và &lt; 4km</p>
        </div>
        <img src={logoheader}></img>
      </div>
      <p>Logo Copyright 2022 © duchl02 - Design & code by duchl02</p>
    </div>
  );
};
export default Footer;
