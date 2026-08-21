import React from 'react';
import './WhyUs.css';

interface Advantage {
  number: string;
  title: string;
  description: string;
}

interface ComparisonRow {
  area: string;
  traditional: string;
  dischargeEasy: string;
}

interface Testimonial {
  name: string;
  relation: string;
  quote: string;
}

const advantages: Advantage[] = [
  {
    number: '01',
    title: 'Human Guidance',
    description:
      'Speak with a real person who understands the hospital and insurance process instead of trying to figure everything out yourself.',
  },
  {
    number: '02',
    title: 'Hospital Coordination',
    description:
      'We help you understand what is happening between the hospital billing desk, TPA, insurer, and your family.',
  },
  {
    number: '03',
    title: 'Clear Explanations',
    description:
      'Insurance language can be confusing. We break important information into simple, practical explanations.',
  },
  {
    number: '04',
    title: 'Claim-Focused Support',
    description:
      'We help you stay organized with documents, communication, follow-ups, and the administrative side of the claim journey.',
  },
  {
    number: '05',
    title: 'Patient First',
    description:
      'Our priority is reducing the administrative burden so patients and families can focus on treatment and recovery.',
  },
  {
    number: '06',
    title: 'Transparent Approach',
    description:
      'We believe families should understand their options and the process clearly before making important decisions.',
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    area: 'Human assistance',
    traditional: 'Limited availability',
    dischargeEasy: 'Dedicated guidance',
  },
  {
    area: 'Policy understanding',
    traditional: 'Complex documents',
    dischargeEasy: 'Simple explanations',
  },
  {
    area: 'Hospital coordination',
    traditional: 'Family manages it',
    dischargeEasy: 'We help coordinate',
  },
  {
    area: 'Claim follow-ups',
    traditional: 'Multiple follow-ups',
    dischargeEasy: 'Structured assistance',
  },
  {
    area: 'Documentation',
    traditional: 'Easy to miss details',
    dischargeEasy: 'Organized guidance',
  },
  {
    area: 'Family experience',
    traditional: 'More administrative stress',
    dischargeEasy: 'Less confusion',
  },
];

const testimonials: Testimonial[] = [
  {
    name: 'Rahul M.',
    relation: 'Patient family member',
    quote:
      'The biggest relief was having someone explain what was happening at each stage instead of constantly trying to understand the insurance process ourselves.',
  },
  {
    name: 'Priya S.',
    relation: 'Health insurance customer',
    quote:
      'The guidance was simple and practical. We finally understood what information was important and what we needed to do next.',
  },
  {
    name: 'Arun K.',
    relation: 'Hospital support customer',
    quote:
      'During hospitalization there are already so many things to think about. Having support for the administrative side made the experience much easier.',
  },
];

export const WhyUs: React.FC = () => {
  return (
    <div className="de-why-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="de-why-hero">

        <div className="de-why-hero-orb de-why-orb-one" />
        <div className="de-why-hero-orb de-why-orb-two" />

        <div className="de-why-container">

          <div className="de-why-hero-content">

            <span className="de-why-eyebrow">
              WHY DISCHARGEEASY
            </span>

            <h1>
              Because Healthcare
              <br />
              <span>Shouldn't Feel Complicated.</span>
            </h1>

            <p>
              We combine human guidance, practical coordination, and
              insurance knowledge to make difficult hospital moments
              easier for patients and their families.
            </p>

            <div className="de-why-hero-highlights">

              <div>
                <strong>Human</strong>
                <span>Support</span>
              </div>

              <div>
                <strong>Clear</strong>
                <span>Guidance</span>
              </div>

              <div>
                <strong>Patient</strong>
                <span>First</span>
              </div>

            </div>

          </div>

        </div>

        <div className="de-why-hero-wave">
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
          INTRO
      ===================================================== */}
      <section className="de-why-intro">

        <div className="de-why-container">

          <div className="de-why-intro-grid">

            <div>

              <span className="de-why-small-label">
                THE DIFFERENCE
              </span>

              <h2>
                More Than
                <br />
                <span>Just Information.</span>
              </h2>

            </div>

            <div className="de-why-intro-text">

              <p>
                Insurance information is available everywhere.
                What families often need is someone who can help
                them understand what that information means in
                their actual situation.
              </p>

              <p>
                That's where DischargeEasy is different. We focus
                on the human side of healthcare administration.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ADVANTAGES
      ===================================================== */}
      <section className="de-why-advantages">

        <div className="de-why-container">

          <div className="de-why-section-heading">

            <span className="de-why-small-label">
              OUR ADVANTAGES
            </span>

            <h2>
              Six Reasons Families
              <br />
              <span>Choose Us.</span>
            </h2>

            <p>
              We are designed around the real problems families
              experience during hospitalization and insurance claims.
            </p>

          </div>


          <div className="de-why-advantages-grid">

            {advantages.map((item) => (
              <article
                className="de-why-advantage-card"
                key={item.number}
              >

                <div className="de-why-advantage-top">

                  <span className="de-why-number">
                    {item.number}
                  </span>

                  <span className="de-why-mini-check">
                    ✓
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPARISON
      ===================================================== */}
      <section className="de-why-comparison">

        <div className="de-why-container">

          <div className="de-why-section-heading">

            <span className="de-why-small-label">
              THE DISCHARGEEASY DIFFERENCE
            </span>

            <h2>
              A Better Way To
              <br />
              <span>Navigate The Process.</span>
            </h2>

            <p>
              We don't replace your hospital or insurer.
              We make the journey between them easier to understand.
            </p>

          </div>


          <div className="de-why-comparison-card">

            <div className="de-why-comparison-header">

              <div>
                Area
              </div>

              <div>
                Handling It Alone
              </div>

              <div>
                With DischargeEasy
              </div>

            </div>


            {comparisonRows.map((row) => (
              <div
                className="de-why-comparison-row"
                key={row.area}
              >

                <div className="de-why-comparison-area">
                  {row.area}
                </div>

                <div className="de-why-traditional">
                  <span>—</span>
                  {row.traditional}
                </div>

                <div className="de-why-easy">
                  <span>✓</span>
                  {row.dischargeEasy}
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCE STATS
      ===================================================== */}
      <section className="de-why-stats">

        <div className="de-why-container">

          <div className="de-why-stats-grid">

            <div className="de-why-stat">
              <strong>01</strong>
              <span>Human-first approach</span>
            </div>

            <div className="de-why-stat">
              <strong>24/7</strong>
              <span>When hospital situations arise</span>
            </div>

            <div className="de-why-stat">
              <strong>360°</strong>
              <span>Administrative guidance</span>
            </div>

            <div className="de-why-stat">
              <strong>1:1</strong>
              <span>Personalized assistance</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}
      <section className="de-why-testimonials">

        <div className="de-why-container">

          <div className="de-why-section-heading">

            <span className="de-why-small-label">
              FAMILIES WE SUPPORT
            </span>

            <h2>
              What The Experience
              <br />
              <span>Feels Like.</span>
            </h2>

            <p>
              The real value of support is often felt in the
              moments when families have the most to handle.
            </p>

          </div>


          <div className="de-why-testimonial-grid">

            {testimonials.map((testimonial) => (
              <article
                className="de-why-testimonial-card"
                key={testimonial.name}
              >

                <div className="de-why-quote-mark">
                  “
                </div>

                <div className="de-why-stars">
                  ★★★★★
                </div>

                <p>
                  {testimonial.quote}
                </p>

                <div className="de-why-testimonial-person">

                  <div className="de-why-avatar">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <strong>
                      {testimonial.name}
                    </strong>

                    <span>
                      {testimonial.relation}
                    </span>
                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="de-why-final">

        <div className="de-why-final-wave">

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

        <div className="de-why-container">

          <div className="de-why-final-card">

            <span>
              WHEN YOU NEED SUPPORT
            </span>

            <h2>
              Don't Navigate It
              <br />
              <strong>Alone.</strong>
            </h2>

            <p>
              Tell us what you are dealing with and let our
              team help you understand what comes next.
            </p>

            <button
              type="button"
              className="de-why-final-button"
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

export default WhyUs;