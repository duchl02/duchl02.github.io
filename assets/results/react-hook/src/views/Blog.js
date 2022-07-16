import useFetch from "../customize/fetch";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Blog.scss";
const Blog = () => {
  
  const { data: dataBlock, loadedData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [newData,setNewData]= useState([])
  useEffect(() =>{
    if (dataBlock && dataBlock.length > 0) {
      let newDatablog = dataBlock.slice(0, 9);
      setNewData(newDatablog)
    }
  },[dataBlock])
  const [title, setTitles] = useState("duc");
  const [content, setContent] = useState("nguyen");


  const handleAddNewPost = async (event) => {
    if (!title || title === null || title === undefined) {
      console.log("1");
      return;
    }
    if (!content || content === null || content === undefined) {
      console.log("2");
      return;
    }
    const data = {
      userId:Math.floor(Math.random() *100000 ),
      title:title,
      body:content,
    }
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts',data)
    console.log(res)
    if (res && res.data){
      setNewData([res.data,...newData])
    }
    
  };
  const handleDeleteTodo= (id)=> {
    let data = newData
    data = data.filter(item=> item.id !== id)
    setNewData(data)
    console.log(data)
  }
  
  return (
    <div>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#modal"
      >
        Open Modal
      </button>
      <div className="modal  fade" id="modal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h2 className="text-left">Sửa hoặc thêm user</h2>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="email" className="pull-left">
                  Title
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={title}
                  onChange={(e) => setTitles(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd" className="pull-left">
                  Content
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <br />
              </div>
              <div className="checkbox">
                <button
                  className="btn btn-success"
                  data-dismiss="modal"
                  id="btn-creat"
                  onClick={() => handleAddNewPost()}
                >
                  Thêm
                </button>
                <button
                  type="submit"
                  className="btn btn-default"
                  data-dismiss="modal"
                  style={{ marginLeft: "70%" }}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid">
        {loadedData === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="blog col-md-4 col-xs-4" key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                <button className="btn btn-success pull-left">
                  <Link to={`/blog/${item.id}`}>View details</Link>
                </button> <button className="btn btn-primary" onClick={() =>handleDeleteTodo(item.id)}>Delete</button>

              </div>
            );
          })}
        {loadedData === true && <h1>loadedDing...</h1>}
      </div>
    </div>
  );
};
export default Blog;
