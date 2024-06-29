const ButtonWhite = ({label}) => {
    return (
      <button
        type="button"
        className={`py-2 px-8 border border-none font-quicksand hover:underline
         text-lime-50 font-bold text-lg  `}
      >
        {label}
      </button>
    );
  };
  
  export default ButtonWhite;