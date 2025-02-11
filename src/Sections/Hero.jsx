import Button from "../Components/Button";
import ButtonWhite from "../Components/ButtonWhite";
import { heroL, mobileHero } from "../assets/images";
import { useState } from "react";
import Modal from "../Components/Modal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="">
      {/* Mobile View */}
      <div className="flex flex-col justify-items-center md:hidden p-5">
        <h1
          className="text-4xl mt-24 font-quicksand font-bold text-green-950 
          leading-tight tracking-tight max-w-[350px]"
        >
          Find Your Peace, Embrace Your Wellness.
        </h1>
        <p className="text-gray-500 mt-10 text-base">
          We're here to support your journey towards
          mental well-being.
        </p>
        <div className="grid mt-20">
          <Button label="Book Consultation" onClick={toggleModal} />{" "}
          
          {isModalOpen && <Modal closeModal={toggleModal} />}

        </div>
        <img
          src={mobileHero}
          alt="laughing girl"
          className=" rounded-3xl h-80 object-cover object-center mt-10 mb-5"
        />
      </div>

      {/* tablet and up view */}
      <div className="hidden md:flex relative max-h-screen justify-center w-full">
        <img
          src={heroL}
          alt="laughing psychologist with client"
          className="rounded-b-xl lg:object-cover lg:object-top md:max-lg:mt-10 md:max-lg:aspect-[16/12]"
        />
        <div className="absolute inset-0 bg-gray-600 opacity-65 rounded-b-xl"></div>
        {/* Heading */}
        <div className="absolute flex items-center justify-center mt-40">
          <h1
            className="text-lime-50 md:text-[44px] md:max-w-[460px] lg:text-[72px] lg:max-w-[780px] font-bold font-quicksand
         leading-tight tracking-tight  text-center"
          >
            Find Your Peace, Embrace Your Wellness.
          </h1>
        </div>
        {/* CTA's  */}
        <div className="absolute flex items-center justify-center md:top-[380px] lg:top-[500px] gap-20 ">
          <ButtonWhite label="Get in Contact" idButton="footer" />
          <Button label="Book Consultation" onClick={toggleModal} />
        </div>
        {isModalOpen && <Modal closeModal={toggleModal} />}
      </div>
    </section>
  );
};

export default Hero;
