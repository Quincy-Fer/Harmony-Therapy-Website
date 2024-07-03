import { cta } from "../assets/images";

const FinalCTA = () => {
  return (
    <section className="w-full mt-20 bg-green-400 mx-auto">
      <div className="flex">
        {/* img left */}
        <div className="flex-1 p-10 rounded-3xl my-10">
          <img src={cta} alt="Contact foto" className="rounded-3xl" />
        </div>
        {/* Right col */}
        <div className="flex-1 p-20">
          <h2
            className="text-white text-[60px] max-w-[600px] font-bold font-quicksand
         leading-tight tracking-tight "
          >
            Ready to Take the Next Step?
          </h2>
          <p
            className="font-nunito max-w-[600px] text-lg  text-white tracking-wider leading-loose
          mt-10 "
          >
            We're here to answer your questions and help you start your journey
            to mental wellness. Contact us today to schedule your initial
            consultation.
          </p>
          <button></button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
