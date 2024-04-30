import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SingleArtAndCart from "../SingleArtAndCart/SingleArtAndCart";
import ExtraCustomer from "../ExtraCustomer/ExtraCustomer";
import { Typewriter } from "react-simple-typewriter";
import ExtraImage from "../ExtraImage/ExtraImage";
import ExtraRate from "../ExtarRate/ExtraRate";
import { useState } from "react";

const Home = () => {
  const allArtAndCarts = useLoaderData();
  // for slice
  const [dataLength, setDataLength] = useState(6);
  return (
    <div>
      <div className="text-center mb-14 mt-10">
        <p className="mb-3 text-2xl font-medium">Welcome Our</p>
        <p className="mb-3 text-3xl font-normal ">Art & Craft Store</p>
        <h3 className="text-4xl font-medium">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              "Be Art & Craft , Be Creative",
              "Mindful Making",
              "Let's Explore The arts",
              ,
            ]}
          />
        </h3>
      </div>
      <Banner></Banner>
      <ExtraRate></ExtraRate>

      {/* load data and map */}
      <p className="text-center text-3xl font-extrabold mb-14 mt-12">
        Our Collection
      </p>
      <div className="grid md:grid-cols-3 gap-x-4 gap-y-4">
        {allArtAndCarts.slice(0, dataLength).map((singleArtAndCart) => (
          <SingleArtAndCart
            key={singleArtAndCart._id}
            singleArtAndCart={singleArtAndCart}
          ></SingleArtAndCart>
        ))}
      </div>
      <Link to={"/allArtAndCraftItems"}>
        <div className="flex justify-center mt-5">
          <button className="btn btn-outline">Show All</button>
        </div>
      </Link>
      <ExtraImage></ExtraImage>
      <ExtraCustomer></ExtraCustomer>
    </div>
  );
};

export default Home;
