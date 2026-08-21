import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, FileText, Check } from 'lucide-react';
import SectionLabel from '../../components/SectionLabel/SectionLabel';
import Button from '../../components/Button/Button';
import './Hero.css';
import heroImg from '../../assets/images/hero.png';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container-grid">
        {/* Left Column: Text Content */}
        <div className="hero-content animate-fade-up">
          <div className="badge-row">
            <SectionLabel>Healthcare Support</SectionLabel>
            <SectionLabel>Insurance Guidance</SectionLabel>
            <SectionLabel>Peace of Mind</SectionLabel>
          </div>
          
          <h1 className="hero-title">
            Be With Your<br />
            Loved Ones.<br />
            We'll Take Care of<br />
            <span className="text-teal">the Rest.</span>
          </h1>
          
          <p className="hero-description">
            When healthcare becomes overwhelming, DischargeEasy provides
            trusted insurance guidance, hospital support and claim assistance
            — so you can focus on what matters most: your loved ones.
          </p>

          <ul className="hero-features">
            <li>
              <span className="hero-check-icon"><Check size={16} strokeWidth={3} /></span>
              <span>Human Healthcare Support</span>
            </li>
            <li>
              <span className="hero-check-icon"><Check size={16} strokeWidth={3} /></span>
              <span>Hospital Claim Assistance</span>
            </li>
            <li>
              <span className="hero-check-icon"><Check size={16} strokeWidth={3} /></span>
              <span>Insurance Guidance</span>
            </li>
          </ul>

          <div className="hero-info-tag">
            Claim assistance is currently available in Hyderabad. Expansion to additional cities is planned.
          </div>

          <div className="btn-group hero-btn-group">
            <Link to="/contact">
              <Button variant="primary" showArrow={true}>
                Get Insurance Assistance
              </Button>
            </Link>
            <Link to="/claim-assistance">
              <Button variant="secondary">
                Get Claim Assistance – ₹999
              </Button>
            </Link>
          </div>

          <p className="hero-subtext">
            Purchased your insurance through DischargeEasy?{' '}
            <span className="bold-text text-teal">Claim assistance is FREE.</span>
          </p>
        </div>

        {/* Right Column: Visuals & Floating Cards */}
        <div className="hero-visual animate-fade-in delay-200">
          <div className="hero-image-wrapper">
            <img 
              src={heroImg} 
              alt="Caring healthcare guidance for Indian family" 
              className="hero-main-img"
            />
            
            {/* Floating Card 1 */}
            <div className="floating-card card-guidance animate-float">
              <div className="floating-icon-wrapper guidance-color">
                <Shield size={20} />
              </div>
              <div>
                <h4 className="floating-title">Expert Guidance</h4>
                <p className="floating-desc">Healthcare Simplified</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="floating-card card-care animate-float-reverse">
              <div className="floating-icon-wrapper care-color">
                <Heart size={20} />
              </div>
              <div>
                <h4 className="floating-title">Compassionate Care</h4>
                <p className="floating-desc">Patient-Focused</p>
              </div>
            </div>

            {/* Floating Card 3 */}
            <div className="floating-card card-assistance animate-float">
              <div className="floating-icon-wrapper assistance-color">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="floating-title">Claim Assistance</h4>
                <p className="floating-desc">Handled With You</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
