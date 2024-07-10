import logo from "../assets/images/logo-no-bg.png";
import { NAV_LINKS } from "../constants";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal"; // 

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };



  return (
    <nav
      className="flex items-center justify-between px-10  z-30 py-2  max-w-[1440px] mx-auto"
      id="home"
    >
    
      <a href="/">
        <img
          src={logo}
          alt="logo"
          width={150}
          height={100}
          className="rounded-sm"
        />
      </a>
      <ul className="flex justify-end items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="font-quicksand font-medium text-base text-zinc-600 hover:font-bold hover:underline transition-all"
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <Button label="Consultation" onClick={toggleModal} />
      {isModalOpen && <Modal closeModal={toggleModal} />}
    </nav>
    
  );
};

export default NavBar;
