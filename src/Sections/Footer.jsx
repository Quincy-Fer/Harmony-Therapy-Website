import { facebook, instagram, twitter, youtube } from "../assets/icons";
import { logoNoBG } from "../assets/images";

const Footer = () => {
  return (
    <footer className="w-full bg-white p-20 " id="footer">
      <div className="flex  justify-between mt-2">
        {/* Logo & Slogan */}
        <div className="flex flex-col ">
          <img src={logoNoBG} alt="Harmony Logo" className="bg-contain w-60" />
          <p
            className="font-quicksand  text-base text-green-700 tracking-wider leading-loose  font-semibold
        "
          >
            Compassionate Care for all.
          </p>
        </div>
        {/* Site Links */}
        <div className="flex flex-col">
          <h6
            className="text-stone-800 text-lg max-w-[600px] font-bold font-quicksand
         leading-tight tracking-tight "
          >
            Company
          </h6>
          <a href="#about">
            <p
              className="font-nunito  text-base text-gray-600 tracking-wider leading-relaxed
         mt-4 cursor-pointer hover:underline"
            >
              About Us
            </p>
          </a>
          <a href="#therapies">
            <p className="font-nunito  text-base text-gray-600 tracking-wider leading-relaxed cursor-pointer hover:underline ">
              Our Therapies
            </p>
          </a>
          <a href="#testimonial">
            <p className="font-nunito  text-base text-gray-600 tracking-wider leading-relaxed cursor-pointer hover:underline">
              What others say
            </p>
          </a>
          <a href="#team">
            <p className="font-nunito  text-base text-gray-600 tracking-wider leading-relaxed cursor-pointer hover:underline ">
              Meet the team
            </p>
          </a>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col">
          <h6
            className="text-stone-800 text-lg max-w-[600px] font-bold font-quicksand
         leading-tight tracking-tight "
          >
            Get in Touch
          </h6>
          <p
            className="font-nunito  text-base text-gray-600 tracking-wider leading-loose 
         mt-4"
          >
            Address: Elysium 1, FlavorTown{" "}
          </p>
          <p
            className="font-nunito  text-base text-gray-600 tracking-wider leading-loose 
        "
          >
            Phone: 123 - 456 - 789
          </p>
          <a href="mailto:harmony@info.com">
            <p
              className="font-nunito  text-base text-gray-600 tracking-wider leading-loose  cursor-pointer hover:underline 
         "
            >
              Email: harmony@info.nl
            </p>
          </a>
        </div>
        {/* Social Link */}
        <div className="">
          <h6
            className="text-stone-800 text-lg max-w-[600px] font-bold font-quicksand
         leading-tight tracking-tight "
          >
            Follow Us
          </h6>
          <div className="flex gap-2 mt-4">
            <a href="https://www.instagram.com/" target="blank">
              <img
                src={instagram}
                alt="instagram"
                width={20}
                className="cursor-pointer "
              />
            </a>
            <a href="https://www.facebook.com/" target="blank">
              <img
                src={facebook}
                alt="instagram"
                width={20}
                className="cursor-pointer"
              />
            </a>
            <a href="https://x.com/" target="blank">
              <img
                src={twitter}
                alt="instagram"
                width={20}
                className="cursor-pointer"
              />
            </a>
            <a href="https://youtube.com/" target="blank">
              <img
                src={youtube}
                alt="instagram"
                width={20}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="border bg-gray-20" />
      <p className=" mt-6 text-gray-500 text-end font-quicksand">
        2024 Harmony | Made by Quincy Fer &#169;
      </p>
    </footer>
  );
};

export default Footer;
