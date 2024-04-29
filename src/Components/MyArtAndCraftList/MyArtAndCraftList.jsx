import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyArtAndCraftList = () => {
  const { user } = useContext(AuthContext);
  const [usersItem, setUsersItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/MyArtAndCrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUsersItem(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-red-600">My Art And Craft List</h1>
      <div className="dropdown flex justify-center">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div>
        {usersItem.map((userItem) => (
          <div key={userItem._id}>
            <img
              className="w-96 h-72 rounded-2xl"
              src={userItem.image}
              alt=""
            />
            <h1>Item:{userItem.item}</h1>
            <h1>Price:{userItem.price}</h1>
            <h1>rating:{userItem.rating}</h1>
            <h1>Customized:{userItem.customize}</h1>
            <h1>Stock-Status:{userItem.stockStatus}</h1>
            <button className="btn btn-primary">Update</button>
            <button className="btn btn-secondary">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
