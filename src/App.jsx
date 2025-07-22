import "./App.css";
import AboutUs from "./Components/AboutUs";
import CursorFollower from "./Components/CursorFollower";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import OurProcess from "./Components/OurProcess";
import OurSpecialization from "./Components/OurSpecialization";
import TechStack from "./Components/TechStack";

function App() {
  return (
    <>
      <CursorFollower />
      <HeroSection />
      <AboutUs />
      <OurProcess />
      <OurSpecialization />
      <TechStack />
      <Footer />
    </>
  );
}

export default App;
