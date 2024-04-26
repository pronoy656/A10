const ShowAllData = ({ singleArtAndCart }) => {
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
    <div className="">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Title</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{item}</div>
                  <div className="text-sm opacity-50">{subCategory}</div>
                </div>
              </div>
            </td>
            <td className="font-bold">
              {userName}
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td className="font-bold">{price}</td>
            <th>
              <button className="btn btn-secondary btn-md">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllData;
