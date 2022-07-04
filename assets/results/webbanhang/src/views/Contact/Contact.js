import "../Contact/ContactStyle.scss";

const Contact = () => {
  return (
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
  );
};
export default Contact;
