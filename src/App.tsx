import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import HealthInsurance from './pages/HealthInsurance/HealthInsurance';
import TermInsurance from './pages/TermInsurance/TermInsurance';
import ClaimAssistance from './pages/ClaimAssistance/ClaimAssistance';
import ReimbursementAssistance from './pages/ReimbursementAssistance/ReimbursementAssistance';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import AboutUs from './pages/AboutUs/AboutUs';
import WhyUs from './pages/WhyUs/WhyUs';
import Contact from './pages/Contact/Contact';
import HospitalAssistance from './pages/HospitalAssistance/HospitalAssistance';
import './App.css';
import FAQ from './pages/FAQ/FAQ';
import TalkToAdvisor from './pages/TalkToAdvisor/TalkToAdvisor';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import InsuranceDisclaimer from './pages/InsuranceDisclaimer/InsuranceDisclaimer';
// Scroll to top helper component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/health-insurance" element={<HealthInsurance />} />
            <Route path="/term-insurance" element={<TermInsurance />} />
            <Route path="/claim-assistance" element={<ClaimAssistance />} />
            <Route
  path="/faq"
  element={<FAQ />}
/>
<Route
  path="/privacy-policy"
  element={<PrivacyPolicy />}
/>

<Route
  path="/terms-and-conditions"
  element={<TermsAndConditions />}
/>

<Route
  path="/insurance-disclaimer"
  element={<InsuranceDisclaimer />}
/>
<Route
  path="/talk-to-advisor"
  element={<TalkToAdvisor />}
/>
                  <Route
        path="/reimbursement-assistance"
        element={<ReimbursementAssistance />}
      />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hospital-assistance" element={<HospitalAssistance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
