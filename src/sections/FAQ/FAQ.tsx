import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './FAQ.css';

interface FAQItem {
  q: string;
  a: string;
}

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: 'What is DischargeEasy?',
      a: 'DischargeEasy is a professional healthcare assistance platform that helps families navigate hospital admissions, documentation, and insurance claims. We provide personalized human assistance to reduce stress during hospitalization.',
    },
    {
      q: 'What services does DischargeEasy provide?',
      a: 'We offer policy selection guidance for Health and Term Insurance, hands-on hospital claim coordination, document verification, and direct communication with TPAs (Third Party Administrators) and insurance firms.',
    },
    {
      q: 'Can I buy Health Insurance through DischargeEasy?',
      a: 'Yes, we help you compare and buy Health Insurance from top insurers. Our advisory team provides human support to pick policies that match your family requirements and financial goals.',
    },
    {
      q: 'Can I buy Term Insurance through DischargeEasy?',
      a: 'Yes, we guide you throughTerm Insurance policy options to ensure your family’s financial future is secured. We help evaluate coverage requirements and complete onboarding processes.',
    },
    {
      q: 'Is claim assistance free?',
      a: 'Yes, claim assistance is completely FREE if you purchased your active health or term insurance policy directly through the DischargeEasy platform.',
    },
    {
      q: 'I purchased my insurance somewhere else. Can DischargeEasy still help me?',
      a: 'Absolutely. We support claims for policies purchased elsewhere. You can hire our team for a flat fee of ₹999 per claim.',
    },
    {
      q: 'How much does claim assistance cost?',
      a: 'It is free for DischargeEasy policyholders. For policies purchased through other channels, we charge a flat fee of ₹999 per claim with no hidden costs.',
    },
    {
      q: 'What does the ₹999 claim assistance include?',
      a: 'It includes admission guide checkups, claim form filing guidance, coordinate billing documents with the hospital administrative desk, and constant follow-ups with insurance providers for cashless approvals or reimbursement filings.',
    },
    {
      q: 'Will a DischargeEasy representative assist me at the hospital?',
      a: 'Yes, we have dedicated field coordinators in our service areas who handle coordination directly at the hospital’s insurance/TPA desk.',
    },
    {
      q: 'How do I request claim assistance?',
      a: 'You can request claim assistance via our Contact page form, call our helpline, or click the "Get Claim Assistance" buttons to initiate support.',
    },
    {
      q: 'Which cities currently have hospital assistance?',
      a: 'Our on-site hospital claim assistance coordinators are currently active in Hyderabad. We plan to expand to additional cities soon.',
    },
    {
      q: 'How can I contact DischargeEasy?',
      a: 'You can email us at support@dischargeeasy.com, call +91 40 6823 4567, or submit a request directly through our Contact form.',
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Clear answers about our services, pricing, and claim assistance workflows."
          align="center"
        />

        <div className="faq-accordion-wrapper">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item-card ${isOpen ? 'active' : ''}`}
                onClick={() => handleToggle(idx)}
              >
                <button 
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <ChevronDown className={`faq-arrow-icon ${isOpen ? 'rotate' : ''}`} size={18} />
                </button>
                
                <div className={`faq-answer-panel ${isOpen ? 'show' : ''}`}>
                  <p className="faq-answer-text">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
