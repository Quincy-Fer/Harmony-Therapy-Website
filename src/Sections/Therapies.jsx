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
