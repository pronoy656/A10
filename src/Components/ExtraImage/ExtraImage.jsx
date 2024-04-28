const ExtraImage = () => {
  return (
    <div className="mt-10 mb-11  md:visible">
      <h1 className="text-center text-3xl font-semibold mb-12">
        Our Popular Collection
      </h1>
      <div className="carousel carousel-end rounded-box ">
        <div className="carousel-item">
          <img
            className="w-[300px] h-[350px]"
            src="https://i.ibb.co/10pVQcg/hand-drawn-ecological-futuristic-building-concepts-generative-ai.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-[300px] h-[350px]"
            src="https://i.ibb.co/PzHW1nV/pottery-craftsperson-studio-creating-ceramics.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-[300px] h-[350px]"
            src="https://i.ibb.co/bvtMskt/yellow-throated-sericornis-sericornis-citreogularis-illustrated-by-elizabeth-gould.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            className="w-[300px] h-[350px]"
            src="https://i.ibb.co/7pgVRh7/top-view-hands-decorating-christmas-gift.jpg"
            alt="Drink"
          />
        </div>
      </div>
    </div>
  );
};

export default ExtraImage;
