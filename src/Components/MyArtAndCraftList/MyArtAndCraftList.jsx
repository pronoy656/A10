import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";

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

  // Delete Operation
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You wan't to delete this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/artAndCrafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        if (data.deleteCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="dropdown flex justify-center mt-7">
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
      <div className="grid md:grid-cols-3 mt-20">
        {usersItem.map((userItem) => (
          <div
            className="border rounded-2xl w-[420px] h-[640px] space-y-5 p-4 "
            key={userItem._id}
          >
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
            <div className="flex gap-x-7">
              <Link to={`/update/${userItem._id}`}>
                <button className="btn btn-primary">Update</button>
              </Link>
              <button
                onClick={() => handleDelete(userItem._id)}
                className="btn btn-secondary"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
