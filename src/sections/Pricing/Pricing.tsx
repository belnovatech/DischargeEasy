import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FeatureList from '../../components/FeatureList/FeatureList';
import Button from '../../components/Button/Button';
import './Pricing.css';

export const Pricing: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <SectionTitle
          title="Simple, Transparent Pricing."
          subtitle="One clear difference: where your policy came from."
          align="center"
        />

        <div className="pricing-cards-grid grid-2">
          {/* Card 1: DischargeEasy policy */}
          <div className="pricing-card pricing-card-free">
            <div className="pricing-card-header">
              <span className="pricing-badge badge-teal">Recommended</span>
              <h3 className="pricing-card-title">Policy from DischargeEasy</h3>
              <p className="pricing-card-desc">If you purchased your insurance through our platform</p>
              
              <div className="pricing-price-box">
                <span className="price-amount text-teal">FREE</span>
                <span className="price-period">Claim assistance included</span>
              </div>
            </div>

            <div className="pricing-card-body">
              <FeatureList
                items={[
                  'Hospital Assistance Coordination',
                  'Complete Claim Documentation support',
                  'Dedicated claims assistant',
                  'Direct TPA & Insurance coordination',
                ]}
                columns={1}
              />
            </div>

            <div className="pricing-card-footer">
              <Link to="/contact" className="pricing-btn-link">
                <Button variant="secondary" showArrow={true}>
                  Get Insurance Support
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: External policy */}
          <div className="pricing-card pricing-card-paid">
            <div className="pricing-card-header">
              <span className="pricing-badge badge-blue">External Policy</span>
              <h3 className="pricing-card-title">Policy from Elsewhere</h3>
              <p className="pricing-card-desc">If you purchased your insurance through other channels</p>
              
              <div className="pricing-price-box">
                <span className="price-amount text-blue">₹999</span>
                <span className="price-period">Per hospital claim</span>
              </div>
            </div>

            <div className="pricing-card-body">
              <FeatureList
                items={[
                  'Hospital Assistance Coordination',
                  'Complete Claim Documentation support',
                  'Dedicated claims assistant',
                  'Direct TPA & Insurance coordination',
                ]}
                columns={1}
              />
            </div>

            <div className="pricing-card-footer">
              <Link to="/claim-assistance" className="pricing-btn-link">
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

export default Pricing;
