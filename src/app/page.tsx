import Services from '@/sections/Services';
import About from '@/sections/About';
import Testimonials from '@/sections/Testimonials';
import Portfolio from '@/sections/Portfolio';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <div>
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}
