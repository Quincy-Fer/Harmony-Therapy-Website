const ButtonWhite = ({label}) => {
    return (
      <button
        type="button"
        className={`py-2 px-24 border-2 border-white font-quicksand hover:underline transition-all
         text-lime-50 font-bold text-lg rounded-3xl `}
      >
        {label}
      </button>
    );
  };
  
  export default ButtonWhite;