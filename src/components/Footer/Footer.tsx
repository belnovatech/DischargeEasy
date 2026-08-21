import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Column 1: Brand & Intro */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            <span className="logo-discharge">Discharge</span>
            <span className="logo-easy">Easy</span>
          </Link>
          <p className="brand-description">
            Healthcare support. Insurance guidance.<br />
            Peace of mind.
          </p>
          <p className="brand-tagline">Real people. Real assistance.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/claim-assistance">Claim Assistance</Link></li>
            <li><Link to="/how-it-works">How It Works</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/why-us">Why Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col">
          <h3 className="footer-col-title">Services</h3>
          <ul className="footer-links">
            <li><Link to="/health-insurance">Health Insurance</Link></li>
            <li><Link to="/term-insurance">Term Insurance</Link></li>
            <li><Link to="/claim-assistance">Claim Assistance</Link></li>
            <li><Link to="/how-it-works">Hospital Assistance</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col contact-col">
          <h3 className="footer-col-title">Contact</h3>
          <ul className="contact-info-list">
            <li>
              <Phone size={16} className="contact-icon" />
              <span>+91 40 6823 4567</span>
            </li>
            <li>
              <Mail size={16} className="contact-icon" />
              <span>support@dischargeeasy.com</span>
            </li>
            <li>
              <MapPin size={16} className="contact-icon" />
              <span>Hyderabad, India</span>
            </li>
          </ul>
          <Link to="/contact" className="footer-cta-link">
            <span>Get Assistance</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright">© 2026 DischargeEasy. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/contact">Terms & Conditions</Link>
            <span className="divider">|</span>
            <Link to="/contact">Insurance Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
