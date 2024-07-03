import { TESTIMONIALS } from "../constants";
import TestimonialCard from "../Components/TestimonialCard";

const Testimonials = () => {
  return (
    <section
      className="w-full mx-auto border border-green-600 bg-white mt-20 rounded-3xl"
      id="testimonial"
    >
      {/* heading and paragraph */}
      <div className="flex flex-col justify-start p-5">
        <h2
          className="text-stone-700 text-[60px]  font-bold font-quicksand
         leading-tight tracking-tight"
        >
          Hear from Our Clients
        </h2>
        <p
          className="font-nunito max-w-[600px] text-base text-gray-500 tracking-wider leading-loose 
          mt-2"
        >
          Positive Changes, Real Results
        </p>
      </div>

      {/* cards */}
      <div className="">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard
            key={testimonial.key}
            therapy={testimonial.therapy}
            name={testimonial.name}
            quote={testimonial.quote}
            imgURL={testimonial.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
