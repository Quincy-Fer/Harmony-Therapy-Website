import { TESTIMONIALS } from "../constants";
import TestimonialCard from "../Components/TestimonialCard";

const Testimonials = () => {
  return (
    <section
      className="w-full mx-auto  max-h-[1] bg-slate-100  mt-20 rounded-3xl"
      id="testimonial"
    >
      {/* heading and paragraph */}
      <div className="flex flex-col justify-start mx-10">
        <h2
          className="text-stone-700 text-[60px]  font-bold font-quicksand
         leading-tight tracking-tight mt-10"
        >
          What our clients say
        </h2>
        <p
          className="font-nunito max-w-[600px] text-base text-gray-600 tracking-wider leading-loose 
          mt-2"
        >
          Positive Changes, Real Results
        </p>
      </div>

      {/* cards */}
      <div className="mt-2 p-5">
        <div className="columns-sm ml-10  ">
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
      </div>
    </section>
  );
};

export default Testimonials;
