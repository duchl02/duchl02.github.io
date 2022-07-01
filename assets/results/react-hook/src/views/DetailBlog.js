import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
const DetailBlog = () => {
    let history = useHistory()
    let {id} = useParams()
    const handleBack= () => {
      history.push("/blog")
    }
    const {
      data: dataBlock,
      loadedData,
    } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(dataBlock.id);
  return (
    <>
    { dataBlock && 
                <div className="container " key={dataBlock.id}>
                    <h1>id: {id} {loadedData === true ? "loading..." : dataBlock.title}</h1>
                    <p>{dataBlock.body}</p>
                </div>
            }
    <button className="btn btn-success" onClick={() => handleBack()}>Back</button>
    </>
  );
};
export default DetailBlog;
