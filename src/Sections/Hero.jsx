import Button from "../Components/Button";
import ButtonWhite from "../Components/ButtonWhite";
import { heroL } from "../assets/images";

const Hero = () => {
  return (
    <section className="flex relative max-h-screen justify-center ">
      <img
        src={heroL}
        alt="laughing psychologist with client"
        className="rounded-b-xl object-cover object-top"
      />
      <div class="absolute inset-0 bg-gray-600 opacity-55 rounded-b-xl"></div>
      <div className="absolute flex items-center justify-center top-12 ">
        <h1
          className="text-lime-50 text-[72px] max-w-[780px] font-bold font-quicksand
         leading-tight tracking-tight  text-center"
        >
          Find Your Peace, Embrace Your Wellness.
        </h1>
      </div>
      <div className="absolute flex items-center justify-center top-[450px] gap-4 ">
        <ButtonWhite label="Get in Touch" />
        <Button label="Book Consultation" />
      </div>
    </section>
  );
};

export default Hero;
