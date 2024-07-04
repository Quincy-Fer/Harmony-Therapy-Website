import { logoNoBG } from "../assets/images";

const Footer = () => {
  return (
    <footer className="w-full bg-white p-10" id='footer'>
      <div className="flex justify-around">
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
            className="font-nunito  text-base text-gray-600 tracking-wider leading-loose 
         mt-5"
          >
            About Us
          </p>
          <p className="font-nunito  text-base text-gray-600 tracking-wider leading-loose ">
            Our Therapies
          </p>
          <p className="font-nunito  text-base text-gray-600 tracking-wider leading-loose ">
            What others say
          </p>
          <p className="font-nunito  text-base text-gray-600 tracking-wider leading-loose ">
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
         mt-5"
          >
            Address: Elysium 1, FlavorTown{" "}
          </p>
          <p
            className="font-nunito  text-base text-gray-600 tracking-wider leading-loose 
        "
          >
            Phone: 123 - 456 -789
          </p>
          <p
            className="font-nunito  text-base text-gray-600 tracking-wider leading-loose 
         "
          >
            Email: harmony@info.nl
          </p>
        </div>
        {/* Social Link */}
        <div className="flex ">
          <h6
            className="text-stone-800 text-lg max-w-[600px] font-bold font-quicksand
         leading-tight tracking-tight "
          >
            Follow Us
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
