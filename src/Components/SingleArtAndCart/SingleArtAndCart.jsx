import { Link } from "react-router-dom";

const SingleArtAndCart = ({ singleArtAndCart }) => {
  const {
    _id,
    image,
    item,
    subCategory,
    description,
    price,
    rating,
    customize,
    processTime,
    stockStatus,
    email,
    userName,
  } = singleArtAndCart;

  return (
    <div>
      <div className="w-96 border">
        <img className="w-96 h-72" src={image} alt="" />
        <h1>Title:{item}</h1>
        <h1>Subcategory:{subCategory}</h1>
        <div className="flex justify-between">
          <h1>Price:{price}</h1>
          <h1>Rating:{rating}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Stock-status:{stockStatus}</h1>
          <h1>Process-time:{processTime}</h1>
        </div>
        <h1>Name:{userName}</h1>
        <div className="flex justify-end">
          <Link to={`/detailsPage/${_id}`}>
            {" "}
            <button className="btn btn-secondary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleArtAndCart;
