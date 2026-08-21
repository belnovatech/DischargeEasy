import React, {  useState, type FormEvent } from 'react';
import {
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import './TalkToAdvisor.css';

interface AdvisorFormData {
  name: string;
  mobile: string;
  email: string;
  preferredTime: string;
  requirement: string;
  consent: boolean;
}

const initialFormData: AdvisorFormData = {
  name: '',
  mobile: '',
  email: '',
  preferredTime: '',
  requirement: '',
  consent: false,
};

const TalkToAdvisor: React.FC = () => {
  const [formData, setFormData] =
    useState<AdvisorFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [error, setError] =
    useState('');

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement
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

      setError('');
      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError('');
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError('');

    if (!formData.name.trim()) {
      setError('Please enter your name.');
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

    if (!formData.preferredTime) {
      setError(
        'Please select your preferred time.'
      );
      return;
    }

    if (!formData.requirement) {
      setError(
        'Please select what you need help with.'
      );
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
       * Connect your backend here.
       *
       * Example:
       *
       * await axios.post(
       *   'http://localhost:8000/api/advisor-callback',
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
    <main className="advisor-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="advisor-hero">

        <div className="advisor-hero-inner">

          <span className="advisor-badge">
            ADVISOR
          </span>

          <h1>
            Talk To A
            <br />
            DischargeEasy Advisor
          </h1>

          <p>
            Tell us when it suits you and what you need
            help with. A real person will call you back.
          </p>

        </div>

      </section>

      {/* =====================================================
          FORM
      ====================================================== */}
      <section className="advisor-form-section">

        <div className="advisor-form-card">

          {submitted ? (
            <div className="advisor-success">

              <div className="advisor-success-icon">
                <CheckCircle2 size={40} />
              </div>

              <h2>
                Callback Request Received
              </h2>

              <p>
                Thank you. A DischargeEasy advisor
                will contact you according to your
                selected preference.
              </p>

              <button
                type="button"
                className="advisor-success-button"
                onClick={() => setSubmitted(false)}
              >
                Request Another Callback
              </button>

            </div>
          ) : (
            <form
              className="advisor-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* ROW 1 */}
              <div className="advisor-form-row">

                <div className="advisor-field">
                  <label htmlFor="advisorName">
                    NAME
                  </label>

                  <input
                    id="advisorName"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>

                <div className="advisor-field">
                  <label htmlFor="advisorMobile">
                    MOBILE
                  </label>

                  <input
                    id="advisorMobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>

              </div>

              {/* ROW 2 */}
              <div className="advisor-form-row">

                <div className="advisor-field">
                  <label htmlFor="advisorEmail">
                    EMAIL
                  </label>

                  <input
                    id="advisorEmail"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                <div className="advisor-field">
                  <label htmlFor="preferredTime">
                    PREFERRED TIME
                  </label>

                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select an option
                    </option>

                    <option value="morning">
                      Morning
                    </option>

                    <option value="afternoon">
                      Afternoon
                    </option>

                    <option value="evening">
                      Evening
                    </option>
                  </select>
                </div>

              </div>

              {/* REQUIREMENT */}
              <div className="advisor-field advisor-requirement">
                <label htmlFor="requirement">
                  REQUIREMENT
                </label>

                <select
                  id="requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                >
                  <option value="">
                    Select an option
                  </option>

                  <option value="health-insurance">
                    Health Insurance
                  </option>

                  <option value="term-insurance">
                    Term Insurance
                  </option>

                  <option value="claim-assistance">
                    Claim Assistance
                  </option>

                  <option value="reimbursement-assistance">
                    Reimbursement Assistance
                  </option>

                  <option value="hospital-assistance">
                    Hospital Assistance
                  </option>

                  <option value="general-advice">
                    General Advice
                  </option>
                </select>
              </div>

              {/* CONSENT */}
              <label className="advisor-consent">

                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                />

                <span>
                  I consent to DischargeEasy contacting
                  me about my request.
                </span>

              </label>

              {/* ERROR */}
              {error && (
                <div className="advisor-error">
                  {error}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                className="advisor-submit"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting
                    ? 'Submitting...'
                    : 'Request Callback'}
                </span>

                {!isSubmitting && (
                  <ArrowRight size={15} />
                )}
              </button>

            </form>
          )}

        </div>

        {/* =================================================
            DISCLAIMER
        ================================================== */}
        <p className="advisor-disclaimer">
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

export default TalkToAdvisor;