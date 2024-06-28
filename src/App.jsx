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
    <>
    <h1 className="">Beep Boop</h1>
    <h1 className="">Beep Boop</h1>
    <h1 className="">Beep Boop</h1>
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
