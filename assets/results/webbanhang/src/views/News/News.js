import "../News/NewsStyle.scss";
import h1cover from "../../assets/img/h1cover.png";

import useFetch from "../../custom/fetch";
const News = () => {
  document.title = "Tin tức - Gốm nhà Khuê My"
  window.scrollTo({top: 0})

  const { data: dataBlock, loadedData } = useFetch(
    "https://duchl02.github.io/assets/results/webbanhang/src/views/news.json"
  );
  return (
    <div className="news-container">
      <div className="title-name-center">
        <h1>Tin mới</h1>
        <img src={h1cover} />
      </div>
      <div className="wide grid">
        {loadedData === true && <h1 className="loading">Loading...</h1>}
        {loadedData === false &&
          dataBlock.map((item) => {
            return (
              <div key={item.id} className="news-item">
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
