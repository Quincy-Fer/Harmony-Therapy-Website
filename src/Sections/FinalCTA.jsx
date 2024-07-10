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
      <div className="flex">
        {/* img left */}
        <div className="flex-1 p-10 rounded-3xl my-10">
          <img src={cta} alt="Contact foto" className="rounded-3xl" />
        </div>
        {/* Right col */}
        <div className="flex-1 p-20">
          <div className=" ">
            <h2
              className="text-white text-[60px] max-w-[600px] font-bold font-quicksand
         leading-tight tracking-tight "
            >
              Ready to Take the Next Step?
            </h2>
            <p
              className="font-nunito max-w-[600px] text-lg  text-white tracking-wider leading-loose
          mt-10 mb-10 "
            >
              We're here to answer your questions and help you start your
              journey to mental wellness. Contact us today to schedule your
              initial consultation.
            </p>

            <ButtonFinal label="Get Consultation Today" onClick={toggleModal} />
          </div>
        </div>
      </div>
      {isModalOpen && <Modal closeModal={toggleModal} />}
    </section>
  );
};

export default FinalCTA;
