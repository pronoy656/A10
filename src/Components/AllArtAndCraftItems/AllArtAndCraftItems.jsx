import { useLoaderData } from "react-router-dom";
import ShowAllData from "../ShowAllData/ShowAllData";

const AllArtAndCraftItems = () => {
  const allArtAndCarts = useLoaderData();
  return (
    <div>
      <h1>All art and craft items page</h1>
      <div className="">
        {allArtAndCarts.map((singleArtAndCart) => (
          <ShowAllData
            key={singleArtAndCart._id}
            singleArtAndCart={singleArtAndCart}
          ></ShowAllData>
        ))}
      </div>
    </div>
  );
};

export default AllArtAndCraftItems;
