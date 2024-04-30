import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  //   const allCardDetails = useLoaderData();
  //   const { _id } = useParams();
  //   const convertId = parseInt(_id);
  //   const singleCardDetails = allCardDetails.find(
  //     (singleCardDetails) => singleCardDetails._id === convertId
  //   );
  //   console.log(singleCardDetails);
  const detailsOFSingleArtANdCraft = useLoaderData();
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
  } = detailsOFSingleArtANdCraft;

  return (
    <div className="mb-11 mt-20 animate__animated animate__backInLeft">
      <div className="md:flex gap-x-6 justify-center">
        <div className="md:w-[573px] h-[610px] border">
          <img className="h-full w-full" src={image} alt="" />
        </div>
        <div className="md:w-[573px] border space-y-5">
          <h1 className="text-4xl font-bold">Title:{item}</h1>
          <h1 className="text-3xl font-semibold">Subcategory:{subCategory}</h1>
          <h1 className="text-2xl font-sans text-justify">
            Description:{description}
          </h1>
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Price: {price} BDT</h1>
            <h1 className="text-xl font-bold">Rating:{rating}</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Customize: {customize}</h1>
            <h1 className="text-xl font-bold">Process-Time: {processTime}</h1>
          </div>
          <h1 className="text-xl font-bold">Stock-Status: {stockStatus}</h1>
          <h1 className="text-xl font-bold">E-mail: {email}</h1>
          <h1 className="text-xl font-bold">User-Name: {userName}</h1>
          <button className="btn btn-outline w-full mt-11">Back</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
