const TeamCard = ({ imgURL, alt, content, onClick }) => {
  return (
    <div className="w-[300px] h-[300px] hover:cursor-pointer overflow-hidden rounded-3xl"
    onClick={() => onClick(content)}>
      <img
        src={imgURL}
        alt={alt}
        className="h-full w-full bg-cover rounded-3xl hover:scale-110 transition-all object-center"
      />
    </div>
  );
};

export default TeamCard;
