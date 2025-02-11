import ButtonCTa from "../Components/ButtonCta";

const CtaLight = () => {
  return (
    <section className="max-w-[1440px] mx-auto mt-20">
      <div className="flex flex-col items-center">
        <h3
          className="text-stone-700 text-3xl md:text-[40px]  font-bold font-quicksand
         leading-tight tracking-tight text-center max-sm:mb-10 "
        >
          Ready to Begin Your Journey?
        </h3>
        <div className="flex gap-4">
          <p
            className="hidden md:block font-nunito  text-base text-gray-500 tracking-wider leading-loose 
          mt-5 mb-10 text-center "
          >
            Contact us now to schedule your initial consultation. Let us help
            you find the path to a happier, healthier life.
          </p>
        </div>

        <ButtonCTa label="Get in Touch!" idButton='footer'/>
      </div>
    </section>
  );
};

export default CtaLight;
