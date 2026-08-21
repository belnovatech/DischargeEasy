import React from 'react';
import { Link } from 'react-router-dom';
import './TermsAndConditions.css';

const TermsAndConditions: React.FC = () => {
  return (
    <main className="terms-page">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="terms-hero">

        <div className="terms-hero-glow terms-hero-glow-one" />
        <div className="terms-hero-glow terms-hero-glow-two" />

        <div className="terms-hero-grid" />

        <div className="terms-hero-content">

          <div className="terms-hero-badge">
            <span className="terms-badge-dot" />
            LEGAL
          </div>

          <h1>
            Terms <span>&amp;</span> Conditions
          </h1>

          <p>
            Please review the terms that govern your access to
            DischargeEasy and your use of our insurance,
            claim assistance, hospital assistance and
            related services.
          </p>

          <div className="terms-hero-meta">

            <div className="terms-meta-item">
              <span>Effective Date</span>
              <strong>21 August 2026</strong>
            </div>

            <div className="terms-meta-divider" />

            <div className="terms-meta-item">
              <span>Last Updated</span>
              <strong>21 August 2026</strong>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTENT
      ===================================================== */}
      <section className="terms-content">

        <div className="terms-content-container">

          {/* =================================================
              INTRO
          ================================================= */}
          <div className="terms-intro-card">

            <div className="terms-intro-icon">
              <span>✓</span>
            </div>

            <div className="terms-intro-content">

              <span className="terms-intro-label">
                PLEASE READ
              </span>

              <h2>
                Welcome to DischargeEasy
              </h2>

              <p>
                These Terms &amp; Conditions ("Terms") govern your
                access to and use of the DischargeEasy website
                and services.
              </p>

              <p>
                By accessing our website, submitting an enquiry,
                requesting assistance, or using our services,
                you agree to these Terms.
              </p>

              <p>
                If you do not agree with these Terms, please do
                not use the website or services.
              </p>

            </div>

          </div>


          {/* =================================================
              1. ABOUT DISCHARGEEASY
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              01
            </div>

            <div className="terms-section-body">

              <h2>About DischargeEasy</h2>

              <p>
                DischargeEasy is a healthcare and insurance
                assistance platform providing services that
                may include:
              </p>

              <div className="terms-feature-grid">

                <div className="terms-feature-item">
                  <span>01</span>
                  <strong>Health Insurance guidance</strong>
                </div>

                <div className="terms-feature-item">
                  <span>02</span>
                  <strong>Term Insurance guidance</strong>
                </div>

                <div className="terms-feature-item">
                  <span>03</span>
                  <strong>Insurance-related assistance</strong>
                </div>

                <div className="terms-feature-item">
                  <span>04</span>
                  <strong>Hospital assistance</strong>
                </div>

                <div className="terms-feature-item">
                  <span>05</span>
                  <strong>Cashless claim assistance</strong>
                </div>

                <div className="terms-feature-item">
                  <span>06</span>
                  <strong>Reimbursement claim assistance</strong>
                </div>

                <div className="terms-feature-item">
                  <span>07</span>
                  <strong>Documentation guidance</strong>
                </div>

                <div className="terms-feature-item">
                  <span>08</span>
                  <strong>Insurance / TPA coordination</strong>
                </div>

                <div className="terms-feature-item">
                  <span>09</span>
                  <strong>Customer support</strong>
                </div>

              </div>

              <p>
                The availability and scope of services may vary
                depending on the customer's requirement, location,
                insurance policy, insurer, service arrangement,
                and applicable terms.
              </p>

            </div>

          </section>


          {/* =================================================
              2. INSURANCE PRODUCTS
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              02
            </div>

            <div className="terms-section-body">

              <h2>Insurance Products</h2>

              <p>
                Where insurance products are offered through
                DischargeEasy or through applicable partners,
                the actual insurance policy is issued by the
                relevant insurance company.
              </p>

              <p>
                The applicable insurer is responsible for the
                insurance contract and its terms.
              </p>

              <div className="terms-highlight-box">
                <div className="terms-highlight-icon">!</div>

                <div>
                  <strong>
                    DischargeEasy does not determine:
                  </strong>

                  <div className="terms-chip-list">
                    <span>Policy eligibility</span>
                    <span>Underwriting decisions</span>
                    <span>Premiums</span>
                    <span>Policy coverage</span>
                    <span>Exclusions</span>
                    <span>Waiting periods</span>
                    <span>Claim admissibility</span>
                    <span>Claim settlement</span>
                  </div>
                </div>
              </div>

              <p>
                Customers should carefully review the final
                policy document and applicable terms before
                purchasing an insurance policy.
              </p>

            </div>

          </section>


          {/* =================================================
              3. INSURANCE GUIDANCE
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              03
            </div>

            <div className="terms-section-body">

              <h2>Insurance Guidance</h2>

              <p>
                DischargeEasy may provide information and guidance
                to help customers understand insurance options.
              </p>

              <p>
                However, customers are responsible for reviewing
                the final policy documents and understanding the
                applicable:
              </p>

              <div className="terms-pill-grid">

                <span>Coverage</span>
                <span>Exclusions</span>
                <span>Waiting periods</span>
                <span>Limits</span>
                <span>Conditions</span>
                <span>Benefits</span>
                <span>Premium</span>
                <span>Eligibility requirements</span>

              </div>

              <div className="terms-note-box">
                <strong>Important:</strong>
                <span>
                  The final insurance policy issued by the
                  applicable insurer governs the insurance
                  contract.
                </span>
              </div>

            </div>

          </section>


          {/* =================================================
              4. CLAIM ASSISTANCE
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              04
            </div>

            <div className="terms-section-body">

              <h2>Claim Assistance</h2>

              <p>
                DischargeEasy may assist customers with applicable
                insurance claim processes.
              </p>

              <p>Assistance may include:</p>

              <ul className="terms-modern-list">
                <li>Understanding the claim process</li>
                <li>Documentation guidance</li>
                <li>Hospital coordination</li>
                <li>Insurance / TPA coordination</li>
                <li>Claim submission guidance</li>
                <li>Reimbursement claim guidance</li>
                <li>Follow-up assistance</li>
              </ul>

              <div className="terms-warning-box">
                <span className="terms-warning-icon">!</span>

                <p>
                  DischargeEasy does not guarantee the approval,
                  acceptance, reimbursement, or settlement of any
                  insurance claim.
                </p>
              </div>

              <p>
                The final claim decision is made by the applicable
                insurer / TPA according to the relevant insurance
                policy and applicable processes.
              </p>

            </div>

          </section>


          {/* =================================================
              5. CLAIM ASSISTANCE FOR DISCHARGEEASY CUSTOMERS
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              05
            </div>

            <div className="terms-section-body">

              <h2>
                Claim Assistance for DischargeEasy Customers
              </h2>

              <p>
                Customers who purchase eligible insurance through
                DischargeEasy may receive applicable claim
                assistance without an additional claim-assistance
                service fee.
              </p>

              <p>Eligibility may depend on:</p>

              <div className="terms-pill-grid">
                <span>Insurance product</span>
                <span>Policy</span>
                <span>Customer status</span>
                <span>Applicable service arrangement</span>
                <span>Terms applicable at the time of purchase</span>
              </div>

              <div className="terms-gradient-callout">
                <strong>FREE CLAIM ASSISTANCE</strong>

                <p>
                  Free claim assistance does not mean that the
                  insurance claim itself is guaranteed.
                </p>
              </div>

            </div>

          </section>


          {/* =================================================
              6. CUSTOMERS INSURED ELSEWHERE
          ================================================= */}
          <section className="terms-section-card terms-paid-service-card">

            <div className="terms-section-number">
              06
            </div>

            <div className="terms-section-body">

              <h2>
                Claim Assistance for Customers Insured Elsewhere
              </h2>

              <p>
                Customers who purchased insurance through another
                platform, agent, insurer, or provider may also
                request applicable claim assistance from
                DischargeEasy.
              </p>

              <div className="terms-price-card">

                <div>
                  <span>ASSISTANCE SERVICE FEE</span>
                  <strong>₹999</strong>
                  <small>per claim</small>
                </div>

                <div className="terms-price-arrow">
                  →
                </div>

                <div className="terms-price-description">
                  DischargeEasy assistance service
                </div>

              </div>

              <p>
                The ₹999 fee is for the DischargeEasy assistance
                service.
              </p>

              <p>It is not:</p>

              <div className="terms-not-list">

                <div>
                  <span>×</span>
                  <strong>An insurance premium</strong>
                </div>

                <div>
                  <span>×</span>
                  <strong>A hospital charge</strong>
                </div>

                <div>
                  <span>×</span>
                  <strong>An insurer charge</strong>
                </div>

                <div>
                  <span>×</span>
                  <strong>A TPA charge</strong>
                </div>

                <div>
                  <span>×</span>
                  <strong>A guarantee of claim approval</strong>
                </div>

                <div>
                  <span>×</span>
                  <strong>A guarantee of reimbursement</strong>
                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              7. REIMBURSEMENT
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              07
            </div>

            <div className="terms-section-body">

              <h2>Reimbursement Claim Assistance</h2>

              <p>
                If a customer has already paid a hospital bill,
                DischargeEasy may assist the customer in navigating
                an applicable reimbursement claim process.
              </p>

              <p>
                The customer may need to provide documents such as:
              </p>

              <ul className="terms-modern-list">
                <li>Hospital bills</li>
                <li>Payment receipts</li>
                <li>Discharge summary</li>
                <li>Medical reports</li>
                <li>Prescriptions</li>
                <li>Investigation reports</li>
                <li>Insurance policy documents</li>
                <li>Identity or banking information where required</li>
                <li>Other documents requested by the applicable insurer / TPA</li>
              </ul>

              <p>
                Reimbursement eligibility and settlement depend
                on the applicable insurance policy and insurer /
                TPA decision.
              </p>

              <div className="terms-warning-box">
                <span className="terms-warning-icon">!</span>

                <p>
                  DischargeEasy does not guarantee reimbursement.
                </p>
              </div>

            </div>

          </section>


          {/* =================================================
              8. HOSPITAL ASSISTANCE
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              08
            </div>

            <div className="terms-section-body">

              <h2>Hospital Assistance</h2>

              <p>
                Where hospital assistance is available, a
                DischargeEasy representative may assist with
                applicable insurance-related processes.
              </p>

              <div className="terms-medical-disclaimer">

                <div className="terms-medical-icon">
                  +
                </div>

                <div>
                  <strong>Medical Disclaimer</strong>

                  <p>
                    DischargeEasy representatives are not medical
                    professionals unless expressly identified as such.
                  </p>
                </div>

              </div>

              <p>DischargeEasy does not provide:</p>

              <div className="terms-pill-grid terms-pill-danger">
                <span>Medical diagnosis</span>
                <span>Medical treatment</span>
                <span>Medical prescriptions</span>
                <span>Medical decisions</span>
              </div>

              <p>
                Medical treatment and medical decisions remain the
                responsibility of the hospital and qualified
                healthcare professionals.
              </p>

            </div>

          </section>


          {/* =================================================
              9. CUSTOMER RESPONSIBILITIES
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              09
            </div>

            <div className="terms-section-body">

              <h2>Customer Responsibilities</h2>

              <p>
                Customers must provide accurate, complete, and
                genuine information.
              </p>

              <p>Customers must not provide:</p>

              <ul className="terms-modern-list terms-danger-list">
                <li>False information</li>
                <li>Forged documents</li>
                <li>Misleading information</li>
                <li>Fraudulent claim information</li>
                <li>Incorrect policy details</li>
              </ul>

              <p>
                DischargeEasy may refuse or discontinue assistance
                if fraudulent, misleading, unlawful, or abusive
                activity is suspected.
              </p>

            </div>

          </section>


          {/* =================================================
              10. CLAIM APPROVAL
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              10
            </div>

            <div className="terms-section-body">

              <h2>Claim Approval and Settlement</h2>

              <p>
                DischargeEasy does not guarantee:
              </p>

              <div className="terms-guarantee-grid">

                <div>Claim approval</div>
                <div>Claim settlement</div>
                <div>Claim amount</div>
                <div>Reimbursement amount</div>
                <div>Cashless authorization</div>
                <div>Policy coverage</div>
                <div>Hospital authorization</div>

              </div>

              <p>
                All claim decisions remain subject to the applicable
                insurer / TPA and policy terms.
              </p>

            </div>

          </section>


          {/* =================================================
              11. PAYMENT
          ================================================= */}
          <section className="terms-section-card terms-payment-card">

            <div className="terms-section-number">
              11
            </div>

            <div className="terms-section-body">

              <h2>Payment for ₹999 Service</h2>

              <p>
                Where applicable, the customer will be shown the
                service fee before payment.
              </p>

              <div className="terms-fee-banner">

                <div className="terms-fee-label">
                  SERVICE FEE
                </div>

                <div className="terms-fee-value">
                  ₹999
                </div>

                <div className="terms-fee-unit">
                  PER CLAIM
                </div>

              </div>

              <p>
                For claim assistance requested by customers whose
                insurance was purchased elsewhere:
              </p>

              <p className="terms-bold-text">
                Service Fee: ₹999 per claim
              </p>

              <p>
                Payment may be processed through a third-party
                payment gateway.
              </p>

              <p>
                Customers should review the applicable payment
                and refund terms before completing payment.
              </p>

            </div>

          </section>


          {/* =================================================
              12. CANCELLATION
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              12
            </div>

            <div className="terms-section-body">

              <h2>Cancellation and Refund</h2>

              <p>
                Cancellation and refund eligibility for paid
                DischargeEasy services will depend on the
                applicable service and refund policy displayed
                or communicated before purchase.
              </p>

              <p>
                Where a refund is applicable, the refund will be
                processed through the applicable payment method,
                subject to the relevant payment provider's
                processing timelines.
              </p>

              <div className="terms-email-box">

                <span>REFUND-RELATED QUERIES</span>

                <strong>
                  [Official Support Email]
                </strong>

              </div>

            </div>

          </section>


          {/* =================================================
              13. THIRD PARTY
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              13
            </div>

            <div className="terms-section-body">

              <h2>Third-Party Services</h2>

              <p>
                DischargeEasy may coordinate with third parties
                such as:
              </p>

              <div className="terms-third-party-grid">

                <div>Insurance companies</div>
                <div>TPAs</div>
                <div>Hospitals</div>
                <div>Payment providers</div>
                <div>Insurance intermediaries</div>
                <div>Technology providers</div>
                <div>Authorized service providers</div>

              </div>

              <p>
                DischargeEasy is not responsible for independent
                decisions, delays, service interruptions, or
                actions of third parties beyond its reasonable
                control.
              </p>

            </div>

          </section>


          {/* =================================================
              14. WEBSITE INFORMATION
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              14
            </div>

            <div className="terms-section-body">

              <h2>Website Information</h2>

              <p>
                DischargeEasy makes reasonable efforts to provide
                accurate and useful information.
              </p>

              <p>
                However, information relating to:
              </p>

              <div className="terms-pill-grid">
                <span>Insurance products</span>
                <span>Premiums</span>
                <span>Coverage</span>
                <span>Benefits</span>
                <span>Service availability</span>
                <span>Claim procedures</span>
              </div>

              <p>
                may change.
              </p>

              <div className="terms-note-box">
                <strong>Verification:</strong>

                <span>
                  Customers should verify the final information
                  from the applicable insurer, policy documents,
                  and authorized sources.
                </span>
              </div>

            </div>

          </section>


          {/* =================================================
              15. INTELLECTUAL PROPERTY
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              15
            </div>

            <div className="terms-section-body">

              <h2>Intellectual Property</h2>

              <p>
                The DischargeEasy website and its content may
                include:
              </p>

              <div className="terms-ip-grid">

                <span>DischargeEasy name</span>
                <span>Logo</span>
                <span>Brand identity</span>
                <span>Text</span>
                <span>Graphics</span>
                <span>Images</span>
                <span>Videos</span>
                <span>Website design</span>
                <span>UI components</span>
                <span>Other content</span>

              </div>

              <p>
                Such content may be protected by applicable
                intellectual property laws.
              </p>

              <p>
                No content may be copied, reproduced, modified,
                distributed, or commercially used without
                appropriate authorization.
              </p>

            </div>

          </section>


          {/* =================================================
              16. LIABILITY
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              16
            </div>

            <div className="terms-section-body">

              <h2>Limitation of Liability</h2>

              <p>
                To the extent permitted by applicable law,
                DischargeEasy shall not be responsible for
                losses arising from:
              </p>

              <div className="terms-liability-grid">

                <div>Insurer decisions</div>
                <div>TPA decisions</div>
                <div>Claim rejection</div>
                <div>Policy exclusions</div>
                <div>Policy limitations</div>
                <div>Hospital decisions</div>
                <div>Medical treatment</div>
                <div>Third-party service failures</div>
                <div>Incorrect information provided by customers</div>
                <div>Events beyond reasonable control</div>

              </div>

              <div className="terms-legal-note">
                Nothing in these Terms is intended to exclude
                liability that cannot legally be excluded.
              </div>

            </div>

          </section>


          {/* =================================================
              17. SERVICE AVAILABILITY
          ================================================= */}
          <section className="terms-section-card terms-location-card">

            <div className="terms-section-number">
              17
            </div>

            <div className="terms-section-body">

              <h2>Service Availability</h2>

              <p>
                Hospital assistance may currently be available in:
              </p>

              <div className="terms-location-highlight">

                <div className="terms-location-pin">
                  +
                </div>

                <div>
                  <span>CURRENT SERVICE LOCATION</span>
                  <strong>Hyderabad</strong>
                </div>

              </div>

              <p>
                Service availability may vary depending on
                location, staffing, hospital, claim circumstances,
                and applicable arrangements.
              </p>

              <p>
                Expansion to additional locations may occur
                in the future.
              </p>

            </div>

          </section>


          {/* =================================================
              18. CHANGES
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              18
            </div>

            <div className="terms-section-body">

              <h2>Changes to These Terms</h2>

              <p>
                DischargeEasy may modify these Terms from
                time to time.
              </p>

              <p>
                The updated version will be published on this
                website with a revised "Last Updated" date.
              </p>

              <div className="terms-note-box">
                <strong>Important:</strong>

                <span>
                  Continued use of the website after changes
                  are published may constitute acceptance of
                  the updated Terms, subject to applicable law.
                </span>
              </div>

            </div>

          </section>


          {/* =================================================
              19. GOVERNING LAW
          ================================================= */}
          <section className="terms-section-card">

            <div className="terms-section-number">
              19
            </div>

            <div className="terms-section-body">

              <h2>Governing Law</h2>

              <p>
                These Terms shall be governed by the applicable
                laws of India.
              </p>

              <p>
                Any dispute shall be subject to the jurisdiction
                of the courts having appropriate jurisdiction
                over the applicable matter and location.
              </p>

              <div className="terms-advisor-note">

                <span>LEGAL REVIEW NOTE</span>

                <p>
                  Client's legal advisor should confirm the
                  appropriate jurisdiction before publication.
                </p>

              </div>

            </div>

          </section>


          {/* =================================================
              20. CONTACT
          ================================================= */}
          <section className="terms-contact-card">

            <div className="terms-contact-glow" />

            <div className="terms-contact-content">

              <span className="terms-contact-label">
                GET IN TOUCH
              </span>

              <h2>
                Questions About Our Terms?
              </h2>

              <p>
                If you have questions regarding these Terms
                &amp; Conditions or our services, please contact
                the DischargeEasy team.
              </p>

              <div className="terms-contact-grid">

                <div className="terms-contact-item">

                  <span>COMPANY</span>

                  <strong>
                    DischargeEasy
                  </strong>

                </div>

                <div className="terms-contact-item">

                  <span>EMAIL</span>

                  <strong>
                    [Official Email Address]
                  </strong>

                </div>

                <div className="terms-contact-item">

                  <span>PHONE</span>

                  <strong>
                    [Official Contact Number]
                  </strong>

                </div>

                <div className="terms-contact-item">

                  <span>ADDRESS</span>

                  <strong>
                    [Registered/Office Address]
                  </strong>

                </div>

              </div>

              <Link
                to="/contact"
                className="terms-contact-button"
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

export default TermsAndConditions;