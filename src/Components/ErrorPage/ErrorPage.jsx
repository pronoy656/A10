import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl text-red-600 font-semibold mb-10">OOPPSS!!!</h1>
      </div>
      <div className="flex justify-center">
        <img src="https://i.ibb.co/h9p3mg9/6478111.png" alt="" />
      </div>
      <div className="flex justify-center">
        <Link to={"/"}>
          <button className="btn btn-outline">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
