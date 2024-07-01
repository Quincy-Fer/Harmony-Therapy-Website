import { about } from "../assets/images";

const About = () => {
  return (
    <section className="max-w-[1440px] py-24 px-12">
      <div className="flex  gap-20">
        <div className="flex-1">
          <h1
            className="p-0   text-stone-800 text-[72px] max-w-[660px] font-bold font-quicksand
         leading-tight tracking-tight "
          >
            Our Mission and Values
          </h1>
          <p className="font-nunito max-w-[600px] text-base text-gray-500 tracking-wider leading-loose mt-10">
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
            comfortable sharing your thoughts and feelings. At [Clinic Name], we
            understand that seeking help is a courageous step. That's why we
            offer flexible scheduling options, including virtual consultations,
            to make accessing care as convenient as possible. Our goal is to
            empower you with the tools and strategies needed to improve your
            mental health and enhance your quality of life.
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
