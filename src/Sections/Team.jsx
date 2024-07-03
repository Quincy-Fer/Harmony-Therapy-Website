import { TEAM, TEAMHERO } from "../constants";
import TeamCard from "../Components/TeamCard";

const Team = () => {
  return (
    <section className="max-w-[1440px] mx-auto pt-20" id="team">
      {/* Heading Subheading */}
      <div className="flex flex-col">
        <div className="">
          <h2
            className="text-stone-700 text-[60px] max-w-[600px] font-bold font-quicksand
         leading-tight tracking-tight "
          >
            The Harmony Therapy Team
          </h2>
          <p
            className="font-nunito max-w-[600px] text-base text-gray-500 tracking-wider leading-loose 
          mt-10 "
          >
            Providing Support and Expertise for Every Step of Your Journey
          </p>
        </div>

        {/* Image and Text */}
        <div className="flex flex-row mt-10">
          <div className="flex-1  ">
            <p
              className="font-nunito max-w-[640px]  text-gray-900 tracking-wide 
          text-balance text-lg"
            >
              At Harmony Mental Health Clinic, our team is a dedicated group of
              professionals committed to your well-being and mental health.
              Together, we offer a comprehensive range of therapeutic services
              designed to support you on your journey to wellness. We believe in
              a collaborative approach to care, where each member brings their
              unique expertise and perspective to provide holistic support. From
              individual therapy and couples counseling to family sessions and
              adolescent therapy, our team works together to create personalized
              treatment plans that address your specific needs. With empathy,
              compassion, and a commitment to your growth, we strive to create a
              safe and nurturing environment where you can explore challenges,
              develop coping strategies, and achieve positive outcomes. Whatever
              your mental health goals may be, our team is here to support you
              every step of the way.
            </p>

            <p
              className="font-nunito max-w-[640px]  text-gray-600 tracking-wide 
          text-balance text-lg italic mt-20"
            >
              Click an image below to learn more
            </p>
          </div>
          <div className="flex-1">
            <img
              src={TEAMHERO.imgURL}
              alt={TEAMHERO.alt}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
      {/* IMAGES map */}
      <div className="flex justify-start gap-20 mt-5 ">
        {TEAM.map((item) => (
          <TeamCard key={item.key} imgURL={item.imgURL} alt={item.alt} />
        ))}
      </div>
    </section>
  );
};

export default Team;
