import React from 'react';
import { Link } from 'react-router-dom';
import './InsuranceDisclaimer.css';

const InsuranceDisclaimer: React.FC = () => {
  return (
    <main className="insdisc-page">

      {/* =========================
          HERO
      ========================== */}
      <section className="insdisc-hero">
        <div className="insdisc-hero-glow insdisc-hero-glow-one" />
        <div className="insdisc-hero-glow insdisc-hero-glow-two" />

        <div className="insdisc-hero-inner">

          <div className="insdisc-eyebrow">
            <span className="insdisc-eyebrow-dot" />
            LEGAL &amp; IMPORTANT INFORMATION
          </div>

          <h1>
            Insurance
            <span> Disclaimer</span>
          </h1>

          <p className="insdisc-hero-description">
            Important information about the role of DischargeEasy,
            insurance products, claim assistance, reimbursement
            processes and the responsibilities of insurers and TPAs.
          </p>

          <div className="insdisc-hero-meta">
            <div className="insdisc-meta-item">
              <span>Effective Date</span>
              <strong>[DD/MM/YYYY]</strong>
            </div>

            <div className="insdisc-meta-divider" />

            <div className="insdisc-meta-item">
              <span>Last Updated</span>
              <strong>21 August 2026</strong>
            </div>
          </div>

        </div>
      </section>


      {/* =========================
          CONTENT
      ========================== */}
      <section className="insdisc-content">

        <div className="insdisc-content-inner">

          {/* =========================
              IMPORTANT NOTICE
          ========================== */}
          <div className="insdisc-alert-card">

            <div className="insdisc-alert-icon">
              !
            </div>

            <div className="insdisc-alert-content">
              <span className="insdisc-alert-label">
                IMPORTANT NOTICE
              </span>

              <h2>
                Insurance outcomes are determined by the applicable policy.
              </h2>

              <p>
                DischargeEasy provides insurance-related information,
                guidance, assistance and applicable claim-support services.
                Insurance coverage, claim eligibility, admissibility,
                reimbursement and settlement remain subject to the
                applicable insurance policy and the processes of the
                relevant insurer or TPA.
              </p>
            </div>

          </div>


          {/* =========================
              1. INSURANCE PRODUCTS
          ========================== */}
          <section className="insdisc-section-card">

            <div className="insdisc-section-number">
              01
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>Insurance</span>
                <h2>Insurance Products</h2>
              </div>

              <p>
                Where an insurance product is offered through
                DischargeEasy or an applicable partner, the insurance
                policy is issued by the relevant insurance company.
              </p>

              <p>
                The insurance company is responsible for the policy
                contract, underwriting, coverage and claim decisions.
              </p>

              <div className="insdisc-highlight-box">
                <strong>Policy documents prevail.</strong>
                <span>
                  The final policy document issued by the applicable
                  insurer will govern the insurance contract.
                </span>
              </div>

            </div>

          </section>


          {/* =========================
              2. INSURANCE INFORMATION
          ========================== */}
          <section className="insdisc-section-card">

            <div className="insdisc-section-number">
              02
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>Understand Before You Buy</span>
                <h2>Insurance Information</h2>
              </div>

              <p>
                Information displayed on the DischargeEasy website is
                intended to help customers understand available
                insurance solutions and related assistance services.
              </p>

              <p>
                Actual insurance terms may vary depending on the insurer,
                product, customer information, underwriting decision and
                applicable policy.
              </p>

              <div className="insdisc-info-grid">

                <div className="insdisc-info-chip">
                  <span>01</span>
                  Premium
                </div>

                <div className="insdisc-info-chip">
                  <span>02</span>
                  Coverage
                </div>

                <div className="insdisc-info-chip">
                  <span>03</span>
                  Benefits
                </div>

                <div className="insdisc-info-chip">
                  <span>04</span>
                  Exclusions
                </div>

                <div className="insdisc-info-chip">
                  <span>05</span>
                  Waiting Periods
                </div>

                <div className="insdisc-info-chip">
                  <span>06</span>
                  Eligibility
                </div>

                <div className="insdisc-info-chip">
                  <span>07</span>
                  Limits
                </div>

                <div className="insdisc-info-chip">
                  <span>08</span>
                  Terms &amp; Conditions
                </div>

              </div>

              <p className="insdisc-note">
                Customers should carefully review the final policy
                documents before purchasing insurance.
              </p>

            </div>

          </section>


          {/* =========================
              3. CLAIM ASSISTANCE
          ========================== */}
          <section className="insdisc-section-card">

            <div className="insdisc-section-number">
              03
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>Support &amp; Coordination</span>
                <h2>Claim Assistance</h2>
              </div>

              <p>
                DischargeEasy may assist customers in navigating
                applicable insurance claim processes.
              </p>

              <div className="insdisc-service-grid">

                <div className="insdisc-service-card">
                  <div className="insdisc-service-icon">01</div>
                  <span>Claim process guidance</span>
                </div>

                <div className="insdisc-service-card">
                  <div className="insdisc-service-icon">02</div>
                  <span>Documentation guidance</span>
                </div>

                <div className="insdisc-service-card">
                  <div className="insdisc-service-icon">03</div>
                  <span>Hospital coordination</span>
                </div>

                <div className="insdisc-service-card">
                  <div className="insdisc-service-icon">04</div>
                  <span>Insurance / TPA coordination</span>
                </div>

                <div className="insdisc-service-card">
                  <div className="insdisc-service-icon">05</div>
                  <span>Cashless claim assistance</span>
                </div>

                <div className="insdisc-service-card">
                  <div className="insdisc-service-icon">06</div>
                  <span>Reimbursement claim assistance</span>
                </div>

                <div className="insdisc-service-card">
                  <div className="insdisc-service-icon">07</div>
                  <span>Follow-up assistance</span>
                </div>

              </div>

              <div className="insdisc-danger-card">

                <div className="insdisc-danger-icon">
                  !
                </div>

                <div>
                  <strong>CLAIM APPROVAL IS NOT GUARANTEED.</strong>

                  <p>
                    The insurer/TPA is responsible for evaluating the
                    claim according to the applicable insurance policy
                    and claim procedures.
                  </p>
                </div>

              </div>

            </div>

          </section>


          {/* =========================
              4. CASHLESS CLAIM
          ========================== */}
          <section className="insdisc-section-card">

            <div className="insdisc-section-number">
              04
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>Hospitalization Support</span>
                <h2>Cashless Claim Assistance</h2>
              </div>

              <p>
                Where applicable, DischargeEasy may assist customers
                with the cashless claim process.
              </p>

              <div className="insdisc-requirement-grid">

                <div>Policy coverage</div>
                <div>Policy terms &amp; conditions</div>
                <div>Network hospital availability</div>
                <div>Insurer / TPA authorization</div>
                <div>Required documentation</div>
                <div>Medical &amp; policy requirements</div>
                <div>Applicable claim procedures</div>

              </div>

              <div className="insdisc-inline-warning">
                <span>!</span>
                <p>
                  DischargeEasy does not guarantee cashless authorization.
                </p>
              </div>

            </div>

          </section>


          {/* =========================
              5. REIMBURSEMENT
          ========================== */}
          <section className="insdisc-section-card">

            <div className="insdisc-section-number">
              05
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>After Hospital Payment</span>
                <h2>Reimbursement Claim Assistance</h2>
              </div>

              <p>
                If a customer has already paid the hospital bill,
                DischargeEasy may assist with navigating an applicable
                reimbursement claim process.
              </p>

              <p>
                The customer may be required to provide documents such as:
              </p>

              <div className="insdisc-document-grid">

                <div>Hospital bills</div>
                <div>Payment receipts</div>
                <div>Discharge summary</div>
                <div>Medical reports</div>
                <div>Prescriptions</div>
                <div>Investigation reports</div>
                <div>Policy documents</div>
                <div>Other insurer / TPA documents</div>

              </div>

              <div className="insdisc-strong-warning">
                <span>REIMBURSEMENT NOTICE</span>
                <strong>
                  DISCHARGEEASY DOES NOT GUARANTEE REIMBURSEMENT.
                </strong>
              </div>

            </div>

          </section>


          {/* =========================
              6. DISCHARGEEASY CUSTOMERS
          ========================== */}
          <section className="insdisc-section-card">

            <div className="insdisc-section-number">
              06
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>Eligible Customers</span>
                <h2>Claim Assistance for DischargeEasy Customers</h2>
              </div>

              <p>
                Customers who purchase eligible insurance through
                DischargeEasy may receive applicable claim assistance
                without an additional claim-assistance service fee.
              </p>

              <p>
                The availability of free assistance may be subject to:
              </p>

              <div className="insdisc-pill-list">
                <span>Policy</span>
                <span>Product</span>
                <span>Service arrangement</span>
                <span>Customer eligibility</span>
                <span>Terms &amp; conditions</span>
              </div>

              <div className="insdisc-subtle-warning">
                Free claim assistance does not guarantee claim approval
                or settlement.
              </div>

            </div>

          </section>


          {/* =========================
              7. OTHER INSURANCE
          ========================== */}
          <section className="insdisc-section-card insdisc-fee-section">

            <div className="insdisc-section-number">
              07
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>Customers Insured Elsewhere</span>
                <h2>Claim Assistance for Customers Insured Elsewhere</h2>
              </div>

              <p>
                Customers who purchased insurance from another platform,
                agent, insurer or provider may approach DischargeEasy
                for applicable claim assistance.
              </p>

              <div className="insdisc-fee-card">

                <div className="insdisc-fee-label">
                  SERVICE FEE
                </div>

                <div className="insdisc-fee-amount">
                  ₹999
                </div>

                <div className="insdisc-fee-unit">
                  PER CLAIM
                </div>

                <p>
                  This amount is a fee for DischargeEasy's assistance
                  service.
                </p>

              </div>

              <div className="insdisc-two-column">

                <div className="insdisc-list-card">
                  <h3>It is not:</h3>

                  <ul>
                    <li>Insurance premium</li>
                    <li>Hospital fee</li>
                    <li>TPA fee</li>
                    <li>Insurer fee</li>
                    <li>Claim amount</li>
                    <li>Reimbursement amount</li>
                  </ul>
                </div>

                <div className="insdisc-list-card">
                  <h3>Payment does not guarantee:</h3>

                  <ul>
                    <li>Claim approval</li>
                    <li>Claim settlement</li>
                    <li>Cashless authorization</li>
                    <li>Reimbursement</li>
                    <li>Any specific claim amount</li>
                  </ul>
                </div>

              </div>

            </div>

          </section>


          {/* =========================
              8. NO GUARANTEE
          ========================== */}
          <section className="insdisc-section-card insdisc-no-guarantee">

            <div className="insdisc-section-number">
              08
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>Important Limitation</span>
                <h2>No Guarantee of Claim Approval</h2>
              </div>

              <p>
                DischargeEasy does not guarantee:
              </p>

              <div className="insdisc-guarantee-grid">

                <span>Claim approval</span>
                <span>Claim settlement</span>
                <span>Reimbursement</span>
                <span>Cashless authorization</span>
                <span>Coverage</span>
                <span>Policy issuance</span>
                <span>Specific claim amount</span>

              </div>

              <p className="insdisc-final-note">
                All decisions relating to insurance claims remain subject
                to the applicable insurer/TPA, policy terms, conditions,
                exclusions and claim procedures.
              </p>

            </div>

          </section>


          {/* =========================
              9. NO MEDICAL ADVICE
          ========================== */}
          <section className="insdisc-section-card insdisc-medical-card">

            <div className="insdisc-section-number">
              09
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>Healthcare Boundary</span>
                <h2>No Medical Advice</h2>
              </div>

              <p>
                Information or assistance provided by DischargeEasy
                is not medical advice.
              </p>

              <div className="insdisc-medical-boundaries">

                <div>
                  <span>01</span>
                  Doctors
                </div>

                <div>
                  <span>02</span>
                  Hospitals
                </div>

                <div>
                  <span>03</span>
                  Medical professionals
                </div>

                <div>
                  <span>04</span>
                  Emergency medical services
                </div>

              </div>

              <p>
                DischargeEasy does not replace these professionals or
                services. Medical diagnosis, treatment, prescriptions
                and medical decisions should be obtained from qualified
                healthcare professionals.
              </p>

            </div>

          </section>


          {/* =========================
              10. HOSPITAL ASSISTANCE
          ========================== */}
          <section className="insdisc-section-card">

            <div className="insdisc-section-number">
              10
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>Coordination Support</span>
                <h2>Hospital Assistance</h2>
              </div>

              <p>
                Where hospital assistance is available, DischargeEasy
                representatives may assist customers with applicable
                insurance-related coordination.
              </p>

              <p>
                The representative does not control:
              </p>

              <div className="insdisc-control-grid">

                <div>Hospital treatment</div>
                <div>Medical decisions</div>
                <div>Hospital billing decisions</div>
                <div>Insurance underwriting</div>
                <div>Claim approval</div>
                <div>Claim settlement</div>

              </div>

            </div>

          </section>


          {/* =========================
              11. PARTNERS
          ========================== */}
          <section className="insdisc-section-card">

            <div className="insdisc-section-number">
              11
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>Third-Party Relationships</span>
                <h2>Insurance Partners and Intermediaries</h2>
              </div>

              <p>
                Where applicable, DischargeEasy may work with insurance
                companies, licensed insurance intermediaries, TPAs,
                hospitals and other authorized service providers.
              </p>

              <div className="insdisc-partner-grid">

                <div>Insurance companies</div>
                <div>Licensed intermediaries</div>
                <div>TPAs</div>
                <div>Hospitals</div>
                <div>Authorized service providers</div>

              </div>

              <div className="insdisc-regulatory-card">

                <div className="insdisc-regulatory-icon">
                  ✓
                </div>

                <div>
                  <h3>Regulatory Status</h3>

                  <p>
                    Any insurer, intermediary, partner, registration
                    number, license number or regulatory status
                    displayed on the website should be added only
                    after verification and authorization.
                  </p>

                  <p>
                    DischargeEasy does not claim to be an insurer or
                    regulated insurance intermediary unless its actual
                    legal and regulatory status permits such
                    representation.
                  </p>

                  <p>
                    IRDAI maintains regulatory frameworks for different
                    insurance intermediaries, including brokers and
                    web aggregators. The appropriate disclosures depend
                    on the entity's actual business model and
                    authorization.
                  </p>
                </div>

              </div>

            </div>

          </section>


          {/* =========================
              12. CUSTOMER RESPONSIBILITY
          ========================== */}
          <section className="insdisc-section-card">

            <div className="insdisc-section-number">
              12
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>Your Responsibility</span>
                <h2>Customer Responsibility</h2>
              </div>

              <p>
                Customers are responsible for:
              </p>

              <div className="insdisc-responsibility-grid">

                <div>
                  <span>01</span>
                  Providing accurate information
                </div>

                <div>
                  <span>02</span>
                  Providing genuine documents
                </div>

                <div>
                  <span>03</span>
                  Reading their insurance policy
                </div>

                <div>
                  <span>04</span>
                  Understanding policy exclusions
                </div>

                <div>
                  <span>05</span>
                  Providing requested documents within applicable timelines
                </div>

                <div>
                  <span>06</span>
                  Following insurer / TPA requirements
                </div>

              </div>

              <div className="insdisc-note-box">
                Customers should not rely solely on website information
                when making an insurance decision.
              </div>

            </div>

          </section>


          {/* =========================
              13. POLICY TERMS
          ========================== */}
          <section className="insdisc-policy-prevail">

            <div className="insdisc-policy-icon">
              ✓
            </div>

            <div>
              <span>SECTION 13</span>

              <h2>
                Policy Terms Prevail
              </h2>

              <p>
                In case of any difference between information presented
                on this website and the actual insurance policy document:
              </p>

              <strong>
                THE APPLICABLE INSURANCE POLICY DOCUMENT SHALL PREVAIL.
              </strong>

              <p>
                Customers should carefully review the policy schedule,
                policy wording, terms, conditions, exclusions,
                endorsements and other applicable documents.
              </p>
            </div>

          </section>


          {/* =========================
              14. REGULATORY DISCLAIMER
          ========================== */}
          <section className="insdisc-section-card">

            <div className="insdisc-section-number">
              14
            </div>

            <div className="insdisc-section-body">

              <div className="insdisc-section-heading">
                <span>India · Regulatory Information</span>
                <h2>Regulatory Disclaimer</h2>
              </div>

              <p>
                Insurance-related activities in India may be subject to
                applicable laws, rules, regulations, guidelines and
                requirements issued by the Insurance Regulatory and
                Development Authority of India (IRDAI) and other
                applicable authorities.
              </p>

              <p>
                The specific regulatory disclosures applicable to
                DischargeEasy depend on its actual business structure,
                role, authorization and relationship with insurers
                or intermediaries.
              </p>

              <div className="insdisc-legal-note">
                <strong>Publication Review Required</strong>

                <p>
                  The client should ensure that all regulatory
                  disclosures, partner information, registration
                  details and insurance-related representations are
                  reviewed and approved before publication.
                </p>
              </div>

            </div>

          </section>


          {/* =========================
              15. CONTACT
          ========================== */}
          <section className="insdisc-contact-card">

            <div className="insdisc-contact-glow" />

            <div className="insdisc-contact-content">

              <span className="insdisc-contact-eyebrow">
                GET IN TOUCH
              </span>

              <h2>
                Questions About This Disclaimer?
              </h2>

              <p>
                If you have questions regarding this Insurance
                Disclaimer or the insurance assistance services
                provided by DischargeEasy, please contact us.
              </p>

              <div className="insdisc-contact-details">

                <div className="insdisc-contact-item">
                  <span>COMPANY</span>
                  <strong>DischargeEasy</strong>
                </div>

                <div className="insdisc-contact-item">
                  <span>EMAIL</span>
                  <strong>[Official Email Address]</strong>
                </div>

                <div className="insdisc-contact-item">
                  <span>PHONE</span>
                  <strong>[Official Contact Number]</strong>
                </div>

                <div className="insdisc-contact-item">
                  <span>ADDRESS</span>
                  <strong>[Registered/Office Address]</strong>
                </div>

              </div>

              <Link
                to="/talk-to-advisor"
                className="insdisc-contact-button"
              >
                Talk To An Advisor
                <span>→</span>
              </Link>

            </div>

          </section>

        </div>

      </section>

    </main>
  );
};

export default InsuranceDisclaimer;