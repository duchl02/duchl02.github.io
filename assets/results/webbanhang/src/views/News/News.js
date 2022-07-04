import "../News/NewsStyle.scss";
import e1 from "../../assets/img/news/e1.png";
import h1cover from "../../assets/img/h1cover.png";
import e2 from "../../assets/img/news/e2.png";
import e3 from "../../assets/img/news/e3.png";
import e4 from "../../assets/img/news/e1.png";
const News = () => {
  return (
    <div className="product-container">
      <div className="item-center">
        <h1>Tin mới</h1>
        <img src={h1cover} />
      </div>
      <div className="wide grid">
        {/* <div className="product-item">
          <h1>Pha trà như nghệ nhân</h1>
          <p>
            Gặp chuyện tình cờ, nếu vô ý sẽ bỏ qua, còn người tinh tế có thể tận
            dụng để biến nó thành sự kiện để đời. Như trong lời kể của ông Lý
            Ngọc Minh, cái tình cờ của ông đến từ 30 năm trước, khi du lịch
            thường được bạn bè dẫn đến quán trà. Uống tại tiệm ngon nhưng mua
            về, trăm lần như một, ông đều cảm thấy ấm ức như bị gạt vì trà pha
            ra chẳng thơm mà lúc nhạt nhẽo, khi đắng chát. Mua đúng gói trà
            người bán vừa pha, đem về cũng không thơm ngon mong muốn.
          </p>
          <img src={e1}></img>
        </div> */}
      </div>
    </div>
  );
};
export default News;
