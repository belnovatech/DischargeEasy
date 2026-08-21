import React, { useState } from 'react';
import './ClaimAssistance.css';
import claimImg from '../../assets/images/claim-assistance.png';

const ArrowIcon = () => (
  <svg
    className="claim-assistance-v3-arrow"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M13 6L19 12L13 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <span className="claim-assistance-v3-check">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 12.5L10 16.5L18 8.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const HospitalIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect
      x="10"
      y="7"
      width="28"
      height="34"
      rx="3"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M24 13V27"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M17 20H31"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M18 41V34H30V41"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path
      d="M13 7H28L36 15V41H13V7Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M28 7V15H36"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M19 22H30"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M19 28H30"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M19 34H26"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const ClipboardIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <rect
      x="11"
      y="10"
      width="26"
      height="32"
      rx="3"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <rect
      x="18"
      y="6"
      width="12"
      height="8"
      rx="2"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M18 25L22 29L30 21"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path
      d="M15 8L21 14L17 19C19 24 23 28 29 31L34 27L40 33L36 39C34 42 30 42 26 40C17 36 10 29 7 20C5 16 6 12 9 10L15 8Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle
      cx="24"
      cy="24"
      r="16"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M24 15V24L30 28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path
      d="M24 38C24 38 9 29.5 9 18.5C9 13.8 12.7 10 17.3 10C20.3 10 22.8 11.7 24 14.2C25.2 11.7 27.7 10 30.7 10C35.3 10 39 13.8 39 18.5C39 29.5 24 38 24 38Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WaveDivider = () => (
  <div className="claim-assistance-v3-wave" aria-hidden="true">
    <svg
      viewBox="0 0 1600 110"
      preserveAspectRatio="none"
    >
      <path
        className="claim-assistance-v3-wave-line"
        d="M-40 70 C130 70 190 38 350 38 C490 38 530 66 650 66 C800 66 850 25 1010 25 C1160 25 1210 68 1370 68 C1480 68 1540 54 1640 38"
      />
    </svg>
  </div>
);

interface ServiceCard {
  title: string;
  icon: React.ReactNode;
}

interface ProcessStep {
  number: string;
  title: string;
}

export const ClaimAssistance: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services: ServiceCard[] = [
    {
      title: 'Hospital Coordination',
      icon: <HospitalIcon />,
    },
    {
      title: 'Documentation Guidance',
      icon: <DocumentIcon />,
    },
    {
      title: 'Claim Process Assistance',
      icon: <ClipboardIcon />,
    },
    {
      title: 'Insurance / TPA Coordination',
      icon: <PhoneIcon />,
    },
    {
      title: 'Follow-Up Assistance',
      icon: <ClockIcon />,
    },
    {
      title: 'Discharge Documentation',
      icon: <HeartIcon />,
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Hospitalized',
    },
    {
      number: '02',
      title: 'Contact Us',
    },
    {
      number: '03',
      title: 'Agent Assigned',
    },
    {
      number: '04',
      title: 'Documentation',
    },
    {
      number: '05',
      title: 'Claim Coordination',
    },
    {
      number: '06',
      title: 'Support Until Process Completion',
    },
  ];

  const faqs = [
    {
      question: 'How much does claim assistance cost?',
      answer:
        'Claim assistance is ₹999 per claim. Customers who purchased insurance through DischargeEasy receive claim assistance free of charge.',
    },
    {
      question:
        'My policy is from another company. Can you still help?',
      answer:
        'Yes. Your insurance policy does not have to be purchased through DischargeEasy. We can assist with the claim coordination process for policies from other insurers as well.',
    },
    {
      question: 'Will someone come to the hospital?',
      answer:
        'Our team will coordinate with you and the hospital depending on your situation and the assistance required for your claim.',
    },
    {
      question: 'What do you need from me to start?',
      answer:
        'We generally need your policy details, hospital information and the relevant claim documents to understand the case and begin coordination.',
    },
    {
      question: 'Do you guarantee my claim will be approved?',
      answer:
        'No. Claim approval is ultimately determined by the insurer based on the policy terms and submitted documentation. We assist with coordination, documentation and follow-up.',
    },
  ];

  const scrollToHelp = () => {
    document
      .getElementById('claim-assistance-v3-help')
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  const scrollToInsurance = () => {
    window.location.href = '/health-insurance';
  };

  return (
    <div className="claim-assistance-v3-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="claim-assistance-v3-hero">

        <div className="claim-assistance-v3-container">

          <div className="claim-assistance-v3-hero-grid">

            <div className="claim-assistance-v3-hero-content">

              <span className="claim-assistance-v3-eyebrow">
                CLAIM ASSISTANCE
              </span>

              <h1 className="claim-assistance-v3-hero-title">
                Your Insurance
                <br />
                Claim Doesn't Have
                <br />
                To Be Your{' '}
                <span>Burden.</span>
              </h1>

              <p className="claim-assistance-v3-hero-description">
                DischargeEasy helps you navigate hospital insurance claims
                with human assistance and coordination.
              </p>

              <div className="claim-assistance-v3-price-card">

                <div className="claim-assistance-v3-price">
                  <span>₹</span>999
                </div>

                <div className="claim-assistance-v3-price-label">
                  Per claim
                </div>

                <p>
                  FREE for customers who purchased insurance
                  through DischargeEasy.
                </p>

              </div>

              <div className="claim-assistance-v3-hero-actions">

                <button
                  type="button"
                  className="claim-assistance-v3-primary-button"
                  onClick={scrollToHelp}
                >
                  <span>Request Claim Assistance</span>
                  <ArrowIcon />
                </button>

                <button
                  type="button"
                  className="claim-assistance-v3-secondary-button"
                  onClick={scrollToInsurance}
                >
                  Explore Insurance
                </button>

              </div>

            </div>


            <div className="claim-assistance-v3-hero-image-wrapper">

              <img
                src={claimImg}
                alt="Insurance claim assistance"
                className="claim-assistance-v3-hero-image"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WAVE
      ====================================================== */}
      <WaveDivider />


      {/* =====================================================
          WHAT WE HELP WITH
      ====================================================== */}
      <section className="claim-assistance-v3-services">

        <div className="claim-assistance-v3-container">

          <div className="claim-assistance-v3-centered-heading">

            <span className="claim-assistance-v3-eyebrow">
              WHAT WE HELP WITH
            </span>

            <h2 className="claim-assistance-v3-section-title">
              The Parts Nobody Should Handle
              <br className="claim-assistance-v3-desktop-break" />
              From A Hospital Corridor.
            </h2>

          </div>


          <div className="claim-assistance-v3-service-grid">

            {services.map((service) => (
              <article
                className="claim-assistance-v3-service-card"
                key={service.title}
              >

                <div className="claim-assistance-v3-service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="claim-assistance-v3-process">

        <div className="claim-assistance-v3-container">

          <div className="claim-assistance-v3-process-heading">

            <span className="claim-assistance-v3-process-eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              From Admission To Completion.
            </h2>

          </div>


          <div className="claim-assistance-v3-process-line">

            {processSteps.map((step, index) => (
              <div
                className="claim-assistance-v3-process-step"
                key={step.number}
              >

                <div className="claim-assistance-v3-process-number">
                  {step.number}
                </div>

                {index < processSteps.length - 1 && (
                  <div className="claim-assistance-v3-process-connector" />
                )}

                <h3>{step.title}</h3>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ALREADY HAVE INSURANCE
      ====================================================== */}
      <section
        id="claim-assistance-v3-help"
        className="claim-assistance-v3-existing"
      >

        <div className="claim-assistance-v3-container">

          <div className="claim-assistance-v3-existing-card">

            <h2>
              Already Have Insurance?
            </h2>

            <h3>
              That's okay.
            </h3>

            <p>
              Your policy does not have to be purchased through
              DischargeEasy. Get professional claim assistance for ₹999.
            </p>

            <button
              type="button"
              className="claim-assistance-v3-help-button"
              onClick={() => {
                window.alert(
                  'Your claim assistance request has been received.'
                );
              }}
            >
              <span>Get Help With My Claim</span>
              <ArrowIcon />
            </button>


            <div className="claim-assistance-v3-help-list">

              <div>
                <CheckIcon />
                <span>Hospital Coordination</span>
              </div>

              <div>
                <CheckIcon />
                <span>Documentation Guidance</span>
              </div>

              <div>
                <CheckIcon />
                <span>Insurance Coordination</span>
              </div>

              <div>
                <CheckIcon />
                <span>Human Support</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="claim-assistance-v3-faq">

        <div className="claim-assistance-v3-container">

          <div className="claim-assistance-v3-centered-heading">

            <span className="claim-assistance-v3-eyebrow">
              FAQ
            </span>

            <h2 className="claim-assistance-v3-section-title">
              Claim Assistance FAQ
            </h2>

          </div>


          <div className="claim-assistance-v3-faq-list">

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`claim-assistance-v3-faq-item ${
                    isOpen
                      ? 'claim-assistance-v3-faq-open'
                      : ''
                  }`}
                >

                  <button
                    type="button"
                    className="claim-assistance-v3-faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                  >

                    <span>{faq.question}</span>

                    <svg
                      className={`claim-assistance-v3-chevron ${
                        isOpen
                          ? 'claim-assistance-v3-chevron-open'
                          : ''
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  </button>


                  {isOpen && (
                    <div className="claim-assistance-v3-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="claim-assistance-v3-final">

        <div className="claim-assistance-v3-container">

          <div className="claim-assistance-v3-final-card">

            <div className="claim-assistance-v3-final-content">

              <h2>
                Your Health Comes First.
                <br />
                We'll Take Care Of The Insurance.
              </h2>

              <p>
                Whether you're looking for the right insurance or need
                help with a hospital claim, DischargeEasy is here to help.
              </p>


              <div className="claim-assistance-v3-final-actions">

                <button
                  type="button"
                  className="claim-assistance-v3-final-primary"
                  onClick={scrollToInsurance}
                >
                  <span>Get Insurance Assistance</span>
                  <ArrowIcon />
                </button>

                <button
                  type="button"
                  className="claim-assistance-v3-final-secondary"
                  onClick={scrollToHelp}
                >
                  Get Claim Assistance – ₹999
                </button>

              </div>


              <p className="claim-assistance-v3-final-note">
                Already purchased through DischargeEasy?
                Claim assistance is FREE.
              </p>

            </div>


            <div className="claim-assistance-v3-final-wave claim-assistance-v3-final-wave-one" />
            <div className="claim-assistance-v3-final-wave claim-assistance-v3-final-wave-two" />

          </div>

        </div>

      </section>

    </div>
  );
};

export default ClaimAssistance;