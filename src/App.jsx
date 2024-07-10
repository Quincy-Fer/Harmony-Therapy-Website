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

const App = () => {
  return (
    <div className="">
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
    </div>
  );
};

export default App;
