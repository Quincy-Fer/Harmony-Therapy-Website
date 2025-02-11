const TeamCard = ({ imgURL, alt, content, onClick, isSelected }) => {
  return (
    <div
      className="md:max-lg:w-[300px] md:max-lg:h-[300px] hover:cursor-pointer  rounded-3xl
     "
      onClick={() => onClick(content)}
    >
      <img
        src={imgURL}
        alt={alt}
        className={`${
          isSelected ? "border-green-500 border-4 " : ""
        } h-full w-full bg-cover rounded-3xl hover:scale-105 transition-all object-center
        `}
      />
    </div>
  );
};

export default TeamCard;
