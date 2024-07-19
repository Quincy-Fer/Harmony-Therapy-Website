const ButtonWhite = ({ label, idButton, color }) => {
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
           text-green-800 font-bold text-lg`}
      >
        {label}
      </button>
    );
  };
  
  export default ButtonWhite;
  