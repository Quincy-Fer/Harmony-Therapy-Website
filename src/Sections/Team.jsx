import { TEAM } from "../constants";
import TeamCard from "../Components/TeamCard";
import { useState } from "react";

const Team = () => {
  const [selectedContent, setSelectedContent] = useState({
    imgURL: TEAM[0].imgURL,
    text: TEAM[0].text,
    alt: TEAM[0].alt,
  });

  const handleImageClick = (content, key) => {
    setSelectedContent(content);
    setSelectedKey(key);
  };

  const [selectedKey, setSelectedKey] = useState(TEAM[0].key);

  return (
    <section className="max-w-[1440px] mx-auto md:p-4 lg:p-10" id="team">
      {/* Heading Subheading */}
      <div className="">
        <h2
          className="text-stone-700 text-[60px]  font-bold font-quicksand
         leading-tight tracking-tight "
        >
          The Harmony Team
        </h2>
        <p
          className="hidden lg:block font-nunito max-w-[600px] text-base text-gray-500 tracking-wider leading-loose 
          mt-5 "

        >
          Providing Support and Expertise for Every Step of Your Journey
        </p>

        {/* Image and Text */}
        <div className="grid lg:grid-cols-2 mt-4 lg:mt-10 ">
          <div className="">
            <p
              className="font-nunito max-w-[640px]  text-gray-900 tracking-wide 
          text-balance text-lg mr-4"
            >
              {selectedContent.text}
            </p>
          </div>
          <div className=" md:mt-4 lg:mt-0 ">
            <img
              src={selectedContent.imgURL}
              alt={selectedContent.alt}
              className="rounded-3xl object-cover object-center max-h-[400px] min-w-[460px] "
            />
          </div>
        </div>
        <p
          className="font-nunito max-w-[640px]  text-gray-600 tracking-wide 
          text-balance text-lg italic mt-5"
        >
          Click an image below to learn more about our therapists
        </p>
      </div>
      {/* IMAGES map */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {TEAM.slice(1).map((item) => (
          <TeamCard
            key={item.key}
            imgURL={item.imgURL}
            alt={item.alt}
            isSelected={selectedKey === item.key}
            onClick={() => handleImageClick(item, item.key)}
            content={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
