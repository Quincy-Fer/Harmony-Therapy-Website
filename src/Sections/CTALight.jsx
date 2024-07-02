import Button from "../Components/Button";

const CtaLight = () => {
  return (
    <section className="max-w-[1440px] mx-auto mt-20">
      <div className="flex flex-col items-center">
        <h3
          className="text-stone-700 text-[40px]  font-bold font-quicksand
         leading-tight tracking-tight"
        >
          Ready to Begin Your Journey?
        </h3>
        <div className="flex gap-4">
          <p
            className="font-nunito  text-base text-gray-500 tracking-wider leading-loose 
          mt-5 mb-10 text-center "
          >
            Contact us now to schedule your initial consultation. Let us help
            you find the path to a happier, healthier life.
          </p>
        </div>
        <Button label="Contact Us" />
      </div>
    </section>
  );
};

export default CtaLight;
