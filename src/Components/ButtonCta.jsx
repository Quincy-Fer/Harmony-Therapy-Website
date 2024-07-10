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
        className={`py-2 px-8 border border-none font-quicksand hover:underline
           text-green-500 font-bold text-lg  `}
      >
        {label}
      </button>
    );
  };
  
  export default ButtonWhite;
  