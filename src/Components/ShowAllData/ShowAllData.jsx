import { Link } from "react-router-dom";

const ShowAllData = ({ singleArtAndCart }) => {
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
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="">
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar w-1/5">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div className="w-1/5">
                  <div className="font-bold">{item}</div>
                  <div className="text-sm opacity-50">{subCategory}</div>
                </div>
              </div>
            </td>
            <td className="font-bold w-1/4">
              {userName}
              <br />
              <span>{email}</span>
            </td>
            <td className="font-bold w-1/6">{price}</td>
            <th className="w-1/6">
              <Link to={`/detailsPage/${_id}`}>
                <button className="btn btn-secondary btn-md">details</button>
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllData;
