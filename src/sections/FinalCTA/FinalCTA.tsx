import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './FinalCTA.css';

export const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="cta-gradient-card">
          <h2 className="cta-title">
            Your Health Comes First.<br />
            We'll Take Care Of The Insurance.
          </h2>
          
          <p className="cta-description">
            Whether you're looking for the right insurance coverage or need urgent support with an active hospital claim, DischargeEasy is here to guide you at every step.
          </p>

          <div className="btn-group cta-btn-group">
            <Link to="/contact">
              <Button variant="light" showArrow={true}>
                Get Insurance Assistance
              </Button>
            </Link>
            <Link to="/claim-assistance">
              <Button variant="outline" className="btn-cta-outline">
                Get Claim Assistance – ₹999
              </Button>
            </Link>
          </div>

          <p className="cta-footer-text">
            Already purchased your policy through DischargeEasy?{' '}
            <span className="bold-underline">Claim assistance is FREE.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
