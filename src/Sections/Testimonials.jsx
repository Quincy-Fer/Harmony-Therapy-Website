import { TESTIMONIALS } from "../constants";
import TestimonialCard from "../Components/TestimonialCard";

const Testimonials = () => {
  return (
    <>
      <section
        className="w-full mx-auto h-[1168px] bg-green-700  mt-20 rounded-3xl overflow-hidden relative "
        id="testimonial"
      >
        {/* heading and paragraph */}
        <div className="flex flex-col justify-start mx-12">
          <h2
            className="text-lime-100 text-3xl md:text-[60px]  font-bold font-quicksand
         leading-tight tracking-tight mt-10"
          >
            What our clients say
          </h2>
          <p
            className="font-nunito max-w-[600px] text-base text-lime-100 italic tracking-wider leading-loose 
          mt-2"
          >
            Positive Changes, Real Results
          </p>
        </div>
        {/* cards */}
        <div className="mt-2 p-5">
          <div className=" md:columns-xs lg:columns-sm mx-auto ">
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
        {/* Gradient on the bottom */}
        
      </section>
    </>
  );
};

export default Testimonials;
