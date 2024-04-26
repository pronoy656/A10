const SingleArtAndCart = ({ singleArtAndCart }) => {
  const {
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
        <button className="btn btn-secondary">View Details</button>
      </div>
    </div>
  );
};

export default SingleArtAndCart;
