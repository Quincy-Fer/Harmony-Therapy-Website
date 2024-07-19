import { about } from "../assets/images";

const About = () => {
  return (
    <section className="max-w-[1440px] md:p-4 lg:p-10  mx-auto" id="about">
      <div className=" grid lg:grid-cols-2 lg:gap-20 ">
        <div className="justify-self-center">
          <h2
            className="text-stone-700 md:text-[44px] lg:text-[72px] lg:max-w-[780px] font-bold font-quicksand
         leading-tight tracking-tight text-center lg:text-left "
          >
            Our Mission and Values
          </h2>
          <p
            className="font-nunito p-4 lg:p-0 text-balance text-base text-gray-500 tracking-wider leading-loose 
          lg:mt-10 md:max-w-[720px]  "
          >
            At Harmony, we are dedicated to providing compassionate,
            comprehensive mental health care. Our team of experienced
            professionals offers a wide range of services tailored to meet the
            unique needs of each individual. Whether you're dealing with
            anxiety, depression, stress, or other mental health challenges,
            we're here to support you on your journey to wellness. We believe in
            a holistic approach to mental health, combining evidence-based
            treatments with personalized care. Our therapists, counselors, and
            psychiatrists work collaboratively to develop treatment plans that
            address the root causes of your concerns, not just the symptoms. We
            strive to create a safe, welcoming environment where you can feel
            comfortable sharing your thoughts and feelings. At Harmony, we
            understand that seeking help is a courageous step. That's why we
            offer flexible scheduling options, including virtual consultations,
            to make accessing care as convenient as possible. Our goal is to
            empower you with the tools and strategies needed to improve your
            mental health and enhance your quality of life.
          </p>
        </div>
        <div className="flex justify-center md:h-[400px] ">
          <img
            src={about}
            alt="woman consulting a couple"
            className="hidden md:block rounded-3xl md:w-[700px] lg:h-[700px] lg:w-[800px] mt-4 object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
