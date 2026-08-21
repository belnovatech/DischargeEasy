import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  CircleHelp,
} from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavigation = () => {
    scrollToTop();
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container footer-container">

          {/* =========================
              TOP FOOTER
          ========================== */}
          <div className="footer-grid">

            {/* =========================
                BRAND COLUMN
            ========================== */}
            <div className="footer-col brand-col">
              <Link
                to="/"
                className="footer-logo"
                onClick={handleNavigation}
                aria-label="DischargeEasy Home"
              >
                <span className="footer-logo-icon">
                  <Activity size={20} strokeWidth={2.5} />
                </span>

                <span className="footer-logo-text">
                  <span className="logo-discharge">Discharge</span>
                  <span className="logo-easy">Easy</span>
                </span>
              </Link>

              <p className="brand-description">
                Healthcare support. Insurance guidance.
                <br />
                Peace of mind.
              </p>

              <p className="brand-tagline">
                You take care of your loved ones. We
                <br />
                take care of the insurance.
              </p>
            </div>

            {/* =========================
                COMPANY
            ========================== */}
            <div className="footer-col">
              <h3 className="footer-col-title">
                Company
              </h3>

              <ul className="footer-links">
                <li>
                  <Link to="/" onClick={handleNavigation}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/how-it-works"
                    onClick={handleNavigation}
                  >
                    How It Works
                  </Link>
                </li>

                <li>
                  <Link
                    to="/why-us"
                    onClick={handleNavigation}
                  >
                    Why Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about-us"
                    onClick={handleNavigation}
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    onClick={handleNavigation}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* =========================
                SERVICES
            ========================== */}
            <div className="footer-col">
              <h3 className="footer-col-title">
                Services
              </h3>

              <ul className="footer-links">
                <li>
                  <Link
                    to="/health-insurance"
                    onClick={handleNavigation}
                  >
                    Health Insurance
                  </Link>
                </li>

                <li>
                  <Link
                    to="/term-insurance"
                    onClick={handleNavigation}
                  >
                    Term Insurance
                  </Link>
                </li>

                <li>
                  <Link
                    to="/claim-assistance"
                    onClick={handleNavigation}
                  >
                    Claim Assistance
                  </Link>
                </li>

                <li>
                  <Link
                    to="/reimbursement-assistance"
                    onClick={handleNavigation}
                  >
                    Reimbursement Assistance
                  </Link>
                </li>

                <li>
                  <Link
                    to="/hospital-assistance"
                    onClick={handleNavigation}
                  >
                    Hospital Assistance
                  </Link>
                </li>
              </ul>
            </div>

            {/* =========================
                SUPPORT
            ========================== */}
            <div className="footer-col">
              <h3 className="footer-col-title">
                Support
              </h3>

              <ul className="footer-links">
                <li>
                  <Link
                    to="/contact"
                    onClick={handleNavigation}
                  >
                    Get Assistance
                  </Link>
                </li>

                <li>
                  <Link
                    to="/claim-assistance"
                    onClick={handleNavigation}
                  >
                    Request Claim Assistance
                  </Link>
                </li>

                <li>
                  <Link
                    to="/reimbursement-assistance"
                    onClick={handleNavigation}
                  >
                    Request Reimbursement
                    <br />
                    Assistance
                  </Link>
                </li>

<li>
  <Link
    to="/talk-to-advisor"
    onClick={handleNavigation}
  >
    Talk To An Advisor
  </Link>
</li>

                <li>
                  <Link
                    to="/faq"
                    onClick={handleNavigation}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* =========================
                LEGAL
            ========================== */}
            <div className="footer-col">
              <h3 className="footer-col-title">
                Legal
              </h3>

              <ul className="footer-links">
                <li>
                  <Link
                    to="/privacy-policy"
                    onClick={handleNavigation}
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link
                    to="/terms-and-conditions"
                    onClick={handleNavigation}
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>

                <li>
                  <Link
                    to="/insurance-disclaimer"
                    onClick={handleNavigation}
                  >
                    Insurance Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* =========================
              DISCLAIMER
          ========================== */}
          <div className="footer-disclaimer">
            <p>
              DischargeEasy provides insurance assistance, guidance and
              coordination. Claim eligibility, admissibility,
              reimbursement and settlement are subject to the applicable
              insurance policy terms, conditions and insurer/TPA processes.
            </p>
          </div>

          {/* =========================
              DIVIDER
          ========================== */}
          <div className="footer-divider" />

          {/* =========================
              FOOTER BOTTOM
          ========================== */}
          <div className="footer-bottom">

            <p className="copyright">
              © 2026 DischargeEasy. All Rights Reserved.
            </p>

            <p className="development-partner">
              Development Partner:
              <strong>
                CeeWell Technologies Pvt. Ltd.
              </strong>

              {/* Website Design &amp; Development */}
            </p>

            <div className="footer-bottom-links">
              <Link
                to="/privacy-policy"
                onClick={handleNavigation}
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-and-conditions"
                onClick={handleNavigation}
              >
                Terms &amp; Conditions
              </Link>
            </div>

          </div>
        </div>
      </footer>

      {/* =========================
          FLOATING HELP BUTTON
      ========================== */}
      <Link
        to="/contact"
        className="footer-help-button"
        onClick={handleNavigation}
        aria-label="Need Help?"
      >
        <span className="help-icon">
          <CircleHelp size={19} strokeWidth={2.4} />
        </span>

        <span className="help-text">
          Need Help?
        </span>
      </Link>
    </>
  );
};

export default Footer;