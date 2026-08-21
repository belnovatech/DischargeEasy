import React, { useState } from 'react';
import './HealthInsurance.css';
import healthImg from '../../assets/images/health-insurance.png';

const CheckIcon = () => (
  <span className="health-insurance-v2-check" aria-hidden="true">
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

const ArrowIcon = () => (
  <svg
    className="health-insurance-v2-arrow"
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

const FamilyIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <circle
      cx="17"
      cy="16"
      r="5"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <circle
      cx="31"
      cy="17"
      r="4"
      stroke="currentColor"
      strokeWidth="2.5"
    />
    <path
      d="M8 34C8 28.4772 12.4772 24 18 24C23.5228 24 28 28.4772 28 34"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M27 25C33 23.5 39 27.5 39 33.5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path
      d="M24 6L39 12V22C39 31.5 33 38 24 42C15 38 9 31.5 9 22V12L24 6Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HospitalIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
    <path
      d="M10 40V15C10 13.3431 11.3431 12 13 12H35C36.6569 12 38 13.3431 38 15V40"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M6 40H42"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M24 18V28"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M19 23H29"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M17 40V32H31V40"
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
      d="M24 39C24 39 8 29 8 18C8 12.4772 12.4772 9 17 9C20.2 9 22.8 10.8 24 13.2C25.2 10.8 27.8 9 31 9C35.5228 9 40 12.4772 40 18C40 29 24 39 24 39Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 23H20L22 19L26 27L28 23H32"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`health-insurance-v2-chevron ${
      open ? 'health-insurance-v2-chevron-open' : ''
    }`}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
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

interface FAQItem {
  question: string;
  answer: string;
}

export const HealthInsurance: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToCTA = () => {
    document
      .getElementById('health-insurance-v2-cta')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
  };

  const faqItems: FAQItem[] = [
    {
      question: 'Why does health insurance matter?',
      answer:
        'Medical treatment can become a significant financial burden without adequate coverage. Health insurance helps protect your savings by covering eligible hospitalisation and treatment expenses according to the policy terms.',
    },
    {
      question: 'How do I choose the right cover?',
      answer:
        'The right cover depends on your family size, age, existing health needs, preferred hospitals, city, and expected medical expenses. Our advisors help you compare these factors before choosing a policy.',
    },
    {
      question: 'Do you help during a claim?',
      answer:
        'Yes. Customers who purchase their health insurance through DischargeEasy receive claim assistance, including hospital coordination, documentation guidance, insurer and TPA communication, and follow-up support.',
    },
    {
      question: 'Can you help if I already have a policy?',
      answer:
        'Yes. We can help you understand your existing policy, explain important clauses, and guide you on what to look for when reviewing or renewing your coverage.',
    },
  ];

  return (
    <main className="health-insurance-v2-page">

      {/* =====================================================
          01. HERO
      ====================================================== */}
      <section className="health-insurance-v2-hero">
        <div className="health-insurance-v2-container">
          <div className="health-insurance-v2-hero-content">

            <span className="health-insurance-v2-eyebrow">
              HEALTH INSURANCE
            </span>

            <h1 className="health-insurance-v2-hero-title">
              Health Insurance
              <br />
              That Protects More
              <br />
              Than Your Finances.
            </h1>

            <p className="health-insurance-v2-hero-description">
              Find the right health insurance protection with guidance from
              DischargeEasy.
            </p>

            <div className="health-insurance-v2-hero-actions">
              <button
                type="button"
                className="health-insurance-v2-primary-btn"
                onClick={scrollToCTA}
              >
                Talk To An Insurance Advisor
                <ArrowIcon />
              </button>

              <button
                type="button"
                className="health-insurance-v2-outline-btn"
                onClick={scrollToCTA}
              >
                Get Claim Assistance – ₹999
              </button>
            </div>

            <p className="health-insurance-v2-hero-note">
              Purchase through DischargeEasy and get FREE claim assistance.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          02. WHY IT MATTERS
      ====================================================== */}
      <section className="health-insurance-v2-matters">
        <div className="health-insurance-v2-container">

          <div className="health-insurance-v2-matters-grid">

            <div className="health-insurance-v2-matters-image-wrap">
              <img
                src={healthImg}
                alt="Indian family protected by health insurance"
                className="health-insurance-v2-matters-image"
              />
            </div>

            <div className="health-insurance-v2-matters-content">

              <span className="health-insurance-v2-eyebrow">
                WHY IT MATTERS
              </span>

              <h2 className="health-insurance-v2-section-title">
                Medical Costs Rarely
                <br />
                Arrive With A Warning.
              </h2>

              <p className="health-insurance-v2-section-description">
                Health insurance is what keeps a hospital admission from
                becoming a financial emergency for the whole family.
              </p>

              <div className="health-insurance-v2-feature-list">

                <div className="health-insurance-v2-feature-item">
                  <CheckIcon />
                  <span>
                    Hospitalisation and treatment expenses covered
                  </span>
                </div>

                <div className="health-insurance-v2-feature-item">
                  <CheckIcon />
                  <span>
                    Protection for parents, spouse and children
                  </span>
                </div>

                <div className="health-insurance-v2-feature-item">
                  <CheckIcon />
                  <span>
                    Cashless and reimbursement options explained clearly
                  </span>
                </div>

                <div className="health-insurance-v2-feature-item">
                  <CheckIcon />
                  <span>
                    Human help when it is time to claim
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          03. WHAT TO CONSIDER
      ====================================================== */}
      <section className="health-insurance-v2-consider">
        <div className="health-insurance-v2-container">

          <div className="health-insurance-v2-centered-heading">

            <span className="health-insurance-v2-eyebrow">
              WHAT TO CONSIDER
            </span>

            <h2 className="health-insurance-v2-section-title">
              The Things Worth Getting Right.
            </h2>

            <p className="health-insurance-v2-section-description">
              A policy is only useful if it fits your life. These are the
              points our advisors walk you through.
            </p>

          </div>


          {/* EXACTLY 4 CARDS */}
          <div className="health-insurance-v2-consider-grid">

            {/* CARD 1 */}
            <article className="health-insurance-v2-consider-card">

              <div className="health-insurance-v2-icon-circle">
                <FamilyIcon />
              </div>

              <h3>
                Who Is Covered
              </h3>

              <p>
                Individual, family floater or parents included.
              </p>

            </article>


            {/* CARD 2 */}
            <article className="health-insurance-v2-consider-card">

              <div className="health-insurance-v2-icon-circle">
                <ShieldIcon />
              </div>

              <h3>
                Sum Insured
              </h3>

              <p>
                Cover that reflects real hospital costs in your city.
              </p>

            </article>


            {/* CARD 3 */}
            <article className="health-insurance-v2-consider-card">

              <div className="health-insurance-v2-icon-circle">
                <HospitalIcon />
              </div>

              <h3>
                Network Hospitals
              </h3>

              <p>
                Where cashless treatment is actually available.
              </p>

            </article>


            {/* CARD 4 */}
            <article className="health-insurance-v2-consider-card">

              <div className="health-insurance-v2-icon-circle">
                <HeartIcon />
              </div>

              <h3>
                Waiting Periods
              </h3>

              <p>
                Existing conditions and what applies to them.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          04. HOW DISCHARGEEASY HELPS
      ====================================================== */}
      <section className="health-insurance-v2-help">
        <div className="health-insurance-v2-container">

          <div className="health-insurance-v2-help-grid">

            {/* LEFT CARD */}
            <div className="health-insurance-v2-help-card">

              <h2>
                How DischargeEasy Helps
              </h2>

              <div className="health-insurance-v2-help-list">

                <div className="health-insurance-v2-help-item">
                  <CheckIcon />
                  <span>
                    We understand your family situation before suggesting
                    anything
                  </span>
                </div>

                <div className="health-insurance-v2-help-item">
                  <CheckIcon />
                  <span>
                    Options explained without insurance jargon
                  </span>
                </div>

                <div className="health-insurance-v2-help-item">
                  <CheckIcon />
                  <span>
                    Documentation and purchase support end to end
                  </span>
                </div>

                <div className="health-insurance-v2-help-item">
                  <CheckIcon />
                  <span>
                    A team that stays reachable after the policy is issued
                  </span>
                </div>

              </div>

              <button
                type="button"
                className="health-insurance-v2-small-btn"
                onClick={scrollToCTA}
              >
                Talk To An Advisor
                <ArrowIcon />
              </button>

            </div>


            {/* RIGHT CARD */}
            <div className="health-insurance-v2-claim-card">

              <h2>
                Claim Assistance, Included
              </h2>

              <p>
                Buy your health insurance through DischargeEasy and our team
                assists you through the hospital claim process at no extra
                charge.
              </p>

              <div className="health-insurance-v2-claim-list">

                <div className="health-insurance-v2-claim-item">
                  <CheckIcon />
                  <span>
                    Hospital coordination
                  </span>
                </div>

                <div className="health-insurance-v2-claim-item">
                  <CheckIcon />
                  <span>
                    Claim documentation guidance
                  </span>
                </div>

                <div className="health-insurance-v2-claim-item">
                  <CheckIcon />
                  <span>
                    Insurer and TPA communication
                  </span>
                </div>

                <div className="health-insurance-v2-claim-item">
                  <CheckIcon />
                  <span>
                    Follow-up until the process is complete
                  </span>
                </div>

              </div>

              <strong>
                FREE for our customers.
              </strong>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          05. FAQ
      ====================================================== */}
      <section className="health-insurance-v2-faq">
        <div className="health-insurance-v2-container">

          <div className="health-insurance-v2-centered-heading">

            <span className="health-insurance-v2-eyebrow">
              FAQ
            </span>

            <h2 className="health-insurance-v2-section-title">
              Health Insurance FAQ
            </h2>

          </div>


          <div className="health-insurance-v2-faq-list">

            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.question}
                  className={`health-insurance-v2-faq-item ${
                    isOpen
                      ? 'health-insurance-v2-faq-item-open'
                      : ''
                  }`}
                >

                  <button
                    type="button"
                    className="health-insurance-v2-faq-question"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                  >

                    <span>
                      {item.question}
                    </span>

                    <ChevronIcon open={isOpen} />

                  </button>


                  <div
                    className={`health-insurance-v2-faq-answer ${
                      isOpen
                        ? 'health-insurance-v2-faq-answer-open'
                        : ''
                    }`}
                  >
                    <p>
                      {item.answer}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          06. FINAL CTA
      ====================================================== */}
      <section
        id="health-insurance-v2-cta"
        className="health-insurance-v2-final-cta"
      >

        <div className="health-insurance-v2-container">

          <div className="health-insurance-v2-cta-card">

            <div className="health-insurance-v2-cta-content">

              <h2>
                Let's Find The Right Health
                <br className="health-insurance-v2-desktop-break" />
                Cover For Your Family.
              </h2>

              <p>
                Talk to a DischargeEasy advisor and get clear, practical
                guidance — no pressure, no jargon.
              </p>


              <div className="health-insurance-v2-cta-actions">

                <button
                  type="button"
                  className="health-insurance-v2-cta-primary"
                  onClick={scrollToCTA}
                >
                  Get Insurance Assistance
                  <ArrowIcon />
                </button>

                <button
                  type="button"
                  className="health-insurance-v2-cta-secondary"
                  onClick={() => {
                    window.alert(
                      'Claim assistance request received. Our team will contact you shortly.'
                    );
                  }}
                >
                  Get Claim Assistance – ₹999
                </button>

              </div>


              <p className="health-insurance-v2-cta-note">
                Already purchased through DischargeEasy?
                Claim assistance is FREE.
              </p>

            </div>


            <div className="health-insurance-v2-cta-wave health-insurance-v2-cta-wave-one" />
            <div className="health-insurance-v2-cta-wave health-insurance-v2-cta-wave-two" />

          </div>

        </div>

      </section>

    </main>
  );
};

export default HealthInsurance;