import React from 'react';
import { Users, Hospital, ShieldCheck, Heart } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './WhyUs.css';

interface WhyUsItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export const WhyUs: React.FC = () => {
  const items: WhyUsItem[] = [
    {
      icon: <Users size={28} className="why-icon" />,
      title: 'Human Support',
      desc: "Talk to real people who understand what you're going through, rather than chatbots.",
    },
    {
      icon: <Hospital size={28} className="why-icon" />,
      title: 'Hospital Assistance',
      desc: 'Get hands-on support when you need to navigate hospital admissions, rooms, and billing.',
    },
    {
      icon: <ShieldCheck size={28} className="why-icon" />,
      title: 'Insurance Expertise',
      desc: 'Get clear, practical guidance through complicated insurance policy clauses and terms.',
    },
    {
      icon: <Heart size={28} className="why-icon" />,
      title: 'Peace of Mind',
      desc: 'Spend your energy and time with your hospitalized loved ones instead of managing files.',
    },
  ];

  return (
    <section className="why-us-section">
      <div className="container">
        <SectionTitle
          title="Insurance Shouldn't Become Another Problem."
          subtitle="We bridge the gap between hospital administrators, insurance companies, and your family."
          align="center"
        />

        <div className="why-us-grid grid-4">
          {items.map((item, idx) => (
            <div key={idx} className="why-card">
              <div className="why-icon-box">{item.icon}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
