import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FeatureList from '../../components/FeatureList/FeatureList';
import Button from '../../components/Button/Button';
import './InsuranceSupport.css';

export const InsuranceSupport: React.FC = () => {
  return (
    <section className="insurance-support-section">
      <div className="container">
        <SectionTitle
          title="Insurance Support That Stays With You When You Need It Most."
          subtitle="Whether you are looking for the right insurance or already facing a hospital claim, DischargeEasy connects you with real human assistance."
          align="center"
        />

        <div className="support-cards-grid grid-2">
          {/* Card 1: Get Insured */}
          <div className="support-card support-card-left">
            <div className="support-card-header">
              <h3 className="support-card-title">Get Insured With Us</h3>
              <p className="support-card-desc">
                Choose Health or Term Insurance with guidance from our team.
              </p>
            </div>
            
            <div className="support-card-body">
              <FeatureList
                items={[
                  'Health Insurance',
                  'Term Insurance',
                  'Policy Guidance',
                  'Personalized Assistance',
                ]}
                columns={1}
              />
            </div>
            
            <div className="support-card-footer">
              <div className="support-card-price-tag">
                <span className="price-label">Includes</span>
                <span className="price-amount text-teal">FREE Claim Assistance</span>
              </div>
              <Link to="/health-insurance" className="support-card-btn-link">
                <Button variant="primary" showArrow={true}>
                  Explore Insurance
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Already Insured */}
          <div className="support-card support-card-right">
            <div className="support-card-header">
              <h3 className="support-card-title">Already Insured?</h3>
              <p className="support-card-desc">
                Your policy doesn't have to be from DischargeEasy. We can still help you navigate the claim process.
              </p>
            </div>
            
            <div className="support-card-body">
              <FeatureList
                items={[
                  'Hospital Assistance',
                  'Claim Documentation',
                  'Insurance Coordination',
                  'Human Support',
                ]}
                columns={1}
              />
            </div>
            
            <div className="support-card-footer">
              <div className="support-card-price-tag">
                <span className="price-label">Only</span>
                <span className="price-amount text-blue">₹999 / Claim</span>
              </div>
              <Link to="/claim-assistance" className="support-card-btn-link">
                <Button variant="outline" showArrow={true}>
                  Get Claim Assistance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSupport;
