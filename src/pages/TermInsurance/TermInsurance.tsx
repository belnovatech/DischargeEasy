import React, { useState } from 'react';
import './TermInsurance.css';
import termImg from '../../assets/images/term-insurance.png';

const ArrowIcon = () => (
  <svg
    className="term-insurance-v2-arrow"
    viewBox="0 0 24 24"
    fill="none"
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
  <span className="term-insurance-v2-check">
    <svg viewBox="0 0 24 24" fill="none">
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

const WalletIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <rect
      x="8"
      y="12"
      width="31"
      height="27"
      rx="4"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M8 18H34C36.76 18 39 20.24 39 23V32H30C27.24 32 25 29.76 25 27C25 24.24 27.24 22 30 22H39"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="30" cy="27" r="1.5" fill="currentColor" />
  </svg>
);

const ParentIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <circle
      cx="24"
      cy="17"
      r="6"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M12 38C12 31.37 17.37 26 24 26C30.63 26 36 31.37 36 38"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M11 18C8.8 18 7 19.8 7 22C7 24.2 8.8 26 11 26"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M37 18C39.2 18 41 19.8 41 22C41 24.2 39.2 26 37 26"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <path
      d="M7 22L24 8L41 22"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 20V39H37V20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 39V28H29V39"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <path
      d="M24 37C24 37 9 28.5 9 18C9 13.58 12.58 10 17 10C20.03 10 22.69 11.7 24 14.15C25.31 11.7 27.97 10 31 10C35.42 10 39 13.58 39 18C39 28.5 24 37 24 37Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 27L18 32"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M35 27L30 32"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`term-insurance-v2-chevron ${
      open ? 'term-insurance-v2-chevron-open' : ''
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
);

export const TermInsurance: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const goToAdvisor = () => {
    document
      .getElementById('term-insurance-v2-final-cta')
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  const faqs = [
    {
      question: 'What is term insurance?',
      answer:
        'Term insurance provides financial protection to your family for a fixed period. If the insured person passes away during the policy term, the nominee receives the applicable death benefit according to the policy conditions.',
    },
    {
      question: 'How much cover should I take?',
      answer:
        'The right cover depends on your income, family responsibilities, loans, future education expenses and other financial goals. Our advisors can help you estimate a suitable amount.',
    },
    {
      question: 'Who should consider it?',
      answer:
        'Term insurance is particularly useful for sole earners, young parents, people with outstanding loans and those supporting elderly parents or other dependants.',
    },
    {
      question: 'Does DischargeEasy help after purchase?',
      answer:
        'Yes. DischargeEasy can continue to provide guidance after purchase, including documentation support and assistance during the claim process.',
    },
  ];

  return (
    <div className="term-insurance-v2-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="term-insurance-v2-hero">
        <div className="term-insurance-v2-container">

          <span className="term-insurance-v2-eyebrow">
            TERM INSURANCE
          </span>

          <h1 className="term-insurance-v2-hero-title">
            Protect Your
            <br />
            Family's Tomorrow.
          </h1>

          <p className="term-insurance-v2-hero-description">
            Term insurance can provide financial protection for the people
            who depend on you.
          </p>

          <button
            type="button"
            className="term-insurance-v2-primary-button"
            onClick={goToAdvisor}
          >
            <span>Talk To An Advisor</span>
            <ArrowIcon />
          </button>

          <p className="term-insurance-v2-hero-note">
            Clear guidance. Less stress.
          </p>

        </div>
      </section>


      {/* =====================================================
          CURVED DIVIDER
      ====================================================== */}
      <div className="term-insurance-v2-wave-divider">
        <svg
          viewBox="0 0 1600 100"
          preserveAspectRatio="none"
        >
          <path d="M0 72 C170 72 190 30 355 30 C470 30 500 47 580 57" />
          <path d="M1025 25 C1145 25 1190 62 1345 68 C1460 73 1530 68 1600 55" />
        </svg>
      </div>


      {/* =====================================================
          WHY TERM INSURANCE
      ====================================================== */}
      <section className="term-insurance-v2-why">
        <div className="term-insurance-v2-container">

          <div className="term-insurance-v2-why-grid">

            <div className="term-insurance-v2-why-content">

              <span className="term-insurance-v2-eyebrow">
                WHY TERM INSURANCE
              </span>

              <h2 className="term-insurance-v2-section-title">
                The Quietest Way To
                <br />
                Say: They'll Be Alright.
              </h2>

              <p className="term-insurance-v2-section-description">
                A term plan does not change your daily life. It changes what
                your family's life looks like if you are no longer there to
                support it.
              </p>

              <div className="term-insurance-v2-feature-list">

                <div className="term-insurance-v2-feature">
                  <CheckIcon />
                  <span>
                    Replaces the income your family depends on
                  </span>
                </div>

                <div className="term-insurance-v2-feature">
                  <CheckIcon />
                  <span>
                    Covers home, education and personal loans
                  </span>
                </div>

                <div className="term-insurance-v2-feature">
                  <CheckIcon />
                  <span>
                    High cover at a comparatively low premium
                  </span>
                </div>

                <div className="term-insurance-v2-feature">
                  <CheckIcon />
                  <span>
                    Simple, transparent and easy to understand
                  </span>
                </div>

              </div>

              <button
                type="button"
                className="term-insurance-v2-small-button"
                onClick={goToAdvisor}
              >
                <span>Talk To An Advisor</span>
                <ArrowIcon />
              </button>

            </div>


            <div className="term-insurance-v2-why-image-wrapper">
              <img
                src={termImg}
                alt="Family walking together"
                className="term-insurance-v2-why-image"
              />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHO SHOULD CONSIDER IT
      ====================================================== */}
      <section className="term-insurance-v2-consider">
        <div className="term-insurance-v2-container">

          <div className="term-insurance-v2-centered-heading">

            <span className="term-insurance-v2-eyebrow">
              WHO SHOULD CONSIDER IT
            </span>

            <h2 className="term-insurance-v2-section-title">
              If Someone Depends
              <br />
              On You, This Matters.
            </h2>

          </div>


          <div className="term-insurance-v2-consider-grid">

            <article className="term-insurance-v2-consider-card">

              <div className="term-insurance-v2-icon-circle">
                <WalletIcon />
              </div>

              <h3>
                Sole Earners
              </h3>

              <p>
                When one income supports the whole household.
              </p>

            </article>


            <article className="term-insurance-v2-consider-card">

              <div className="term-insurance-v2-icon-circle">
                <ParentIcon />
              </div>

              <h3>
                Young Parents
              </h3>

              <p>
                When children's education is still years away.
              </p>

            </article>


            <article className="term-insurance-v2-consider-card">

              <div className="term-insurance-v2-icon-circle">
                <HomeIcon />
              </div>

              <h3>
                Loan Holders
              </h3>

              <p>
                When a home or education loan is still running.
              </p>

            </article>


            <article className="term-insurance-v2-consider-card">

              <div className="term-insurance-v2-icon-circle">
                <HeartIcon />
              </div>

              <h3>
                Caring For Parents
              </h3>

              <p>
                When elderly parents rely on your support.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="term-insurance-v2-how">
        <div className="term-insurance-v2-container">

          <div className="term-insurance-v2-centered-heading">

            <span className="term-insurance-v2-eyebrow">
              HOW IT WORKS
            </span>

            <h2 className="term-insurance-v2-section-title">
              Three Steps, No Confusion.
            </h2>

            <p className="term-insurance-v2-section-description">
              Our advisors keep the process human from the first conversation
              to the issued policy.
            </p>

          </div>


          <div className="term-insurance-v2-how-grid">

            <article className="term-insurance-v2-step-card">

              <span className="term-insurance-v2-step-number">
                01
              </span>

              <h3>
                Understand Your Responsibilities
              </h3>

              <p>
                Income, dependants, loans and goals.
              </p>

            </article>


            <article className="term-insurance-v2-step-card">

              <span className="term-insurance-v2-step-number">
                02
              </span>

              <h3>
                Choose Cover And Term
              </h3>

              <p>
                A number and duration that genuinely fit.
              </p>

            </article>


            <article className="term-insurance-v2-step-card">

              <span className="term-insurance-v2-step-number">
                03
              </span>

              <h3>
                Documentation Support
              </h3>

              <p>
                We help you complete the process correctly.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="term-insurance-v2-faq">
        <div className="term-insurance-v2-container">

          <div className="term-insurance-v2-centered-heading">

            <span className="term-insurance-v2-eyebrow">
              FAQ
            </span>

            <h2 className="term-insurance-v2-section-title">
              Term Insurance FAQ
            </h2>

          </div>


          <div className="term-insurance-v2-faq-list">

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`term-insurance-v2-faq-item ${
                    isOpen
                      ? 'term-insurance-v2-faq-item-open'
                      : ''
                  }`}
                >

                  <button
                    type="button"
                    className="term-insurance-v2-faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                  >

                    <span>{faq.question}</span>

                    <ChevronIcon open={isOpen} />

                  </button>


                  {isOpen && (
                    <div className="term-insurance-v2-faq-answer-visible">
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
      <section
        id="term-insurance-v2-final-cta"
        className="term-insurance-v2-final"
      >
        <div className="term-insurance-v2-container">

          <div className="term-insurance-v2-final-card">

            <div className="term-insurance-v2-final-content">

              <h2>
                Give Your Family One Less
                <br className="term-insurance-v2-desktop-break" />
                Thing To Worry About.
              </h2>

              <p>
                Talk to a DischargeEasy advisor about the right term
                insurance for your responsibilities.
              </p>


              <div className="term-insurance-v2-final-actions">

                <button
                  type="button"
                  className="term-insurance-v2-final-primary"
                  onClick={goToAdvisor}
                >
                  <span>Get Insurance Assistance</span>
                  <ArrowIcon />
                </button>

                <button
                  type="button"
                  className="term-insurance-v2-final-secondary"
                  onClick={() => {
                    window.alert(
                      'Claim assistance request received.'
                    );
                  }}
                >
                  Get Claim Assistance – ₹999
                </button>

              </div>


              <p className="term-insurance-v2-final-note">
                Already purchased through DischargeEasy?
                Claim assistance is FREE.
              </p>

            </div>

            <div className="term-insurance-v2-final-wave term-insurance-v2-final-wave-one" />
            <div className="term-insurance-v2-final-wave term-insurance-v2-final-wave-two" />

          </div>

        </div>
      </section>

    </div>
  );
};

export default TermInsurance;