import React, {  useState, type FormEvent } from 'react';
// import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Hospital,
  ClipboardCheck,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';
import './ReimbursementAssistance.css';

interface FormData {
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  insuranceCompany: string;
  policyNumber: string;
  hospitalName: string;
  dischargeDate: string;
  billAmount: string;
  message: string;
  consent: boolean;
}

const initialFormData: FormData = {
  fullName: '',
  mobile: '',
  email: '',
  city: '',
  insuranceCompany: '',
  policyNumber: '',
  hospitalName: '',
  dischargeDate: '',
  billAmount: '',
  message: '',
  consent: false,
};

const reimbursementSteps = [
  {
    number: 1,
    title: 'Hospital treatment',
    icon: Hospital,
    side: 'left',
  },
  {
    number: 2,
    title: 'Hospital bill paid',
    icon: CheckCircle2,
    side: 'right',
  },
  {
    number: 3,
    title: 'Keep required documents',
    icon: FileText,
    side: 'left',
  },
  {
    number: 4,
    title: 'Contact DischargeEasy',
    icon: PhoneCall,
    side: 'right',
  },
  {
    number: 5,
    title: 'Document guidance',
    icon: ClipboardCheck,
    side: 'left',
  },
  {
    number: 6,
    title: 'Reimbursement claim assistance',
    icon: ShieldCheck,
    side: 'right',
  },
  {
    number: 7,
    title: 'Insurance/TPA processing',
    icon: FileText,
    side: 'left',
  },
  {
    number: 8,
    title: 'Claim decision by insurer/TPA',
    icon: CheckCircle2,
    side: 'right',
  },
];

const ReimbursementAssistance: React.FC = () => {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [error, setError] =
    useState('');

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = event.target;

    if (type === 'checkbox') {
      const checked = (
        event.target as HTMLInputElement
      ).checked;

      setFormData((previous) => ({
        ...previous,
        [name]: checked,
      }));

      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError('');

    if (!formData.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!formData.mobile.trim()) {
      setError('Please enter your mobile number.');
      return;
    }

    if (!formData.email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    if (!formData.city.trim()) {
      setError('Please enter your city.');
      return;
    }

    if (!formData.insuranceCompany.trim()) {
      setError('Please enter your insurance company.');
      return;
    }

    if (!formData.policyNumber.trim()) {
      setError('Please enter your policy number.');
      return;
    }

    if (!formData.hospitalName.trim()) {
      setError('Please enter the hospital name.');
      return;
    }

    if (!formData.dischargeDate) {
      setError('Please select your discharge date.');
      return;
    }

    if (!formData.consent) {
      setError(
        'Please provide consent for DischargeEasy to contact you.'
      );
      return;
    }

    try {
      setIsSubmitting(true);

      /*
       * Replace this section with your backend API call.
       *
       * Example:
       *
       * await axios.post(
       *   'http://localhost:8000/api/reimbursement',
       *   formData
       * );
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 900)
      );

      setSubmitted(true);
      setFormData(initialFormData);
    } catch {
      setError(
        'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="reimbursement-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="reimbursement-hero">
        <div className="reimbursement-hero-inner">

          <div className="reimbursement-badge">
            REIMBURSEMENT ASSISTANCE
          </div>

          <h1>
            Paid The Hospital Bill
            <br />
            Yourself? We Can Still Help.
          </h1>

          <p>
            Where the applicable insurance policy provides
            reimbursement coverage, DischargeEasy assists you
            in navigating the applicable reimbursement claim
            process.
          </p>

        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="reimbursement-process">
        <div className="reimbursement-section-heading">

          <span className="section-eyebrow">
            HOW REIMBURSEMENT WORKS
          </span>

          <h2>
            From Paid Bill To Claim Decision
          </h2>

        </div>

        <div className="process-timeline">

          <div className="timeline-line" />

          {reimbursementSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                className={`process-row ${step.side}`}
                key={step.number}
              >

                {step.side === 'left' ? (
                  <>
                    <div className="process-card">
                      <span>{step.title}</span>

                      <Icon
                        size={15}
                        className="process-card-icon"
                      />
                    </div>

                    <div className="process-number">
                      {step.number}
                    </div>

                    <div className="process-empty" />
                  </>
                ) : (
                  <>
                    <div className="process-empty" />

                    <div className="process-number">
                      {step.number}
                    </div>

                    <div className="process-card">
                      <span>{step.title}</span>

                      <Icon
                        size={15}
                        className="process-card-icon"
                      />
                    </div>
                  </>
                )}

              </div>
            );
          })}
        </div>

        <div className="process-disclaimer">
          Claim eligibility and settlement are subject to
          applicable policy terms and insurer/TPA processes.
        </div>
      </section>

      {/* =====================================================
          FORM SECTION
      ====================================================== */}
      <section className="reimbursement-form-section">

        <div className="reimbursement-section-heading form-heading">

          <span className="section-eyebrow">
            REQUEST ASSISTANCE
          </span>

          <h2>
            Start Your Reimbursement
            <br className="desktop-break" />
            Assistance Request
          </h2>

        </div>

        <div className="reimbursement-form-card">

          {submitted ? (
            <div className="form-success">

              <div className="success-icon">
                <CheckCircle2 size={42} />
              </div>

              <h3>
                Request Submitted Successfully
              </h3>

              <p>
                Thank you for contacting DischargeEasy.
                Our team will review your request and
                get in touch with you.
              </p>

              <button
                type="button"
                className="success-button"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Request
              </button>

            </div>
          ) : (
            <form
              className="reimbursement-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* ROW 1 */}
              <div className="form-row">

                <div className="form-field">
                  <label htmlFor="fullName">
                    FULL NAME
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder=""
                    autoComplete="name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="mobile">
                    MOBILE
                  </label>

                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder=""
                    autoComplete="tel"
                  />
                </div>

              </div>

              {/* ROW 2 */}
              <div className="form-row">

                <div className="form-field">
                  <label htmlFor="email">
                    EMAIL
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    autoComplete="email"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="city">
                    CITY
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder=""
                    autoComplete="address-level2"
                  />
                </div>

              </div>

              {/* ROW 3 */}
              <div className="form-row">

                <div className="form-field">
                  <label htmlFor="insuranceCompany">
                    INSURANCE COMPANY
                  </label>

                  <input
                    id="insuranceCompany"
                    name="insuranceCompany"
                    type="text"
                    value={formData.insuranceCompany}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="policyNumber">
                    POLICY NUMBER
                  </label>

                  <input
                    id="policyNumber"
                    name="policyNumber"
                    type="text"
                    value={formData.policyNumber}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* ROW 4 */}
              <div className="form-row">

                <div className="form-field">
                  <label htmlFor="hospitalName">
                    HOSPITAL NAME
                  </label>

                  <input
                    id="hospitalName"
                    name="hospitalName"
                    type="text"
                    value={formData.hospitalName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="dischargeDate">
                    DISCHARGE DATE
                  </label>

                  <input
                    id="dischargeDate"
                    name="dischargeDate"
                    type="date"
                    value={formData.dischargeDate}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* BILL AMOUNT */}
              <div className="form-field bill-field">
                <label htmlFor="billAmount">
                  APPROXIMATE BILL AMOUNT (₹) (OPTIONAL)
                </label>

                <input
                  id="billAmount"
                  name="billAmount"
                  type="number"
                  min="0"
                  value={formData.billAmount}
                  onChange={handleChange}
                />
              </div>

              {/* MESSAGE */}
              <div className="form-field message-field">
                <label htmlFor="message">
                  ANYTHING WE SHOULD KNOW? (OPTIONAL)
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              {/* CONSENT */}
              <label className="consent-row">

                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />

                <span>
                  I consent to DischargeEasy contacting me
                  about my request.
                </span>

              </label>

              {/* ERROR */}
              {error && (
                <div className="form-error">
                  {error}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="reimbursement-submit"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting
                    ? 'Submitting Request...'
                    : 'Submit Reimbursement Request'}
                </span>

                {!isSubmitting && (
                  <ArrowRight size={17} />
                )}
              </button>

            </form>
          )}

        </div>

        {/* =================================================
            FORM DISCLAIMER
        ================================================== */}
        <p className="form-disclaimer">
          DischargeEasy provides insurance assistance,
          guidance and coordination. Claim eligibility,
          admissibility, reimbursement and settlement are
          subject to the applicable insurance policy terms,
          conditions and insurer/TPA processes.
        </p>

      </section>

    </main>
  );
};

export default ReimbursementAssistance;