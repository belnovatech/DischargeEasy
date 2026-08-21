import React from 'react';
import './AssistanceProcess.css';

interface Step {
  num: string;
  title: string;
}

export const AssistanceProcess: React.FC = () => {
  const steps: Step[] = [
    { num: '01', title: 'Hospital Admission' },
    { num: '02', title: 'Contact DischargeEasy' },
    { num: '03', title: 'Our Agent Connects' },
    { num: '04', title: 'Documentation & Support' },
    { num: '05', title: 'Claim Assistance' },
    { num: '06', title: 'Focus on Recovery' },
  ];

  return (
    <section className="assistance-process-section">
      <div className="container">
        <div className="process-header">
          <h2 className="process-title text-white">
            When You Are In The Hospital,<br />
            The Last Thing You Need Is<br />
            Insurance Stress.
          </h2>
          <p className="process-subtitle">That's where DischargeEasy steps in.</p>
        </div>

        <div className="process-steps-container">
          <div className="process-connector-line"></div>
          <div className="process-steps-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="process-step-card">
                <div className="step-number-circle">{step.num}</div>
                <h4 className="step-title">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistanceProcess;
