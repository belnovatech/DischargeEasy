import React, { useState } from 'react';
import './HowItWorks.css';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description:
      'Start by telling us whether you need insurance guidance or help with an existing hospital claim.',
  },
  {
    number: '02',
    title: 'Talk To An Expert',
    description:
      'Our advisor understands your situation, policy details, hospital requirements, and what needs to be done.',
  },
  {
    number: '03',
    title: 'We Handle The Process',
    description:
      'We help with documents, hospital coordination, insurance communication, and the important follow-ups.',
  },
  {
    number: '04',
    title: 'You Stay Focused',
    description:
      'While we take care of the complicated administration, you can focus on your health and your family.',
  },
];

const faqs: FAQItem[] = [
  {
    question: 'How do I get started?',
    answer:
      'Simply contact DischargeEasy and tell us what kind of assistance you need. An advisor will understand your situation and guide you through the next steps.',
  },
  {
    question: 'Do I need to understand my insurance policy first?',
    answer:
      'No. Our team can help you understand the important parts of your policy and explain what documents or information may be required.',
  },
  {
    question: 'Can you help with hospital coordination?',
    answer:
      'Yes. Depending on your requirement, our team can assist with hospital coordination, documentation guidance, insurance communication, and follow-ups.',
  },
  {
    question: 'Will I have to handle everything myself?',
    answer:
      'No. Our purpose is to reduce the administrative burden and guide you through the process so that you know what needs to happen next.',
  },
];

export const HowItWorks: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <div className="de-how-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="de-how-hero">

        <div className="de-how-hero-glow de-how-hero-glow-one" />
        <div className="de-how-hero-glow de-how-hero-glow-two" />

        <div className="de-how-page-container">

          <div className="de-how-hero-content">

            <span className="de-how-eyebrow">
              HOW IT WORKS
            </span>

            <h1>
              Healthcare Help,
              <br />
              <span>Without The Confusion.</span>
            </h1>

            <p>
              From your first conversation to the final follow-up,
              DischargeEasy keeps the process simple, transparent,
              and human.
            </p>

            <div className="de-how-hero-actions">
              <button
                type="button"
                className="de-how-primary-button"
              >
                Talk To An Advisor
                <span>→</span>
              </button>

              <button
                type="button"
                className="de-how-secondary-button"
              >
                Explore Our Services
              </button>
            </div>

            <div className="de-how-hero-note">
              <span className="de-how-check">
                ✓
              </span>

              <span>
                Clear guidance from start to finish.
              </span>
            </div>

          </div>

        </div>

        {/* Decorative bottom wave */}
        <div className="de-how-hero-wave">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,58 C180,58 220,20 390,20 C560,20 580,65 760,65 C940,65 980,25 1140,25 C1300,25 1350,58 1440,58"
            />
          </svg>
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="de-how-intro">

        <div className="de-how-page-container">

          <div className="de-how-intro-grid">

            <div className="de-how-intro-heading">

              <span className="de-how-small-label">
                A SIMPLE APPROACH
              </span>

              <h2>
                One conversation.
                <br />
                <span>Four clear steps.</span>
              </h2>

            </div>

            <div className="de-how-intro-text">

              <p>
                Medical insurance can become overwhelming when you are
                already dealing with a hospital, paperwork, or a family
                emergency.
              </p>

              <p>
                Our process is designed to remove unnecessary complexity.
                You always know what happens next and who is helping you.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="de-how-process">

        <div className="de-how-page-container">

          <div className="de-how-section-heading">

            <span className="de-how-small-label">
              THE PROCESS
            </span>

            <h2>
              From First Message
              <br />
              <span>To Final Support.</span>
            </h2>

            <p>
              A straightforward journey designed around you,
              not around complicated insurance procedures.
            </p>

          </div>


          <div className="de-how-process-wrapper">

            {/* Desktop wave connector */}
            <div
              className="de-how-process-wave"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1200 190"
                preserveAspectRatio="none"
              >
                <path
                  d="M35 90
                     C120 90 135 35 235 35
                     C335 35 350 145 450 145
                     C550 145 565 35 665 35
                     C765 35 780 145 880 145
                     C980 145 1010 90 1165 90"
                />
              </svg>
            </div>


            <div className="de-how-process-grid">

              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="de-how-process-card"
                >

                  <div className="de-how-step-number">
                    {step.number}
                  </div>

                  <div className="de-how-process-content">

                    <span className="de-how-step-label">
                      STEP {step.number}
                    </span>

                    <h3>
                      {step.title}
                    </h3>

                    <p>
                      {step.description}
                    </p>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY THIS APPROACH
      ===================================================== */}
      <section className="de-how-benefits">

        <div className="de-how-page-container">

          <div className="de-how-benefits-card">

            <div className="de-how-benefits-heading">

              <span className="de-how-small-label">
                WHY IT FEELS DIFFERENT
              </span>

              <h2>
                You Don't Have To
                <br />
                <span>Figure It Out Alone.</span>
              </h2>

            </div>


            <div className="de-how-benefits-list">

              <div className="de-how-benefit-item">

                <div className="de-how-benefit-icon">
                  ✓
                </div>

                <div>
                  <h3>
                    Human Guidance
                  </h3>

                  <p>
                    Speak with people who can understand your
                    situation instead of navigating everything alone.
                  </p>
                </div>

              </div>


              <div className="de-how-benefit-item">

                <div className="de-how-benefit-icon">
                  ✓
                </div>

                <div>
                  <h3>
                    Clear Communication
                  </h3>

                  <p>
                    We explain the process in simple language
                    without unnecessary insurance jargon.
                  </p>
                </div>

              </div>


              <div className="de-how-benefit-item">

                <div className="de-how-benefit-icon">
                  ✓
                </div>

                <div>
                  <h3>
                    Practical Support
                  </h3>

                  <p>
                    From documentation to coordination, we focus
                    on the parts that actually create stress.
                  </p>
                </div>

              </div>


              <div className="de-how-benefit-item">

                <div className="de-how-benefit-icon">
                  ✓
                </div>

                <div>
                  <h3>
                    Support Until Completion
                  </h3>

                  <p>
                    Our goal is not simply to start the process.
                    We help you understand what happens next.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="de-how-faq">

        <div className="de-how-page-container">

          <div className="de-how-section-heading de-how-faq-heading">

            <span className="de-how-small-label">
              FAQ
            </span>

            <h2>
              Questions?
              <br />
              <span>We've Got You.</span>
            </h2>

            <p>
              A few things people commonly ask before getting started.
            </p>

          </div>


          <div className="de-how-faq-list">

            {faqs.map((faq, index) => (
              <div
                className={`de-how-faq-item ${
                  openFaq === index
                    ? 'de-how-faq-open'
                    : ''
                }`}
                key={faq.question}
              >

                <button
                  type="button"
                  className="de-how-faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >

                  <span>
                    {faq.question}
                  </span>

                  <span className="de-how-faq-arrow">
                    ↓
                  </span>

                </button>


                <div className="de-how-faq-answer">

                  <p>
                    {faq.answer}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="de-how-final">

        <div className="de-how-final-wave">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,60 C180,60 230,18 400,18 C570,18 610,65 780,65 C950,65 1000,22 1160,22 C1320,22 1360,60 1440,60"
            />
          </svg>
        </div>


        <div className="de-how-page-container">

          <div className="de-how-final-card">

            <span className="de-how-final-label">
              READY WHEN YOU ARE
            </span>

            <h2>
              Let's Make The
              <br />
              Process Easier.
            </h2>

            <p>
              Whether you need insurance guidance or help with
              a hospital claim, our team is here to help.
            </p>

            <button
              type="button"
              className="de-how-final-button"
            >
              Talk To An Advisor
              <span>→</span>
            </button>

            <small>
              Simple guidance. Human support. No unnecessary confusion.
            </small>

          </div>

        </div>

      </section>

    </div>
  );
};

export default HowItWorks;