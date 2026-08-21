import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './HowItWorks.css';

interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export const HowItWorks: React.FC = () => {
  const steps: StepItem[] = [
    {
      num: '01',
      title: 'Tell Us What You Need',
      desc: 'Choose insurance guidance or hospital claim assistance based on your current requirements.',
    },
    {
      num: '02',
      title: 'Talk To Our Expert',
      desc: 'Our team connects with you to understand your healthcare situation, policy details, and hospital choice.',
    },
    {
      num: '03',
      title: 'We Take It Forward',
      desc: 'We handle documentation checks, coordinate with hospital billing, and process claims on your behalf.',
    },
    {
      num: '04',
      title: 'You Stay Focused',
      desc: 'Focus entirely on recovery and being with your loved ones while we handle the complicated insurance administration.',
    },
  ];

  return (
    <section className="how-it-works-section">
      <div className="container">
        <SectionTitle
          title="Getting Help Is Easy."
          subtitle="Four simple steps between your first message and real medical insurance assistance."
          align="center"
        />

        <div className="how-steps-grid grid-4">
          {steps.map((step, idx) => (
            <div key={idx} className="how-step-card-box">
              <div className="how-step-num-bg">{step.num}</div>
              <h3 className="how-step-title">{step.title}</h3>
              <p className="how-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
