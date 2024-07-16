import logo from "../assets/images/logo-no-bg.png";
import { NAV_LINKS } from "../constants";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal"; //
import { close, hamburger } from "../assets/icons";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="flex items-center justify-between px-10  z-30 py-2  w-full mx-auto fixed bg-white"
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
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8">
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
      </div>
      <button className="md:hidden text-2xl" onClick={toggleMenu}>
        <img src={hamburger} alt="hamburger menu" className="w-4" />
      </button>
      {isModalOpen && <Modal closeModal={toggleModal} />}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-40">
          <div className="bg-white p-8 rounded-lg w-11/12 max-w-md">
            <button onClick={toggleMenu} className="text-2xl  mb-4">
              <img src={close} alt="close icon" className="w-4" />
            </button>
            <ul className="flex flex-col items-center gap-4">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.key}
                  className="font-quicksand font-medium text-base text-zinc-600 hover:font-bold hover:underline transition-all"
                >
                  <a href={link.href} onClick={toggleMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4">
                <Button
                  label="Consultation"
                  onClick={() => {
                    toggleModal();
                    toggleMenu();
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
