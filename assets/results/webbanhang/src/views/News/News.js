import "../News/NewsStyle.scss";
import e1 from "../../assets/img/news/e1.png";
import h1cover from "../../assets/img/h1cover.png";
import axios from "axios";

import useFetch from "../../custom/fetch";
const News = () => {
  const { data: dataBlock, loadedData } = useFetch(
    "https://6288a9b610e93797c15d8515.mockapi.io/api/user"
  );
  console.log(dataBlock);
  return (
    <div className="news-container">
      <div className="item-center">
        <h1>Tin mới</h1>
        <img src={h1cover} />
      </div>
      <div className="wide grid">
        {loadedData === true && <h1 className="loading">Loading...</h1>}
        {loadedData === false &&
          dataBlock.map((item) => {
            return (
              <div key={item.id} className="product-item">
                <h1>{item.title}</h1>
                <p>{item.content1}</p>
                <img src={item.image1}></img>
                <p>{item.content2}</p>
                <img src={item.image2}></img>
                <p>{item.content3}</p>
                <img src={item.image3}></img>
                <p>{item.content4}</p>
                <img src={item.image4}></img>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default News;
