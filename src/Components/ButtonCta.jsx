const ButtonWhite = ({ label, idButton }) => {
    const handleClick = () => {
      const targetElement = document.getElementById(idButton);
  
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
        ;
      }
    };
  
    return (
      <button
        onClick={handleClick}
        type="button"
        className={`py-2 px-8 border rounded-full font-quicksand bg-green-700
       text-white font-semibold text-lg hover:bg-green-600 transition-all  `}
      >
        {label}
      </button>
    );
  };
  
  export default ButtonWhite;
  