import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="privacy-page">

      {/* =========================
          HERO
      ========================== */}
      <section className="privacy-hero">
        <div className="privacy-hero-glow privacy-hero-glow-one" />
        <div className="privacy-hero-glow privacy-hero-glow-two" />

        <div className="privacy-hero-inner">

          <div className="privacy-hero-badge">
            <span className="privacy-hero-badge-dot" />
            LEGAL &amp; PRIVACY
          </div>

          <h1>
            Privacy <span>Policy</span>
          </h1>

          <p>
            Your privacy matters to us. Learn how DischargeEasy
            collects, uses, stores, shares and protects your
            information when you use our website and services.
          </p>

          <div className="privacy-hero-meta">
            <div className="privacy-meta-item">
              <span>Effective Date</span>
              <strong>[DD/MM/YYYY]</strong>
            </div>

            <div className="privacy-meta-divider" />

            <div className="privacy-meta-item">
              <span>Last Updated</span>
              <strong>21 August 2026</strong>
            </div>
          </div>

        </div>
      </section>


      {/* =========================
          CONTENT
      ========================== */}
      <section className="privacy-content">

        <div className="privacy-content-inner">

          {/* =========================
              INTRO NOTICE
          ========================== */}
          <div className="privacy-intro-card">

            <div className="privacy-intro-icon">
              <span>✓</span>
            </div>

            <div className="privacy-intro-content">
              <span className="privacy-card-label">
                YOUR PRIVACY
              </span>

              <h2>
                Your Information. Your Trust.
              </h2>

              <p>
                DischargeEasy respects your privacy and is committed
                to protecting your personal information. We collect
                and use information only for legitimate service,
                business and communication purposes and in accordance
                with applicable requirements.
              </p>

              <p>
                By using the DischargeEasy website or submitting
                your information to us, you acknowledge that you
                have read and understood this Privacy Policy.
              </p>
            </div>

          </div>


          {/* =========================
              SECTION 1
          ========================== */}
          <section className="privacy-section privacy-section-featured">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                01
              </div>

              <div>
                <span className="privacy-section-label">
                  INFORMATION
                </span>

                <h2>
                  Information We Collect
                </h2>
              </div>
            </div>

            <p className="privacy-section-description">
              Depending on the service you request, we may collect
              the following information.
            </p>


            <div className="privacy-info-grid">

              {/* PERSONAL INFORMATION */}
              <article className="privacy-info-card">
                <div className="privacy-info-card-top">
                  <div className="privacy-info-icon">
                    <span>01</span>
                  </div>

                  <span className="privacy-info-tag">
                    PERSONAL
                  </span>
                </div>

                <h3>
                  Personal Information
                </h3>

                <ul>
                  <li>Full name</li>
                  <li>Mobile number</li>
                  <li>Email address</li>
                  <li>City</li>
                  <li>Communication preferences</li>
                  <li>
                    Other information voluntarily provided
                    through our forms
                  </li>
                </ul>
              </article>


              {/* INSURANCE INFORMATION */}
              <article className="privacy-info-card">
                <div className="privacy-info-card-top">
                  <div className="privacy-info-icon">
                    <span>02</span>
                  </div>

                  <span className="privacy-info-tag">
                    INSURANCE
                  </span>
                </div>

                <h3>
                  Insurance Information
                </h3>

                <p>
                  If you request insurance or claim assistance,
                  we may collect:
                </p>

                <ul>
                  <li>Insurance company name</li>
                  <li>Policy number</li>
                  <li>Policy type</li>
                  <li>Policy-related information</li>
                  <li>Policy documents</li>
                  <li>Claim-related information</li>
                </ul>
              </article>


              {/* HOSPITAL INFORMATION */}
              <article className="privacy-info-card privacy-info-card-wide">
                <div className="privacy-info-card-top">
                  <div className="privacy-info-icon">
                    <span>03</span>
                  </div>

                  <span className="privacy-info-tag">
                    CLAIM &amp; HOSPITAL
                  </span>
                </div>

                <h3>
                  Hospital and Claim Information
                </h3>

                <p>
                  If you request claim or reimbursement assistance,
                  we may collect information such as:
                </p>

                <div className="privacy-document-grid">
                  <span>Hospital name</span>
                  <span>Hospitalization date</span>
                  <span>Discharge date</span>
                  <span>Claim type</span>
                  <span>Hospital bills</span>
                  <span>Payment receipts</span>
                  <span>Discharge summary</span>
                  <span>Medical reports</span>
                  <span>Prescriptions</span>
                  <span>Investigation reports</span>
                  <span>Other claim documents</span>
                </div>
              </article>

            </div>


            <div className="privacy-minimal-note">
              <span className="privacy-note-icon">i</span>

              <p>
                We aim to collect only information that is reasonably
                necessary for providing the requested service or
                assistance.
              </p>
            </div>

          </section>


          {/* =========================
              SECTION 2
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                02
              </div>

              <div>
                <span className="privacy-section-label">
                  COLLECTION
                </span>

                <h2>
                  How We Collect Information
                </h2>
              </div>
            </div>

            <p className="privacy-section-description">
              We may collect information when you interact with
              DischargeEasy through our website, services or
              communication channels.
            </p>

            <div className="privacy-list-card">
              <div className="privacy-check-list">

                <div>Submit an enquiry form</div>
                <div>Request a callback</div>
                <div>Request insurance assistance</div>
                <div>Request claim assistance</div>
                <div>Request reimbursement assistance</div>
                <div>Contact us by phone, email or WhatsApp</div>
                <div>Make a payment for an applicable service</div>
                <div>Interact with our website</div>
                <div>Communicate with our support team</div>

              </div>
            </div>

          </section>


          {/* =========================
              SECTION 3
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                03
              </div>

              <div>
                <span className="privacy-section-label">
                  PURPOSE
                </span>

                <h2>
                  How We Use Your Information
                </h2>
              </div>
            </div>

            <p className="privacy-section-description">
              We may use your information for the following purposes:
            </p>

            <div className="privacy-purpose-grid">

              <div>Respond to your enquiries</div>
              <div>Contact you regarding your request</div>
              <div>Provide insurance-related guidance</div>
              <div>Help you understand available insurance options</div>
              <div>Process assistance requests</div>
              <div>Provide applicable claim assistance</div>
              <div>Provide reimbursement claim assistance</div>
              <div>Provide documentation guidance</div>
              <div>Coordinate with relevant parties</div>
              <div>Process payments for paid services</div>
              <div>Provide customer support</div>
              <div>Maintain service records</div>
              <div>Improve our website and services</div>
              <div>Prevent misuse or fraudulent activity</div>
              <div>Comply with legal and regulatory requirements</div>

            </div>

            <div className="privacy-highlight-card">
              <span className="privacy-highlight-icon">✓</span>

              <p>
                Personal data should be processed for lawful purposes
                and, where consent is the basis, with appropriate
                notice and consent in accordance with applicable
                data-protection requirements.
              </p>
            </div>

          </section>


          {/* =========================
              SECTION 4
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                04
              </div>

              <div>
                <span className="privacy-section-label">
                  SHARING
                </span>

                <h2>
                  Insurance and Claim Information
                </h2>
              </div>
            </div>

            <p className="privacy-section-description">
              When you request insurance or claim assistance,
              certain information may need to be shared with
              relevant parties for the purpose of providing the
              requested service.
            </p>

            <div className="privacy-partner-grid">
              <span>Insurance companies</span>
              <span>TPAs</span>
              <span>Insurance intermediaries</span>
              <span>Hospitals</span>
              <span>Authorized service providers</span>
              <span>Payment service providers</span>
              <span>Other relevant parties</span>
            </div>

            <p className="privacy-bottom-text">
              We aim to share information only where reasonably
              necessary for the requested service or where required
              or permitted by applicable law.
            </p>

          </section>


          {/* =========================
              SECTION 5
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                05
              </div>

              <div>
                <span className="privacy-section-label">
                  CONSENT
                </span>

                <h2>
                  Consent
                </h2>
              </div>
            </div>

            <div className="privacy-text-stack">
              <p>
                Where consent is required for processing your
                personal information, DischargeEasy will seek
                consent in an appropriate manner.
              </p>

              <p>
                You should provide accurate and complete information
                when submitting forms or documents.
              </p>

              <p>
                Where applicable law provides a right to withdraw
                consent, you may request withdrawal through the
                contact details provided below. Withdrawal of
                consent may affect our ability to provide certain
                services.
              </p>
            </div>

          </section>


          {/* =========================
              SECTION 6
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                06
              </div>

              <div>
                <span className="privacy-section-label">
                  SECURITY
                </span>

                <h2>
                  Data Security
                </h2>
              </div>
            </div>

            <p className="privacy-section-description">
              DischargeEasy takes reasonable technical and
              organizational measures to protect personal
              information against:
            </p>

            <div className="privacy-security-grid">
              <span>Unauthorized access</span>
              <span>Unauthorized disclosure</span>
              <span>Loss</span>
              <span>Misuse</span>
              <span>Alteration</span>
              <span>Destruction</span>
            </div>

            <div className="privacy-warning-card">
              <span>!</span>

              <p>
                However, no method of transmission or electronic
                storage can be guaranteed to be completely secure.
              </p>
            </div>

          </section>


          {/* =========================
              SECTION 7
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                07
              </div>

              <div>
                <span className="privacy-section-label">
                  RETENTION
                </span>

                <h2>
                  Data Retention
                </h2>
              </div>
            </div>

            <p className="privacy-section-description">
              We may retain your information for as long as
              reasonably necessary for:
            </p>

            <div className="privacy-retention-list">

              <div>
                <span>01</span>
                Providing requested services
              </div>

              <div>
                <span>02</span>
                Processing and following up on requests
              </div>

              <div>
                <span>03</span>
                Maintaining business records
              </div>

              <div>
                <span>04</span>
                Resolving disputes
              </div>

              <div>
                <span>05</span>
                Meeting legal or regulatory requirements
              </div>

              <div>
                <span>06</span>
                Protecting our legitimate business interests
              </div>

            </div>

            <p className="privacy-bottom-text">
              The retention period may vary depending on the type
              of information and the service requested.
            </p>

          </section>


          {/* =========================
              SECTION 8
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                08
              </div>

              <div>
                <span className="privacy-section-label">
                  WEBSITE
                </span>

                <h2>
                  Cookies and Website Technologies
                </h2>
              </div>
            </div>

            <p className="privacy-section-description">
              The DischargeEasy website may use cookies and
              similar technologies to:
            </p>

            <div className="privacy-purpose-grid privacy-purpose-grid-small">
              <div>Improve website functionality</div>
              <div>Remember preferences</div>
              <div>Understand website usage</div>
              <div>Analyze website performance</div>
              <div>Improve user experience</div>
            </div>

            <p className="privacy-bottom-text">
              You may manage certain cookie settings through
              your browser.
            </p>

          </section>


          {/* =========================
              SECTION 9
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                09
              </div>

              <div>
                <span className="privacy-section-label">
                  THIRD PARTIES
                </span>

                <h2>
                  Third-Party Services
                </h2>
              </div>
            </div>

            <p className="privacy-section-description">
              DischargeEasy may use third-party service providers
              for purposes such as:
            </p>

            <div className="privacy-partner-grid">
              <span>Website hosting</span>
              <span>Payment processing</span>
              <span>Communication</span>
              <span>Analytics</span>
              <span>Customer support</span>
              <span>Technology services</span>
            </div>

            <p className="privacy-bottom-text">
              These third parties may process information according
              to their own terms and applicable privacy policies.
            </p>

          </section>


          {/* =========================
              SECTION 10
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                10
              </div>

              <div>
                <span className="privacy-section-label">
                  DOCUMENTS
                </span>

                <h2>
                  Insurance and Medical Documents
                </h2>
              </div>
            </div>

            <p>
              If you voluntarily provide insurance, hospital,
              medical, billing, or claim-related documents for
              the purpose of receiving assistance, we may process
              those documents to provide the requested service.
            </p>

            <div className="privacy-document-note">
              <span>i</span>

              <p>
                Customers should share only documents and
                information that are relevant to the requested
                service.
              </p>
            </div>

          </section>


          {/* =========================
              SECTION 11
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                11
              </div>

              <div>
                <span className="privacy-section-label">
                  ACCURACY
                </span>

                <h2>
                  Accuracy of Information
                </h2>
              </div>
            </div>

            <p>
              You are responsible for ensuring that the information
              and documents provided to DischargeEasy are accurate
              and genuine.
            </p>

            <p>
              DischargeEasy is not responsible for problems resulting
              from inaccurate, incomplete, misleading, or fraudulent
              information provided by a customer.
            </p>

          </section>


          {/* =========================
              SECTION 12
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                12
              </div>

              <div>
                <span className="privacy-section-label">
                  CHILDREN
                </span>

                <h2>
                  Children's Privacy
                </h2>
              </div>
            </div>

            <p>
              The DischargeEasy website is not intentionally designed
              to collect information directly from children.
            </p>

            <p>
              Where information relating to a minor is required for
              a legitimate service, it should be provided by or
              through an appropriate parent, guardian, or authorized
              person.
            </p>

          </section>


          {/* =========================
              SECTION 13
          ========================== */}
          <section className="privacy-section privacy-rights-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                13
              </div>

              <div>
                <span className="privacy-section-label">
                  YOUR RIGHTS
                </span>

                <h2>
                  Your Privacy Rights
                </h2>
              </div>
            </div>

            <p className="privacy-section-description">
              Subject to applicable law, you may have rights
              relating to your personal information, including
              applicable rights to:
            </p>

            <div className="privacy-rights-grid">

              <div>
                <span>✓</span>
                Request information about your personal data
              </div>

              <div>
                <span>✓</span>
                Request correction of inaccurate information
              </div>

              <div>
                <span>✓</span>
                Request deletion where legally applicable
              </div>

              <div>
                <span>✓</span>
                Withdraw consent where consent is the basis
              </div>

              <div>
                <span>✓</span>
                Raise a privacy-related complaint
              </div>

            </div>

            <p className="privacy-bottom-text">
              Requests may be submitted using the contact details
              provided below.
            </p>

          </section>


          {/* =========================
              SECTION 14
          ========================== */}
          <section className="privacy-section">

            <div className="privacy-section-heading">
              <div className="privacy-section-number">
                14
              </div>

              <div>
                <span className="privacy-section-label">
                  UPDATES
                </span>

                <h2>
                  Changes to This Privacy Policy
                </h2>
              </div>
            </div>

            <p>
              DischargeEasy may update this Privacy Policy from
              time to time.
            </p>

            <p>
              When changes are made, the updated version will be
              published on this page with a revised "Last Updated"
              date.
            </p>

          </section>


          {/* =========================
              CONTACT
          ========================== */}
          <section className="privacy-contact-card">

            <div className="privacy-contact-glow" />

            <div className="privacy-contact-content">

              <span className="privacy-contact-label">
                GET IN TOUCH
              </span>

              <h2>
                Privacy Questions?
              </h2>

              <p>
                For privacy-related questions, requests, or concerns
                regarding how your information is handled, please
                contact DischargeEasy using the details below.
              </p>

              <div className="privacy-contact-grid">

                <div className="privacy-contact-item">
                  <span>COMPANY</span>
                  <strong>DischargeEasy</strong>
                </div>

                <div className="privacy-contact-item">
                  <span>EMAIL</span>
                  <strong>[Official Email Address]</strong>
                </div>

                <div className="privacy-contact-item">
                  <span>PHONE</span>
                  <strong>[Official Contact Number]</strong>
                </div>

                <div className="privacy-contact-item">
                  <span>ADDRESS</span>
                  <strong>[Registered/Office Address]</strong>
                </div>

                <div className="privacy-contact-item privacy-contact-item-full">
                  <span>PRIVACY CONTACT</span>
                  <strong>[Privacy Contact Email]</strong>
                </div>

              </div>

              <Link
                to="/contact"
                className="privacy-contact-button"
              >
                Contact Us
                <span>→</span>
              </Link>

            </div>

          </section>

        </div>
      </section>

    </main>
  );
};

export default PrivacyPolicy;