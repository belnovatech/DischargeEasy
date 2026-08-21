import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is DischargeEasy?',
    answer:
      'DischargeEasy is a healthcare and insurance assistance service. We help you choose insurance and provide human support when you need help navigating a claim or insurance-related process.',
  },
  {
    question: 'What insurance products are available?',
    answer:
      'DischargeEasy provides guidance related to health insurance and term insurance. Our team can help you understand applicable options and processes.',
  },
  {
    question: 'Can I buy Health Insurance?',
    answer:
      'Yes. You can request assistance from our team to understand health insurance options and the applicable policy features, terms and conditions.',
  },
  {
    question: 'Can I buy Term Insurance?',
    answer:
      'Yes. DischargeEasy can provide guidance regarding term insurance options and help you understand the process before making a decision.',
  },
  {
    question: 'Is claim assistance free?',
    answer:
      'Claim assistance may be subject to the applicable service terms. Please contact DischargeEasy for the current assistance process and applicable charges, if any.',
  },
  {
    question: 'I purchased insurance elsewhere. Can you help?',
    answer:
      'Yes. Where applicable, DischargeEasy can assist customers with navigating insurance-related processes even when the policy was purchased through another channel, subject to our service terms.',
  },
  {
    question: 'What is the ₹999 charge?',
    answer:
      'The ₹999 charge refers to an applicable assistance service fee. Please contact our team for the current service scope, eligibility and applicable terms before requesting assistance.',
  },
  {
    question: 'Can you help if I already paid my hospital bill?',
    answer:
      'Yes. If your applicable insurance policy provides reimbursement coverage, DischargeEasy can assist you in navigating the reimbursement claim process.',
  },
  {
    question: 'Is reimbursement guaranteed?',
    answer:
      'No. Reimbursement is not guaranteed. Claim eligibility, admissibility and settlement depend on the applicable insurance policy terms, conditions and insurer/TPA processes.',
  },
  {
    question: 'What is reimbursement claim assistance?',
    answer:
      'Reimbursement claim assistance helps you understand and navigate the process when you have paid the hospital bill yourself and need to submit an eligible reimbursement claim.',
  },
  {
    question: 'Do I need to be currently hospitalized?',
    answer:
      'Not necessarily. Depending on the assistance required, DischargeEasy may be able to help with hospital, claim or reimbursement-related processes after discharge as well.',
  },
  {
    question: 'What documents may be required?',
    answer:
      'Depending on the type of assistance and policy, documents may include hospital bills, discharge summary, prescriptions, reports, insurance documents and other claim-related records.',
  },
  {
    question: 'How do I request claim assistance?',
    answer:
      'You can request claim assistance through the DischargeEasy website or contact our team. We will guide you through the applicable next steps.',
  },
  {
    question: 'Where is hospital assistance currently available?',
    answer:
      'Hospital assistance availability depends on the location and service requirements. Contact DischargeEasy to check availability for your hospital or city.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <main className="faq-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="faq-hero">
        <div className="faq-hero-inner">

          <span className="faq-badge">
            FAQ
          </span>

          <h1>
            Questions,
            <br />
            Answered Clearly.
          </h1>

          <p>
            If something isn't covered here,
            an advisor is a click away.
          </p>

        </div>
      </section>

      {/* =====================================================
          FAQ CONTENT
      ====================================================== */}
      <section className="faq-content">

        <div className="faq-list">

          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`faq-item ${
                  isOpen ? 'open' : ''
                }`}
                key={item.question}
              >

                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>
                    {item.question}
                  </span>

                  <span className="faq-toggle">
                    {isOpen ? (
                      <ChevronUp size={13} />
                    ) : (
                      <ChevronDown size={13} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>
                      {item.answer}
                    </p>
                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* =================================================
            CTA
        ================================================== */}
        <div className="faq-advisor-cta">

          <h2>
            Still Have Questions?
          </h2>

          <p>
            Talk to a DischargeEasy advisor
            for personal assistance.
          </p>

          <Link
            to="/talk-to-advisor"
            className="faq-advisor-button"
          >
            Talk To An Advisor
          </Link>

        </div>

        {/* =================================================
            DISCLAIMER
        ================================================== */}
        <p className="faq-disclaimer">
          DischargeEasy provides insurance assistance,
          guidance and coordination. Claim eligibility,
          admissibility, reimbursement and settlement are
          subject to the applicable insurance policy terms,
          conditions and insurer/TPA processes.
        </p>

      </section>

    </main>
  );
};

export default FAQ;