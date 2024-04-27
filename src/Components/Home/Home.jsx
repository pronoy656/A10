import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SingleArtAndCart from "../SingleArtAndCart/SingleArtAndCart";
import ExtraCustomer from "../ExtraCustomer/ExtraCustomer";

const Home = () => {
  const allArtAndCarts = useLoaderData();
  return (
    <div>
      <div className="text-center mb-14 mt-10">
        <p className="mb-3">Welcome Our</p>
        <p className="mb-3">Art & Craft Store</p>
        <p className="mb-3">Be Art & Craft , Be Creative</p>
      </div>
      <Banner></Banner>

      {/* load data and map */}
      <p className="text-center text-3xl font-extrabold mb-6">
        Craft items section
      </p>
      <div className="grid grid-cols-3 gap-x-4 gap-y-4">
        {allArtAndCarts.map((singleArtAndCart) => (
          <SingleArtAndCart
            key={singleArtAndCart._id}
            singleArtAndCart={singleArtAndCart}
          ></SingleArtAndCart>
        ))}
      </div>
      <ExtraCustomer></ExtraCustomer>
    </div>
  );
};

export default Home;
