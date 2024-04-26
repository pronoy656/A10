import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SingleArtAndCart from "../SingleArtAndCart/SingleArtAndCart";

const Home = () => {
  const allArtAndCarts = useLoaderData();
  return (
    <div>
      <h1>This is home page</h1>
      <Banner></Banner>

      {/* load data and map */}
      <p className="text-center text-3xl font-extrabold mb-6">
        Craft items section
      </p>
      <div className="grid grid-cols-3 gap-x-4">
        {allArtAndCarts.map((singleArtAndCart) => (
          <SingleArtAndCart
            key={singleArtAndCart._id}
            singleArtAndCart={singleArtAndCart}
          ></SingleArtAndCart>
        ))}
      </div>
    </div>
  );
};

export default Home;
