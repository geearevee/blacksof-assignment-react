import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
