import { data } from "autoprefixer";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddCraftItem = () => {
  const { user } = useContext(AuthContext);
  const handleAddProduct = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const item = e.target.item.value;
    const subCategory = e.target.subCategory.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customize = e.target.customize.value;
    const processTime = e.target.processTime.value;
    const stockStatus = e.target.stockStatus.value;
    const email = e.target.email.value;
    const userName = e.target.userName.value;
    const allData = {
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
    };
    console.log(allData);

    // sent data from client to server
    fetch("http://localhost:5000/artAndCrafts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Item Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1>Add craft item form page</h1>
      <form onSubmit={handleAddProduct}>
        <div className="flex gap-x-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Image URL</span>
            </div>
            <input
              type="text"
              name="image"
              placeholder="use image URL"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Item-name</span>
            </div>
            <input
              type="text"
              name="item"
              placeholder="item-name"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
        </div>
        <div className="flex gap-x-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Subcategory-Name</span>
            </div>
            <input
              type="text"
              name="subCategory"
              placeholder="subcategory-Name"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Short description</span>
            </div>
            <input
              type="text"
              name="description"
              placeholder="short-description"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
        </div>
        <div className="flex gap-x-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="text"
              name="price"
              placeholder="price"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input
              type="text"
              name="rating"
              placeholder="rating"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
        </div>
        <div className="flex gap-x-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Customization-example-</span>
            </div>
            <input
              type="text"
              name="customize"
              placeholder="customization-example-"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Processing-time</span>
            </div>
            <input
              type="text"
              name="processTime"
              placeholder="processing-time"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
        </div>
        <div className="flex gap-x-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">stock-Status</span>
            </div>
            <input
              type="text"
              name="stockStatus"
              placeholder="stock-Status"
              className="input input-bordered w-full max-w-xs"
              required
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">User-Email</span>
            </div>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="User-Email"
              className="input input-bordered w-full max-w-xs"
              readOnly
            />
          </label>
        </div>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">User-Name</span>
          </div>
          <input
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            placeholder="User-Name"
            className="input input-bordered w-full max-w-xs"
            required
          />
        </label>
        <input
          className="btn w-full mt-6 mb-7"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddCraftItem;
