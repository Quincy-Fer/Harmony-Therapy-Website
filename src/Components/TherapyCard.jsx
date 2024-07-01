const TherapyCard = ({title, description, img, alt}) => {
  return <div className="relative">
    <img src={img} alt={alt} />
  </div>;
};

export default TherapyCard;
