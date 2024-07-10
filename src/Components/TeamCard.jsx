const TeamCard = ({ imgURL, alt, content, onClick, isSelected }) => {
  return (
    <div
      className="w-[300px] h-[300px] hover:cursor-pointer  rounded-3xl
     "
      onClick={() => onClick(content)}
    >
      <img
        src={imgURL}
        alt={alt}
        className={`${
          isSelected ? "border-green-500 border-4 " : ""
        } h-full w-full bg-cover rounded-3xl hover:scale-110 transition-all object-center
        `}
      />
    </div>
  );
};

export default TeamCard;
