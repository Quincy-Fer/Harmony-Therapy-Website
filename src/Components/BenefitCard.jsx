const BenefitCard = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4
     bg-white border border-green-400 rounded-3xl md:p-2 lg:p-5 ">
      <div className="flex flex-row justify-center gap-4 lg:p-5">
        <h4 className="text-green-600 self-center font-quicksand font-semibold text-[28px] mt-5 ">{title} </h4>
        <div className="w-10 h-10 shrink-0 ">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 mt-5  "
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.2287 6.60355C21.6193 6.99407 21.6193 7.62723 21.2287 8.01776L10.2559 18.9906C9.86788 19.3786 9.23962 19.3814 8.84811 18.9969L2.66257 12.9218C2.26855 12.5349 2.26284 11.9017 2.64983 11.5077L3.35054 10.7942C3.73753 10.4002 4.37067 10.3945 4.7647 10.7815L9.53613 15.4677L19.1074 5.89644C19.4979 5.50592 20.1311 5.50591 20.5216 5.89644L21.2287 6.60355Z"
            />
          </svg>
        </div>
      </div>
      <p className="font-nunito text-lg text-gray-500 tracking-wide  
          md:p-2 lg:p-5 text-balance">{description} </p>
    </div>
  );
};

export default BenefitCard;
