import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import FeatureList from '../../components/FeatureList/FeatureList';
import Button from '../../components/Button/Button';
import './InsuranceProducts.css';
import healthImg from '../../assets/images/health-insurance.png';
import termImg from '../../assets/images/term-insurance.png';

export const InsuranceProducts: React.FC = () => {
  return (
    <section className="insurance-products-section">
      <div className="container">
        <SectionTitle
          title="Protect What Matters Before Life Gets Unexpected."
          subtitle="Choose the protection that fits your family's needs."
          align="center"
        />

        <div className="products-grid grid-2">
          {/* Product Card 1: Health */}
          <div className="product-card">
            <div className="product-image-container">
              <img src={healthImg} alt="Health Insurance Protection" className="product-img" />
              <div className="product-badge badge-health">Health</div>
            </div>
            
            <div className="product-info">
              <h3 className="product-title">Health Insurance</h3>
              <p className="product-desc">
                Prepare for unexpected medical expenses with the right health insurance protection.
              </p>
              
              <div className="product-features">
                <FeatureList
                  items={[
                    'Hospitalization Coverage',
                    'Family Protection',
                    'Policy Guidance',
                    'Claim Assistance',
                  ]}
                  columns={2}
                />
              </div>

              <div className="product-action">
                <Link to="/health-insurance" className="product-btn-link">
                  <Button variant="primary" showArrow={true}>
                    Explore Health Insurance
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Product Card 2: Term */}
          <div className="product-card">
            <div className="product-image-container">
              <img src={termImg} alt="Term Insurance Security" className="product-img" />
              <div className="product-badge badge-term">Term</div>
            </div>
            
            <div className="product-info">
              <h3 className="product-title">Term Insurance</h3>
              <p className="product-desc">
                Protect your family's financial future with the right term insurance plan.
              </p>
              
              <div className="product-features">
                <FeatureList
                  items={[
                    'Financial Protection',
                    'Family Security',
                    'Policy Guidance',
                    'Personalized Assistance',
                  ]}
                  columns={2}
                />
              </div>

              <div className="product-action">
                <Link to="/term-insurance" className="product-btn-link">
                  <Button variant="primary" showArrow={true}>
                    Explore Term Insurance
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceProducts;
