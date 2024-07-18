import ButtonFinal from "../Components/ButtonFinal";
import { cta } from "../assets/images";
import { useState } from "react";
import Modal from "../Components/Modal";

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="w-full mt-20 bg-green-400 mx-auto" id="contact">
      <div className="grid md:grid-cols-2">
        {/* img left */}
        <div className=" p-10 rounded-3xl ">
          <img
            src={cta}
            alt="Contact foto"
            className="rounded-3xl h-full object-cover"
          />
        </div>
        {/* Right col */}
        <div className="p-10">
          <div className="flex flex-col gap-2">
            <h2
              className="text-white md:text-[44px] lg:text-[72px] lg:max-w-[780px] font-bold font-quicksand
         leading-tight tracking-tight "
            >
              Ready to Take the Next Step?
            </h2>
            <p
              className="font-nunito max-w-[600px] text-base  text-white tracking-wider leading-loose
          mt-10 mb-10 "
            >
              We're here to answer your questions and help you start your
              journey to mental wellness. Contact us today to schedule your
              initial consultation.
            </p>

            <ButtonFinal label="Get Consultation " onClick={toggleModal} />
          </div>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={toggleModal} />}
    </section>
  );
};

export default FinalCTA;
