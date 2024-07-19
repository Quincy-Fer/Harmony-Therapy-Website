import { THERAPIES } from "../constants";
import TherapyCard from "../Components/TherapyCard";
import { useRef } from "react";

const Therapies = () => {
  const scrollContainerRef = useRef(null);

  // Function to handle the previous button click
  const handlePrevClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  // Function to handle the next button click
  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto md:p-4 lg:p-10" id="therapies">
      <div className="flex  justify-between p-4 ">
        
        {/* SVG DIV */}
        <div className="hidden md:flex gap-10 lg:mt-32 ">
          <p
            className="hidden lg:block font-nunito text-base text-gray-500 tracking-wider leading-loose 
          mt-12 italic"
          >
            Click to see more Therapies
          </p>
          <div
            className="flex bg-white h-20 w-20 rounded-full border hover:cursor-pointer border-green-300
           hover:bg-green-600 transition-all "
            onClick={handlePrevClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" text-green-700 mr-2 hover:text-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div
            className="flex bg-white h-20 w-20 rounded-full border border-green-300
           hover:bg-green-600 hover:cursor-pointer transition-all"
            onClick={handleNextClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20 text-green-700 ml-2 hover:text-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        {/* right text col */}
        <div className=" md:ml-6 ">
          <h2
            className="text-stone-700 text-3xl md:text-[44px] lg:text-[72px] lg:max-w-[780px] font-bold font-quicksand
         leading-tight tracking-tight  md:text-center lg:text-left  "
          >
            Tailored Therapies for Your Needs
          </h2>
          <p
            className="font-nunito text-lg text-gray-500 tracking-wider leading-loose 
          mt-10 "
          >
            Our diverse therapy options are designed to support your mental
            health journey
          </p>
        </div>
      </div>
      {/* Cards */}
      <div
        className="md:flex overflow-x-auto gap-10 hide-scrollbar "
        ref={scrollContainerRef}
      >
        {THERAPIES.map((therapy) => (
          <TherapyCard
            key={therapy.key}
            title={therapy.title}
            description={therapy.description}
            img={therapy.imgURL}
            alt={therapy.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Therapies;
