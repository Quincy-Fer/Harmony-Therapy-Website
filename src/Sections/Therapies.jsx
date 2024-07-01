import { THERAPIES } from "../constants";
import TherapyCard from "../Components/TherapyCard";
import { chevronLeft, chevronRight, quotes } from "../assets/icons";

const Therapies = () => {
  return (
    <section className="max-w-[1440px] mx-auto pt-20" id="therapies">
      <div className="flex justify-center gap-48">
        <div className="flex flex-col items-center">
          <h2
            className="text-stone-700 text-[60px] max-w-[720px] font-bold font-quicksand
         leading-tight tracking-tight text-center"
          >
            Tailored Therapies for Your Needs
          </h2>
          <p
            className="font-nunito max-w-[500px] text-base text-gray-500 tracking-wider leading-loose 
          mt-10 text-center "
          >
            Our diverse therapy options are designed to support your mental
            health journey:
          </p>
        </div>
        {/* SVG DIV */}
        <div className="flex flex-row gap-10 mt-44">
          <div className="flex bg-white h-20 w-20 rounded-full hover:bg-green-600 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20 text-green-700 mr-2 hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="flex bg-white h-20 w-20 rounded-full hover:bg-green-600 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-20 text-green-700 ml-2 hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="flex overflow-x-auto gap-10 hide-scrollbar">
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
