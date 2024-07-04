import { TEAM } from "../constants";
import TeamCard from "../Components/TeamCard";
import { useState } from "react";

const Team = () => {
  const [selectedContent, setSelectedContent] = useState({
    imgURL: TEAM[0].imgURL,
    text: TEAM[0].text,
    alt: TEAM[0].alt,
  });

  const handleImageClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <section className="max-w-[1440px] mx-auto pt-20" id="team">
      {/* Heading Subheading */}
      <div className="flex flex-col">
        <div className="">
          <h2
            className="text-stone-700 text-[60px]  font-bold font-quicksand
         leading-tight tracking-tight "
          >
            The Harmony Team
          </h2>
          <p
            className="font-nunito max-w-[600px] text-base text-gray-500 tracking-wider leading-loose 
          mt-5 "
          >
            Providing Support and Expertise for Every Step of Your Journey
          </p>
        </div>

        {/* Image and Text */}
        <div className="flex flex-row mt-10">
          <div className="flex-1 ">
            <p
              className="font-nunito max-w-[640px]  text-gray-900 tracking-wide 
          text-balance text-lg"
            >
              {selectedContent.text}
            </p>

            <p
              className="font-nunito max-w-[640px]  text-gray-600 tracking-wide 
          text-balance text-lg italic mt-24"
            >
              Click an image below to learn more about our therapists
            </p>
          </div>
          <div className="flex-1">
            <img
              src={selectedContent.imgURL}
              alt={selectedContent.alt}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
      {/* IMAGES map */}
      <div className="flex justify-start gap-20 mt-10">
        {TEAM.slice(1).map((item) => (
          <TeamCard
            key={item.key}
            imgURL={item.imgURL}
            alt={item.alt}
            onClick={handleImageClick}
            content={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
