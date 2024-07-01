import { about } from "../assets/images";

const About = () => {
  return (
    <section className="max-w-[1440px]">
      <div className="flex">
        <div className="flex-1">  
          <h1>Our Mission and Values</h1>
          <p>
            Harmony Mental Health Clinic is committed to fostering mental
            wellness in our community. Our team of experienced and caring
            professionals is here to support you through every step of your
            mental health journey. We believe in treating each person with
            respect, empathy, and understanding, ensuring that you feel heard
            and valued.
          </p>
        </div>
        <div className="flex-1">
          <img src={about} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
