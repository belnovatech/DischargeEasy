import React from 'react';
import './AboutUs.css';
import supportImg from '../../assets/images/human-support.png';

interface AboutValue {
  number: string;
  title: string;
  description: string;
}

interface AboutPoint {
  title: string;
  description: string;
}

const values: AboutValue[] = [
  {
    number: '01',
    title: 'Patient First',
    description:
      'Every decision starts with what is best for the patient and their family during a difficult healthcare journey.',
  },
  {
    number: '02',
    title: 'Clear & Honest',
    description:
      'We explain policies, documents, procedures, and claim requirements in simple language without unnecessary jargon.',
  },
  {
    number: '03',
    title: 'Human Support',
    description:
      'Technology can organize information, but people provide the understanding and support families actually need.',
  },
  {
    number: '04',
    title: 'Stay Involved',
    description:
      'We believe meaningful assistance means staying connected throughout the process instead of disappearing after the first call.',
  },
];

const supportPoints: AboutPoint[] = [
  {
    title: 'Hospital Coordination',
    description:
      'Helping families understand and coordinate with hospital billing and insurance desks.',
  },
  {
    title: 'Insurance Guidance',
    description:
      'Making complicated policy information easier to understand before and during hospitalization.',
  },
  {
    title: 'Claims Support',
    description:
      'Helping organize documentation and follow-ups required during the claim process.',
  },
  {
    title: 'Family Assistance',
    description:
      'Reducing administrative stress so families can focus more on recovery and each other.',
  },
];

export const AboutUs: React.FC = () => {
  return (
    <div className="de-about-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="de-about-hero">

        <div className="de-about-hero-circle de-about-circle-one" />
        <div className="de-about-hero-circle de-about-circle-two" />

        <div className="de-about-container">

          <div className="de-about-hero-content">

            <span className="de-about-eyebrow">
              ABOUT DISCHARGEEASY
            </span>

            <h1>
              Making Healthcare
              <br />
              <span>Easier For Families.</span>
            </h1>

            <p>
              We are a compassionate team of healthcare administrators
              and claims experts helping families navigate the difficult
              parts of hospital and insurance administration.
            </p>

            <div className="de-about-hero-note">

              <span className="de-about-note-icon">
                ✓
              </span>

              <span>
                Human support when you need it most.
              </span>

            </div>

          </div>

        </div>

        <div className="de-about-hero-wave">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 60 C180 60 230 20 400 20 C570 20 620 66 780 66 C940 66 1000 23 1160 23 C1320 23 1360 60 1440 60"
            />
          </svg>
        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <section className="de-about-story">

        <div className="de-about-container">

          <div className="de-about-story-grid">

            <div className="de-about-story-heading">

              <span className="de-about-small-label">
                OUR STORY
              </span>

              <h2>
                Healthcare Is
                <br />
                <span>Already Difficult.</span>
              </h2>

              <div className="de-about-story-line" />

            </div>

            <div className="de-about-story-content">

              <p>
                Hospitalization can be overwhelming. Families have to
                think about treatment, doctors, medicines, finances,
                documents, insurance policies, and hospital procedures
                at the same time.
              </p>

              <p>
                DischargeEasy was created after seeing families struggle
                at hospital TPA and insurance desks while their loved
                ones were recovering.
              </p>

              <p>
                We wanted to bridge that gap with something simple:
                <strong> real human assistance when it matters.</strong>
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ===================================================== */}
      <section className="de-about-mission">

        <div className="de-about-container">

          <div className="de-about-mission-card">

            <div className="de-about-mission-content">

              <span className="de-about-small-label">
                OUR MISSION
              </span>

              <h2>
                Eliminate
                <br />
                <span>Insurance Stress.</span>
              </h2>

              <p>
                Our mission is to make hospital and insurance
                administration easier for patients and families.
              </p>

              <p>
                We don't believe families should have to become
                insurance experts while dealing with a medical situation.
                Our role is to explain, coordinate, and guide.
              </p>

              <div className="de-about-mission-points">

                <div>
                  <span>01</span>
                  <p>Simple explanations</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Practical coordination</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Human assistance</p>
                </div>

              </div>

            </div>

            <div className="de-about-mission-image">

              <div className="de-about-image-frame">

                <img
                  src={supportImg}
                  alt="Compassionate healthcare administration support"
                />

              </div>

              <div className="de-about-image-badge">

                <strong>
                  Human
                </strong>

                <span>
                  Support
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="de-about-values">

        <div className="de-about-container">

          <div className="de-about-section-heading">

            <span className="de-about-small-label">
              WHAT WE BELIEVE
            </span>

            <h2>
              Built Around
              <br />
              <span>People, Not Paperwork.</span>
            </h2>

            <p>
              Our approach is guided by a few principles that
              shape every interaction with patients and families.
            </p>

          </div>


          <div className="de-about-values-grid">

            {values.map((value) => (
              <article
                className="de-about-value-card"
                key={value.number}
              >

                <div className="de-about-value-number">
                  {value.number}
                </div>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE DO
      ===================================================== */}
      <section className="de-about-support">

        <div className="de-about-container">

          <div className="de-about-support-grid">

            <div className="de-about-support-image">

              <img
                src={supportImg}
                alt="DischargeEasy human support"
              />

              <div className="de-about-support-caption">
                <span>
                  YOUR SUPPORT TEAM
                </span>

                <strong>
                  Here when you need us.
                </strong>
              </div>

            </div>


            <div className="de-about-support-content">

              <span className="de-about-small-label">
                HOW WE HELP
              </span>

              <h2>
                We Handle The
                <br />
                <span>Complicated Parts.</span>
              </h2>

              <p className="de-about-support-intro">
                Our assistance is designed to reduce the
                administrative burden around hospitalization
                and insurance.
              </p>


              <div className="de-about-support-list">

                {supportPoints.map((point, index) => (
                  <div
                    className="de-about-support-item"
                    key={point.title}
                  >

                    <div className="de-about-support-number">
                      0{index + 1}
                    </div>

                    <div>
                      <h3>
                        {point.title}
                      </h3>

                      <p>
                        {point.description}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRUST
      ===================================================== */}
      <section className="de-about-trust">

        <div className="de-about-container">

          <div className="de-about-trust-inner">

            <div className="de-about-trust-heading">

              <span className="de-about-small-label">
                OUR COMMITMENT
              </span>

              <h2>
                Support You Can
                <br />
                <span>Feel Confident About.</span>
              </h2>

            </div>


            <div className="de-about-trust-items">

              <div className="de-about-trust-item">
                <span>✓</span>
                <p>Transparent guidance</p>
              </div>

              <div className="de-about-trust-item">
                <span>✓</span>
                <p>Patient-focused assistance</p>
              </div>

              <div className="de-about-trust-item">
                <span>✓</span>
                <p>Dedicated human support</p>
              </div>

              <div className="de-about-trust-item">
                <span>✓</span>
                <p>Practical claim guidance</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="de-about-final">

        <div className="de-about-final-wave">

          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 60 C180 60 230 20 400 20 C570 20 620 66 780 66 C940 66 1000 23 1160 23 C1320 23 1360 60 1440 60"
            />
          </svg>

        </div>

        <div className="de-about-container">

          <div className="de-about-final-card">

            <span>
              LET'S MAKE THINGS EASIER
            </span>

            <h2>
              You Focus On Your
              <br />
              <strong>Health. We'll Help With The Rest.</strong>
            </h2>

            <p>
              Get in touch with our team and tell us what
              you need help with.
            </p>

            <button
              type="button"
              className="de-about-final-button"
            >
              Talk To Our Team
              <span>→</span>
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutUs;