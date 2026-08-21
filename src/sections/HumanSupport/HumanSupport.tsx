import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import SectionLabel from '../../components/SectionLabel/SectionLabel';
import FeatureList from '../../components/FeatureList/FeatureList';
import Button from '../../components/Button/Button';
import './HumanSupport.css';
import supportImg from '../../assets/images/human-support.png';

export const HumanSupport: React.FC = () => {
  return (
    <section className="human-support-section">
      <div className="container support-grid-2">
        {/* Left Column: Text Info */}
        <div className="support-details">
          <SectionLabel className="support-badge-label">Human Support</SectionLabel>
          <h2 className="support-main-title">
            We're Not Just<br />
            Another Insurance<br />
            Website.
          </h2>
          <p className="support-desc">
            When you're sitting in a hospital, you don't need another automated app notification or a generic chatbot response. You need an experienced claims advisor who can actually take care of things for you.
          </p>
          <Link to="/contact" className="support-cta-btn">
            <Button variant="primary" showArrow={true}>
              Talk To An Advisor
            </Button>
          </Link>
        </div>

        {/* Right Column: Visual & Floating Info Card */}
        <div className="support-visual">
          <div className="support-image-container">
            <img 
              src={supportImg} 
              alt="DischargeEasy claims guidance advisor" 
              className="support-main-img" 
            />
            
            {/* Floating Support Card */}
            <div className="support-floating-card animate-float">
              <div className="floating-header">
                <span className="phone-icon-box"><PhoneCall size={18} /></span>
                <div>
                  <h4 className="floating-card-title">Your DischargeEasy Team</h4>
                  <p className="floating-card-sub">Assistance Available</p>
                </div>
              </div>
              <div className="floating-card-body">
                <FeatureList
                  items={[
                    'Dedicated Assistance',
                    'Hospital Coordination',
                    'Documentation Guidance',
                    'Human Support',
                  ]}
                  columns={1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanSupport;
