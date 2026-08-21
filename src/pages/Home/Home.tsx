import React from 'react';
import Hero from '../../sections/Hero/Hero';
import InsuranceSupport from '../../sections/InsuranceSupport/InsuranceSupport';
import AssistanceProcess from '../../sections/AssistanceProcess/AssistanceProcess';
import Comparison from '../../sections/Comparison/Comparison';
import InsuranceProducts from '../../sections/InsuranceProducts/InsuranceProducts';
import ClaimAssistance from '../../sections/ClaimAssistance/ClaimAssistance';
import Pricing from '../../sections/Pricing/Pricing';
import WhyUs from '../../sections/WhyUs/WhyUs';
import HumanSupport from '../../sections/HumanSupport/HumanSupport';
import HowItWorks from '../../sections/HowItWorks/HowItWorks';
import Trust from '../../sections/Trust/Trust';
import Testimonials from '../../sections/Testimonials/Testimonials';
import FAQ from '../../sections/FAQ/FAQ';
import FinalCTA from '../../sections/FinalCTA/FinalCTA';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home-page animate-fade-in">
      <Hero />
      <InsuranceSupport />
      <AssistanceProcess />
      <Comparison />
      <InsuranceProducts />
      <ClaimAssistance />
      <Pricing />
      <WhyUs />
      <HumanSupport />
      <HowItWorks />
      <Trust />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Home;
