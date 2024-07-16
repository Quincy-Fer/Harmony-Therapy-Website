import { BENEFITS } from "../constants";
import BenefitCard from "../Components/BenefitCard";

const Benefits = () => {
  return (
    <section className="max-w-[1440px] md:mt-10 lg:mt-20 mx-auto bg-gradient-to-tr from-green-600 via-emerald-400 to-green-400 rounded-3xl p-10">
      <div className="flex flex-col items-center">
        <h2
          className="text-white md:text-[44px] lg:text-[72px] lg:max-w-[780px] font-bold font-quicksand
         leading-tight tracking-tight text-center"
        >
          The Harmony Difference.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
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
