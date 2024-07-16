import Button from "../Components/Button";
import ButtonWhite from "../Components/ButtonWhite";
import { heroL } from "../assets/images";
import { useState } from "react";
import Modal from '../Components/Modal'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="flex relative max-h-screen justify-center w-full ">
      <img
        src={heroL}
        alt="laughing psychologist with client"
        className="rounded-b-xl object-cover object-top"
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
        <Button label="Book Consultation"  onClick={toggleModal} />
      </div>
      {isModalOpen && <Modal closeModal={toggleModal} />}
    </section>
  );
};

export default Hero;
