import { useLoaderData } from "react-router-dom";
import ShowAllData from "../ShowAllData/ShowAllData";

const AllArtAndCraftItems = () => {
  const allArtAndCarts = useLoaderData();
  return (
    <div>
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
