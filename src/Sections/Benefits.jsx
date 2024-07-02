import { BENEFITS } from "../constants";
import BenefitCard from "../Components/BenefitCard";

const Benefits = () => {
  return (
    <section className="max-w-[1440px] border border-green-300 mt-20 mx-auto bg-green-500 rounded-3xl p-10">
      <div className="flex flex-col items-center">
        <h2
          className="text-white text-[60px] max-w-[720px] font-bold font-quicksand
         leading-tight tracking-tight text-center"
        >
          The Harmony Difference.
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {BENEFITS.map((benefit) => (
          <BenefitCard
            key={benefit.key}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
