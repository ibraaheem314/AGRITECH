import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import WhyAgriTech from '../components/WhyAgriTech';
import Footer from '../components/Footer';
import Impact from '../components/Impact';
import Pricing from '../pages/Pricing';

const Home = () => {
  return (
    <div className="bg-[#0B0F0E] text-white">
      <Hero />

      <section id="features" className="pt-20">
        <Features />
      </section>

      <section id="how-it-works" className="pt-20">
        <HowItWorks />
      </section>

      <section id="why" className="pt-20">
        <WhyAgriTech />
      </section>

      <section id="pricing" className="pt-20">
        <Pricing />
      </section>

      <section id="impact" className="pt-20">
        <Impact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
