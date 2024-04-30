import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const updateItem = useLoaderData();
  const {
    _id,
    item,
    image,
    subCategory,
    description,
    price,
    rating,
    customize,
    processTime,
    stockStatus,
  } = updateItem;
  const handleUpdateProduct = (e) => {
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
    };
    console.log(allData);

    // update data from client to server
    fetch(`http://localhost:5000/artAndCrafts/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Item Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl font-semibold">Update:{item}</h1>
        <form onSubmit={handleUpdateProduct}>
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
              <select className="select select-bordered" name="subCategory">
                <option disabled selected>
                  Pick one subcategory
                </option>
                <option value={"Landscape Painting"}>Landscape Painting</option>
                <option value={"Portrait Drawing"}>Portrait Drawing</option>
                <option value={"Watercolor Painting"}>
                  Watercolor Painting
                </option>
                <option value={"Oil Painting"}>Oil Painting</option>
                <option value={"Charcoal Sketching"}>Charcoal Sketching</option>
                <option value={"Cartoon Drawing"}>Cartoon Drawing</option>
              </select>
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
          </div>

          <input
            className="btn w-full mt-6 mb-7"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
