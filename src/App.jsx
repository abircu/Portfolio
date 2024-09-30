import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/features";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto px-16">
        <Banner />
        <Features />
        <Project />
        <Resume />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
