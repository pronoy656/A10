import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const MyArtAndCraftList = () => {
  const { user } = useContext(AuthContext);
  const [usersItem, setUsersItem] = useState([]);
  const [filter, setFilter] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/MyArtAndCrafts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUsersItem(data);
        setFilter(data);
      });
  }, [user, control]);

  // job filter
  const handleJobFilter = (filter) => {
    if (filter === "all") {
      setFilter(data);
    } else if (filter === "Yes") {
      const customizeYes = data.filter((dot) => dot.customize === "Yes");
      setFilter(customizeYes);
    } else if (filter === "No") {
      const customizeNo = data.filter((dot) => dot.customize === "No");
      setFilter(customizeNo);
    }
  };

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

            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
            fetch(`http://localhost:5000/MyArtAndCrafts/${user?.email}`)
              .then((res) => res.json())
              .then((d) => {
                // setUsersItem(d);
                setFilter(d);
              });
          });
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
          <li onClick={() => handleJobFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobFilter("Yes")}>
            <a>Yes</a>
          </li>
          <li onClick={() => handleJobFilter("No")}>
            <a>No</a>
          </li>
        </ul>
      </div>
      <div className="grid md:grid-cols-3 mt-20">
        {filter.map((userItem) => (
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
            <div className="flex gap-x-10">
              <Link to={`/update/${userItem._id}`}>
                <button className="btn bg-green-700 text-2xl">
                  <MdEdit />
                </button>
              </Link>
              <button
                onClick={() => handleDelete(userItem._id)}
                className="btn bg-red-700 text-2xl text-white"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
