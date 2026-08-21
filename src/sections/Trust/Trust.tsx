import React from 'react';
import { Heart, Activity, ShieldCheck, HeartHandshake } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Trust.css';

export const Trust: React.FC = () => {
  const cards = [
    { icon: <Heart size={20} />, title: 'Human-Centered Assistance' },
    { icon: <Activity size={20} />, title: 'Hospital Support' },
    { icon: <ShieldCheck size={20} />, title: 'Insurance Guidance' },
    { icon: <HeartHandshake size={20} />, title: 'Personalized Service' },
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <SectionTitle
          title="Built Around Trust, Care & Human Support."
          subtitle="Our foundation is built on years of hands-on healthcare expertise and a commitment to patient wellbeing."
          align="center"
        />

        <div className="trust-grid">
          {/* Large Gradient Card */}
          <div className="trust-lead-card">
            <h3 className="expertise-num">17+</h3>
            <p className="expertise-text">
              Years of healthcare industry expertise behind our dedicated assistance team.
            </p>
          </div>

          {/* Supporting Grid */}
          <div className="trust-supporting-grid">
            {cards.map((card, idx) => (
              <div key={idx} className="trust-mini-card">
                <div className="trust-mini-icon">{card.icon}</div>
                <h4 className="trust-mini-title">{card.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
