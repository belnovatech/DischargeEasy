import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="legal-page">

      {/* HERO */}
      <section className="legal-hero">
        <div className="legal-hero-inner">

          <span className="legal-badge">
            LEGAL
          </span>

          <h1>
            Privacy Policy
          </h1>

          <p>
            Your privacy matters to us. This policy explains
            how DischargeEasy collects, uses and protects
            information when you use our website and services.
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
              Your Information. Your Trust.
            </h2>

            <p>
              DischargeEasy is committed to handling your
              information responsibly. We collect and use
              information only for legitimate business,
              service and communication purposes and in
              accordance with applicable requirements.
            </p>
          </div>

          <section className="legal-section">
            <h2>1. Information We Collect</h2>

            <p>
              Depending on the service you request, we may
              collect information such as your name, mobile
              number, email address, city, hospital details,
              insurance company, policy information and
              information you voluntarily provide through our
              forms or communications.
            </p>

            <p>
              We may also collect technical information
              associated with your use of the website, such as
              browser type, device information, IP address and
              website usage information where applicable.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>

            <p>
              Information may be used to:
            </p>

            <ul>
              <li>Respond to your enquiries and requests.</li>
              <li>Provide insurance assistance and coordination.</li>
              <li>Assist with claim or reimbursement processes.</li>
              <li>Coordinate hospital-related assistance.</li>
              <li>Contact you regarding your requested service.</li>
              <li>Improve our website and services.</li>
              <li>Maintain records and comply with applicable obligations.</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Sharing of Information</h2>

            <p>
              Where necessary to provide a requested service,
              information may be shared with relevant service
              providers, insurers, TPAs, hospitals or other
              parties involved in the applicable process.
            </p>

            <p>
              We do not intend to sell personal information
              merely for commercial advertising purposes.
              Information may also be disclosed where required
              by law or to protect our legal rights.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Information Security</h2>

            <p>
              We take reasonable measures designed to protect
              information against unauthorized access, misuse,
              alteration, disclosure or destruction.
            </p>

            <p>
              However, no internet transmission or electronic
              storage system can be guaranteed to be completely
              secure.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Cookies and Website Technologies</h2>

            <p>
              Our website may use cookies or similar technologies
              to support website functionality, understand usage
              patterns and improve the user experience.
            </p>

            <p>
              You may be able to control cookies through your
              browser settings. Disabling certain cookies may
              affect some website functionality.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Data Retention</h2>

            <p>
              We may retain information for as long as reasonably
              necessary for the purposes for which it was
              collected, to provide requested services, maintain
              records, resolve disputes or comply with applicable
              legal and regulatory requirements.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your Choices</h2>

            <p>
              Depending on applicable law, you may have rights
              regarding access, correction or other handling of
              your personal information.
            </p>

            <p>
              If you have a privacy-related request, please
              contact us using the contact details provided on
              our website.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Third-Party Websites</h2>

            <p>
              Our website may contain links to third-party
              websites or services. DischargeEasy is not
              responsible for the privacy practices of external
              websites. We recommend reviewing their respective
              privacy policies.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Changes to This Policy</h2>

            <p>
              We may update this Privacy Policy from time to
              time. Changes will be reflected on this page with
              an updated revision date.
            </p>
          </section>

          <section className="legal-contact-card">
            <h2>
              Privacy Questions?
            </h2>

            <p>
              If you have questions about this Privacy Policy
              or how your information is handled, please contact
              DischargeEasy.
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

export default PrivacyPolicy;