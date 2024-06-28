import {
  About,
  Benefits,
  CTALight,
  FinalCTA,
  Hero,
  Team,
  Testimonials,
  Therapies,
  Footer,
} from "./Sections";

import NavBar from "./Components/NavBar";

import { testimonialIndividualMan1 } from "./assets/images";


const App = () => {
  return (
    <>
     <img src={testimonialIndividualMan1} alt="" />
      <NavBar />
      <Hero />
      <About />
      <Therapies />
      <Benefits />
      <CTALight />
      <Testimonials />
      <Team />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default App;
