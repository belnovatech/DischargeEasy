import React from 'react';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css';

const TermsAndConditions: React.FC = () => {
  return (
    <main className="legal-page">

      {/* HERO */}
      <section className="legal-hero">
        <div className="legal-hero-inner">

          <span className="legal-badge">
            LEGAL
          </span>

          <h1>
            Terms &amp; Conditions
          </h1>

          <p>
            These terms explain the conditions that apply
            when you access the DischargeEasy website or
            request our assistance services.
          </p>

          <span className="legal-updated">
            Last Updated: 21 August 2026
          </span>

        </div>
      </section>

      {/* CONTENT */}
      <section className="legal-content">

        <div className="legal-content-inner">

          <div className="legal-intro-card">
            <h2>
              Please Read These Terms Carefully
            </h2>

            <p>
              By using this website or requesting services
              from DischargeEasy, you acknowledge that you
              have read and understood the applicable terms
              and agree to comply with them.
            </p>
          </div>

          <section className="legal-section">
            <h2>1. About DischargeEasy</h2>

            <p>
              DischargeEasy provides insurance assistance,
              guidance and coordination services. Depending
              on the service requested, this may include
              assistance relating to health insurance,
              term insurance, claims, reimbursement or
              hospital-related processes.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Use of Our Website</h2>

            <p>
              You agree to use the website for lawful purposes
              and not to misuse, disrupt, damage or attempt to
              gain unauthorized access to the website or its
              systems.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Assistance Services</h2>

            <p>
              Our services are intended to provide guidance,
              coordination and assistance based on the
              information made available to us.
            </p>

            <p>
              The specific assistance available may depend on
              your circumstances, the applicable policy and
              the processes of the relevant insurer, TPA,
              hospital or other third party.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Insurance Decisions</h2>

            <p>
              DischargeEasy does not independently determine
              whether an insurance claim will be approved,
              rejected, admitted or reimbursed.
            </p>

            <p>
              Such decisions remain subject to the applicable
              insurance policy and the processes and decisions
              of the relevant insurer or TPA.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Information Provided by You</h2>

            <p>
              You are responsible for providing information
              that is accurate and complete to the best of
              your knowledge.
            </p>

            <p>
              Delays or incorrect information may affect the
              ability to provide assistance or coordinate a
              particular request.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Service Fees</h2>

            <p>
              Certain assistance services may involve service
              fees. Where applicable, the relevant fee and
              service scope should be communicated before the
              service is requested or provided.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Third-Party Processes</h2>

            <p>
              Insurance claims, reimbursements, hospital
              processes and related matters may involve
              third parties including insurers, TPAs,
              hospitals and other service providers.
            </p>

            <p>
              DischargeEasy cannot control the independent
              decisions, timelines, systems or policies of
              such third parties.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. No Guarantee</h2>

            <p>
              Assistance from DischargeEasy does not guarantee
              claim approval, reimbursement, settlement,
              admission, cashless authorization or any
              particular outcome.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Intellectual Property</h2>

            <p>
              Website content, branding, graphics, logos,
              text and other materials belonging to
              DischargeEasy may not be copied, reproduced,
              modified or distributed without appropriate
              authorization.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Limitation of Liability</h2>

            <p>
              To the extent permitted by applicable law,
              DischargeEasy will not be responsible for
              decisions, delays, exclusions, deductions or
              outcomes determined independently by insurers,
              TPAs, hospitals or other third parties.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Changes to These Terms</h2>

            <p>
              We may update these Terms &amp; Conditions from
              time to time. Updated terms will be published
              on this page with a revised date.
            </p>
          </section>

          <section className="legal-contact-card">
            <h2>
              Questions About Our Terms?
            </h2>

            <p>
              If you have questions regarding these terms
              or our services, please contact the
              DischargeEasy team.
            </p>

            <Link
              to="/contact"
              className="legal-button"
            >
              Contact Us
            </Link>
          </section>

        </div>
      </section>

    </main>
  );
};

export default TermsAndConditions;