import "./AddNewBlog.scss";
import { useState } from "react";

const AddNewBlog = () => {
  const [show,setShow] = useState(false);
  const [title, setTitles] = useState("");
  const [content, setContent] = useState("");
  const handleClick = (event)=> {
    event.preventDefault();
    if (!title || title === null || title === undefined){
      console.log("1")
      return;
    }
    if (!content || content === null || content === undefined){
      console.log("2")
      return;
    }
  }
  return (
    <>
      <div className="container contaiform">
        <form onSubmit={handleClick}>
          <div className="form-group">
            <label className="pull-left">Title:</label>
            <input
              type="text"
              className=" form-control"
              placeholder="Enter Title"
              autoComplete="on"
              value={title}
              onChange={(e) => setTitles(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="pull-left">Content:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Content"
              autoComplete="on"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button className="btn pull-right btn-default"
          type="submit">Post</button>
        </form>
      </div>
    </>
  );
};
export default AddNewBlog;
