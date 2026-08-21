import React from 'react';
import { Link } from 'react-router-dom';
import './InsuranceDisclaimer.css';

const InsuranceDisclaimer: React.FC = () => {
  return (
    <main className="disclaimer-page">

      {/* HERO */}
      <section className="disclaimer-hero">
        <div className="disclaimer-hero-inner">

          <span className="disclaimer-badge">
            LEGAL
          </span>

          <h1>
            Insurance Disclaimer
          </h1>

          <p>
            Important information about the role of
            DischargeEasy and the insurance processes
            we assist you with.
          </p>

          <span className="disclaimer-updated">
            Last Updated: 21 August 2026
          </span>

        </div>
      </section>

      {/* CONTENT */}
      <section className="disclaimer-content">

        <div className="disclaimer-content-inner">

          {/* IMPORTANT CARD */}
          <div className="disclaimer-important">

            <div className="disclaimer-important-icon">
              !
            </div>

            <div>
              <h2>
                Important
              </h2>

              <p>
                DischargeEasy provides insurance assistance,
                guidance and coordination. Insurance coverage,
                claim eligibility, admissibility, reimbursement
                and settlement remain subject to the applicable
                insurance policy and insurer/TPA processes.
              </p>
            </div>

          </div>

          <section className="disclaimer-section">
            <h2>1. Insurance Coverage</h2>

            <p>
              The availability and extent of insurance coverage
              depend on the terms, conditions, exclusions,
              limitations, waiting periods and other provisions
              of the applicable insurance policy.
            </p>

            <p>
              Customers should review their policy documents
              and applicable policy terms for complete details.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>2. Claim Eligibility</h2>

            <p>
              DischargeEasy may assist you in understanding
              or navigating a claim-related process.
            </p>

            <p>
              However, we do not determine whether a claim is
              eligible, admissible or payable.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>3. Claim Approval</h2>

            <p>
              Final decisions regarding claim approval,
              rejection, deductions, admissibility and
              settlement are made by the relevant insurer
              or applicable authority in accordance with
              the policy and applicable processes.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>4. Reimbursement Assistance</h2>

            <p>
              Where an applicable insurance policy provides
              reimbursement coverage, DischargeEasy may help
              customers navigate the reimbursement claim
              process.
            </p>

            <p>
              Assistance with preparing or navigating a claim
              does not constitute a guarantee that the claim
              will be approved or that a particular amount will
              be reimbursed.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>5. Hospital Assistance</h2>

            <p>
              Hospital assistance may include guidance and
              coordination relating to insurance, documents,
              discharge processes or communication.
            </p>

            <p>
              Hospital decisions, treatment decisions,
              billing decisions and insurance decisions remain
              with the respective hospital, medical professional,
              insurer or TPA.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>6. Information and Documents</h2>

            <p>
              Customers should provide complete and accurate
              information and documents. Missing, incomplete
              or inaccurate information may affect the relevant
              process.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>7. Processing Timelines</h2>

            <p>
              Processing timelines may vary depending on the
              insurer, TPA, hospital, documentation and other
              circumstances.
            </p>

            <p>
              DischargeEasy cannot guarantee a specific
              processing or settlement timeline where the
              decision depends on a third party.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>8. No Guarantee of Outcome</h2>

            <p>
              Use of DischargeEasy assistance does not guarantee
              insurance approval, cashless authorization,
              reimbursement, settlement or any specific claim
              outcome.
            </p>
          </section>

          <section className="disclaimer-section">
            <h2>9. Medical Decisions</h2>

            <p>
              DischargeEasy is not a medical provider and does
              not provide medical diagnosis, treatment or
              medical advice through its insurance assistance
              services.
            </p>

            <p>
              Medical decisions should be made by qualified
              healthcare professionals.
            </p>
          </section>

          <section className="disclaimer-contact">

            <h2>
              Need Help Understanding Your Process?
            </h2>

            <p>
              Our team can help you understand the applicable
              assistance process and guide you on the next
              steps, subject to the relevant policy and
              third-party processes.
            </p>

            <Link
              to="/talk-to-advisor"
              className="disclaimer-button"
            >
              Talk To An Advisor
            </Link>

          </section>

        </div>

      </section>

    </main>
  );
};

export default InsuranceDisclaimer;