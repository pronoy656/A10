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
    <div>
      <h1>This is details page</h1>
      <h1>one coffee:{item}</h1>
      <img src={image} alt="" />
    </div>
  );
};

export default DetailsPage;
