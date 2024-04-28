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
      <div className="w-[420px] h-[640px] border space-y-4 p-4 bg-slate-100">
        <img className="w-96 h-72 rounded-2xl" src={image} alt="" />
        <h1 className="text-2xl font-semibold">Title: {item}</h1>
        <h1 className="text-xl font-medium">Subcategory: {subCategory}</h1>
        <div className="flex justify-between">
          <h1 className="text-xl font-medium">Price: {price} BDT</h1>
          <h1 className="text-xl font-medium">Rating:{rating}</h1>
        </div>
        <div className="flex justify-between">
          <h1 className="text-xl font-medium">Stock-status:{stockStatus}</h1>
          <h1 className="text-xl font-medium">Process-time:{processTime}</h1>
        </div>
        <h1 className="text-xl font-medium">Name:{userName}</h1>
        <div className="flex justify-end">
          <Link to={`/detailsPage/${_id}`}>
            {" "}
            <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleArtAndCart;
