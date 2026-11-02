import Navbar from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Offer from './components/Offer';
import About from './components/About';
import Classes from './components/Classes';
import Why from './components/WhyChoose';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className='relative'>
      <Navbar />
      <div id='home'>
        <Hero />
      </div>
      <Brands />
      <Offer />
      <div id='about'>
        <About />
      </div>
      <div id='classes'>
        <Classes />
      </div>
      <Why />
      <div id='schedule'>
        <Schedule />
      </div>
      <div id='pricing'>
        <Pricing />
      </div>
      <Testimonials />
      <div id='faq'>
        <Faq />
      </div>
      <div id='blog'>
        <Blog />
      </div>
      <div id='contact'>
        <Footer />
      </div>
    </div>
  );
}
export default App;
