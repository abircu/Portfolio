import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/features";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/footer";
import FooterBottom from "./components/footer/FooterBottom";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto lgl:px-16 md:px-10 px-4">
        <Banner />
        <Features />
        <Project />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
