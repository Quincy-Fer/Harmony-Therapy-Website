const TherapyCard = ({ title, description, img, alt }) => {
  return (
    <div className=" mt-10 md:min-w-[400px] lg:min-w-[500px] bg-white rounded-3xl border-2 shadow-lg z-10 mb-4">
      <img src={img} alt={alt} className="rounded-t-3xl   md:h-[400px] md:w-[500px] object-cover object-top" />

      <div className="p-5">
        <h5 className="mb-2 text-xl font-nunito font-bold tracking-tight text-stone-700 ">
          {title}
        </h5>

        <p className="mb-3 leading-relaxed tracking-wide text-gray-500 ">{description}</p>
      </div>
    </div>
  );
};

export default TherapyCard;
