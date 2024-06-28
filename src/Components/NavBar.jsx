import logo from "../assets/images/logo-no-bg.png";
import { NAV_LINKS } from "../constants";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav
      className="flex items-center justify-between px-10  z-30 py-2  w-full mx-auto"
      id="home"
    >
      <a href="/">
        <img
          src={logo}
          alt="logo"
          width={200}
          height={100}
          className="rounded-sm"
        />
      </a>
      <ul className="flex justify-end items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className="font-quicksand font-medium text-lg text-zinc-600 hover:font-bold transition-all"
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <Button />
    </nav>
  );
};

export default NavBar;
