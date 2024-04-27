import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import SingleArtAndCart from "../SingleArtAndCart/SingleArtAndCart";
import ExtraCustomer from "../ExtraCustomer/ExtraCustomer";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const allArtAndCarts = useLoaderData();
  return (
    <div>
      <div className="text-center mb-14 mt-10">
        <p className="mb-3 text-2xl font-medium">Welcome Our</p>
        <p className="mb-3 text-3xl font-normal ">Art & Craft Store</p>
        <h3>
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={[
              "Hello World",
              "Welcome to",
              "React Simple Typewriter",
              "A Simple React Component/Hook for adding a nice Typewriter effect to your project.",
            ]}
          />
        </h3>
        <p className="mb-3 text-4xl font-normal">
          Be Art & Craft ,{" "}
          <span className="text-[#370aa7] font-semibold"> Be Creative</span>
        </p>
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
