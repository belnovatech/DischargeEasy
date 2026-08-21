import React from 'react';
import { Link } from 'react-router-dom';
import FeatureList from '../../components/FeatureList/FeatureList';
import Button from '../../components/Button/Button';
import SectionLabel from '../../components/SectionLabel/SectionLabel';
import './ClaimAssistance.css';
import claimImg from '../../assets/images/claim-assistance.png';

export const ClaimAssistance: React.FC = () => {
  return (
    <section className="claim-assistance-section">
      <div className="container claim-grid-2">
        {/* Left: Image with visual accents */}
        <div className="claim-visual">
          <img 
            src={claimImg} 
            alt="Supportive claim assistance in hospital" 
            className="claim-main-img" 
          />
          <div className="claim-experience-badge">
            <h4 className="badge-num">100%</h4>
            <p className="badge-label">Hassle Free</p>
          </div>
        </div>

        {/* Right: Text & Pricing Info */}
        <div className="claim-details">
          <SectionLabel className="claim-label">Claim Assistance</SectionLabel>
          
          <h2 className="claim-title">
            Hospitalized?<br />
            Don't Handle The<br />
            Insurance Claim Alone.
          </h2>
          
          <p className="claim-description">
            Navigating insurance claims while dealing with health issues is stressful. 
            Our claims assistance experts handle the paperwork and hospital coordination 
            directly, ensuring you have real human support throughout the entire process.
          </p>

          <div className="claim-features-wrapper">
            <FeatureList
              items={[
                'Hospital Coordination',
                'Claim Documentation',
                'Insurance Communication',
                'Follow-Up Assistance',
                'Discharge Documentation',
                'Human Support',
              ]}
              columns={2}
            />
          </div>

          {/* Integrated Pricing Card */}
          <div className="claim-pricing-card">
            <div className="pricing-info">
              <span className="pricing-title">Claim Assistance Service</span>
              <div className="pricing-amount-row">
                <span className="amount">₹999</span>
                <span className="per">/ Per Claim</span>
              </div>
            </div>
            
            <div className="pricing-action">
              <Link to="/contact" className="claim-cta-btn-link">
                <Button variant="secondary" showArrow={true}>
                  Request Claim Assistance
                </Button>
              </Link>
              <p className="claim-pricing-sub">
                Purchased your insurance through DischargeEasy?{' '}
                <span className="bold text-teal">Your claim assistance is FREE.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimAssistance;
