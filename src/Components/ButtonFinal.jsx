const ButtonWhite = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`py-2 px-24 font-quicksand hover:underline transition-all
         text-green-500 font-bold text-lg rounded-3xl bg-white  `}
    >
      {label}
    </button>
  );
};

export default ButtonWhite;
