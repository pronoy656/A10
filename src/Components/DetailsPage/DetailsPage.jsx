import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const allCardDetails = useLoaderData();
  const { _id } = useParams();
  const convertId = parseInt(_id);
  const singleCardDetails = allCardDetails.find(
    (singleCardDetails) => singleCardDetails._id === convertId
  );
  console.log(singleCardDetails);

  return (
    <div>
      <h1>This is details page</h1>
      <h1>{singleCardDetails}</h1>
    </div>
  );
};

export default DetailsPage;
