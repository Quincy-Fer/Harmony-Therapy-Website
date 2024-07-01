import { THERAPIES } from "../constants";
import TherapyCard from "../Components/TherapyCard";
import { chevronLeft, chevronRight, quotes } from "../assets/icons";

const Therapies = () => {
  return (
    <section className="max-w-[1440px] mx-auto pt-20" id="therapies">
      <div className="flex justify-start gap-48">
        <div className="flex flex-col ">
          <h2
            className="text-stone-700 text-[60px] max-w-[720px] font-bold font-quicksand
         leading-tight tracking-tight"
          >
            Tailored Therapies for Your Needs
          </h2>
          <p
            className="font-nunito max-w-[500px] text-base text-gray-500 tracking-wider leading-loose 
          mt-10  "
          >
            Our diverse therapy options are designed to support your mental
            health journey:
          </p>
        </div>
        <div className="flex gap-8 mt-8">
          <div className="flex h-20 w-20  bg-white rounded-full border-2  hover:bg-green-600 transition-all  ">
            <img
              src={chevronLeft}
              alt="button left scroll"
              className=" object-contain w-12 ml-2"
            />
          </div>
          <div className="flex h-20 w-20  bg-white  rounded-full border-2 hover:bg-green-600 transition-all    ">
            <img
              src={chevronRight}
              alt="button left scroll"
              className=" object-contain w-12 ml-4"
            />
          </div>
        </div>
      </div>
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
