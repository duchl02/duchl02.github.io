import { Link } from "react-router-dom";
const NotFoundError = () => {
  return (
    <>
      <h1 className='text-center'>Page not found</h1>
      <button className="btn ">
        <Link to={'/'}>Go to Home</Link>
      </button>
    </>
  );
};
export default NotFoundError;
