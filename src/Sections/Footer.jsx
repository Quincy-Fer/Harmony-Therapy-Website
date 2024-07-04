import { facebook, instagram, twitter, youtube } from "../assets/icons";
import { logoNoBG } from "../assets/images";

const Footer = () => {
  return (
    <footer className="w-full bg-white p-20 " id="footer">
      <div className="flex justify-around mt-10">
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
          <p
            className="font-nunito  text-base text-gray-600 tracking-wider leading-relaxed
         mt-4 cursor-pointer hover:underline"
          >
            About Us
          </p>
          <p className="font-nunito  text-base text-gray-600 tracking-wider leading-relaxed cursor-pointer hover:underline ">
            Our Therapies
          </p>
          <p className="font-nunito  text-base text-gray-600 tracking-wider leading-relaxed cursor-pointer hover:underline">
            What others say
          </p>
          <p className="font-nunito  text-base text-gray-600 tracking-wider leading-relaxed cursor-pointer hover:underline ">
            Meet the team
          </p>
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
          <p
            className="font-nunito  text-base text-gray-600 tracking-wider leading-loose  cursor-pointer hover:underline 
         "
          >
            Email: harmony@info.nl
          </p>
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
            <img src={instagram} alt="instagram" width={20} className="cursor-pointer " />
            <img src={facebook} alt="instagram" width={20} className="cursor-pointer" />
            <img src={twitter} alt="instagram" width={20} className="cursor-pointer" />
            <img src={youtube} alt="instagram" width={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
