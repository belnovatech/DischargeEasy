import React from 'react';
import { X, Check } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Comparison.css';

export const Comparison: React.FC = () => {
  const withoutItems = [
    'Hospital Admission',
    'Find Policy Documents',
    'Understand Claim Process',
    'Contact Insurance / TPA',
    'Submit Documents',
    'Follow Up',
    'Stress & Anxiety',
  ];

  const withItems = [
    'Hospital Admission',
    'Contact Your DischargeEasy Team',
    'Agent Assistance',
    'Documentation Support',
    'Insurance Coordination',
    'Claim Assistance Support',
    'Focus On Your Loved Ones',
  ];

  return (
    <section className="comparison-section">
      <div className="container">
        <SectionTitle
          title="Without Us vs. With DischargeEasy"
          subtitle="See how having a dedicated partner simplifies your hospital stay and insurance claims."
          align="center"
        />

        <div className="comparison-grid grid-2">
          {/* Card 1: Without */}
          <div className="comparison-card comparison-card-without">
            <div className="comparison-card-header header-without">
              <h3 className="comparison-card-title text-red">Without DischargeEasy</h3>
              <p className="comparison-card-desc">Managing everything on your own during healthcare crises</p>
            </div>
            <ul className="comparison-list">
              {withoutItems.map((item, idx) => (
                <li key={idx} className="comparison-item item-without">
                  <span className="comparison-num">{idx + 1}</span>
                  <span className="comparison-text">{item}</span>
                  <X className="comparison-status-icon text-red" size={18} />
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: With */}
          <div className="comparison-card comparison-card-with">
            <div className="comparison-card-header header-with">
              <h3 className="comparison-card-title text-teal">With DischargeEasy</h3>
              <p className="comparison-card-desc">Real human support assisting you at every step</p>
            </div>
            <ul className="comparison-list">
              {withItems.map((item, idx) => (
                <li key={idx} className="comparison-item item-with">
                  <span className="comparison-num num-teal">{idx + 1}</span>
                  <span className="comparison-text">{item}</span>
                  <Check className="comparison-status-icon text-teal" size={18} strokeWidth={3} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
