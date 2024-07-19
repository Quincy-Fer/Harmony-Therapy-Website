import { quotes } from "../assets/icons";

const TestimonialCard = ({ name, quote, imgURL, therapy }) => {
  return (
    <div className="max-w-[440px] mb-4 h-full border bg-lime-50 rounded-3xl shadow-green-900 shadow-lg break-inside-avoid">
      <div className="ml-6 mt-4 flex w-full ">
        <svg
          className="w-10 text-green-700 "
          fill="#15803d "
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>
        </svg>
        <h6 className="text-xl md:text-[28px] font-quicksand font-bold tracking-normal text-stone-700 ">
          {therapy}
        </h6>
      </div>
      <div className="p-2 ">
        <p className="font-nunito  text-lg text-gray-500 
           p-5 text-balance">{quote}</p>
      </div>
      <div className="flex ">
        <div className="ml-6 mb-4">
          <img
            src={imgURL}
            alt="portrait of therapy person"
            className="h-16 w-16 rounded-full object-cover object-center"
          />
        </div>
        <p className="font-quicksand  text-lg text-gray-900 font-bold 
           p-4 text-balance">{name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
