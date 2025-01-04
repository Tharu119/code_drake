import Services from "@/sections/Services";
import About from "@/sections/About";
import Testimonials from "@/sections/Testimonials";
import Portfolio from "@/sections/Portfolio";
import Contact from "@/sections/Contact";
import HomeSection from "@/sections/Home";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}
