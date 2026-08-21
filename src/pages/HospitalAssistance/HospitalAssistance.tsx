import React, {  useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  Hospital,
  PhoneCall,
  ShieldCheck,
  UserRound,
} from 'lucide-react';
import './HospitalAssistance.css';

interface HospitalFormData {
  fullName: string;
  mobile: string;
  email: string;
  city: string;
  hospitalName: string;
  patientName: string;
  insuranceCompany: string;
  policyNumber: string;
  admissionDate: string;
  assistanceRequired: string;
  message: string;
  consent: boolean;
}

const initialFormData: HospitalFormData = {
  fullName: '',
  mobile: '',
  email: '',
  city: '',
  hospitalName: '',
  patientName: '',
  insuranceCompany: '',
  policyNumber: '',
  admissionDate: '',
  assistanceRequired: '',
  message: '',
  consent: false,
};

const hospitalSteps = [
  {
    number: 1,
    title: 'Hospital admission',
    icon: Hospital,
    side: 'left',
  },
  {
    number: 2,
    title: 'Insurance details shared',
    icon: ShieldCheck,
    side: 'right',
  },
  {
    number: 3,
    title: 'Document guidance',
    icon: FileText,
    side: 'left',
  },
  {
    number: 4,
    title: 'Insurance/TPA coordination',
    icon: PhoneCall,
    side: 'right',
  },
  {
    number: 5,
    title: 'Discharge coordination',
    icon: ClipboardList,
    side: 'left',
  },
  {
    number: 6,
    title: 'Patient/family assistance',
    icon: UserRound,
    side: 'right',
  },
];

const HospitalAssistance: React.FC = () => {
  const [formData, setFormData] =
    useState<HospitalFormData>(initialFormData);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [error, setError] =
    useState('');

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
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

    if (!formData.hospitalName.trim()) {
      setError('Please enter the hospital name.');
      return;
    }

    if (!formData.patientName.trim()) {
      setError('Please enter the patient name.');
      return;
    }

    if (!formData.insuranceCompany.trim()) {
      setError('Please enter the insurance company.');
      return;
    }

    if (!formData.assistanceRequired) {
      setError(
        'Please select the assistance you need.'
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
       * Connect your backend API here.
       *
       * Example:
       *
       * await axios.post(
       *   'http://localhost:8000/api/hospital-assistance',
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
    <main className="hospital-assistance-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="hospital-hero">
        <div className="hospital-hero-inner">

          <div className="hospital-badge">
            HOSPITAL ASSISTANCE
          </div>

          <h1>
            Need Help At The
            <br />
            Hospital? We’re With You.
          </h1>

          <p>
            From insurance coordination to discharge
            formalities, DischargeEasy helps you navigate
            the hospital process with greater clarity and
            confidence.
          </p>

          <Link
            to="/contact"
            className="hospital-hero-button"
          >
            Request Assistance
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="hospital-intro">
        <div className="hospital-section-heading">

          <span className="hospital-eyebrow">
            SUPPORT WHEN YOU NEED IT
          </span>

          <h2>
            Hospital Processes Can Be
            <br />
            Overwhelming. You Don’t Have To
            Handle Them Alone.
          </h2>

          <p>
            When a loved one is in the hospital, families
            often have to manage treatment, paperwork,
            insurance communication and discharge
            requirements at the same time. DischargeEasy
            helps simplify the insurance-related coordination
            so you can focus on your loved one.
          </p>

        </div>

        <div className="hospital-help-grid">

          <div className="hospital-help-card">
            <div className="hospital-help-icon">
              <ShieldCheck size={22} />
            </div>

            <h3>
              Insurance Coordination
            </h3>

            <p>
              Assistance with navigating applicable
              insurance and TPA processes.
            </p>
          </div>

          <div className="hospital-help-card">
            <div className="hospital-help-icon">
              <FileText size={22} />
            </div>

            <h3>
              Document Guidance
            </h3>

            <p>
              Guidance on documents and information
              that may be required during the process.
            </p>
          </div>

          <div className="hospital-help-card">
            <div className="hospital-help-icon">
              <ClipboardList size={22} />
            </div>

            <h3>
              Discharge Coordination
            </h3>

            <p>
              Support in understanding insurance-related
              discharge formalities and next steps.
            </p>
          </div>

          <div className="hospital-help-card">
            <div className="hospital-help-icon">
              <PhoneCall size={22} />
            </div>

            <h3>
              Assistance &amp; Updates
            </h3>

            <p>
              Help coordinating information and
              understanding what happens next.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="hospital-process">

        <div className="hospital-section-heading">
          <span className="hospital-eyebrow">
            HOW HOSPITAL ASSISTANCE WORKS
          </span>

          <h2>
            From Hospital Admission
            <br />
            To Discharge
          </h2>
        </div>

        <div className="hospital-timeline">

          <div className="hospital-timeline-line" />

          {hospitalSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className={`hospital-process-row ${step.side}`}
              >

                {step.side === 'left' ? (
                  <>
                    <div className="hospital-process-card">
                      <span>{step.title}</span>

                      <Icon
                        size={15}
                        className="hospital-process-icon"
                      />
                    </div>

                    <div className="hospital-process-number">
                      {step.number}
                    </div>

                    <div />
                  </>
                ) : (
                  <>
                    <div />

                    <div className="hospital-process-number">
                      {step.number}
                    </div>

                    <div className="hospital-process-card">
                      <span>{step.title}</span>

                      <Icon
                        size={15}
                        className="hospital-process-icon"
                      />
                    </div>
                  </>
                )}

              </div>
            );
          })}

        </div>

        <div className="hospital-process-note">
          Assistance is subject to the applicable insurance
          policy terms, conditions and insurer/TPA processes.
        </div>

      </section>

      {/* =====================================================
          FORM
      ====================================================== */}
      <section className="hospital-form-section">

        <div className="hospital-section-heading hospital-form-heading">

          <span className="hospital-eyebrow">
            REQUEST ASSISTANCE
          </span>

          <h2>
            Start Your Hospital
            <br className="hospital-desktop-break" />
            Assistance Request
          </h2>

        </div>

        <div className="hospital-form-card">

          {submitted ? (
            <div className="hospital-success">

              <div className="hospital-success-icon">
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
                onClick={() => setSubmitted(false)}
                className="hospital-success-button"
              >
                Submit Another Request
              </button>

            </div>
          ) : (
            <form
              className="hospital-form"
              onSubmit={handleSubmit}
              noValidate
            >

              {/* ROW 1 */}
              <div className="hospital-form-row">

                <div className="hospital-form-field">
                  <label htmlFor="hospitalFullName">
                    FULL NAME
                  </label>

                  <input
                    id="hospitalFullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                </div>

                <div className="hospital-form-field">
                  <label htmlFor="hospitalMobile">
                    MOBILE
                  </label>

                  <input
                    id="hospitalMobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>

              </div>

              {/* ROW 2 */}
              <div className="hospital-form-row">

                <div className="hospital-form-field">
                  <label htmlFor="hospitalEmail">
                    EMAIL
                  </label>

                  <input
                    id="hospitalEmail"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                <div className="hospital-form-field">
                  <label htmlFor="hospitalCity">
                    CITY
                  </label>

                  <input
                    id="hospitalCity"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* ROW 3 */}
              <div className="hospital-form-row">

                <div className="hospital-form-field">
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

                <div className="hospital-form-field">
                  <label htmlFor="patientName">
                    PATIENT NAME
                  </label>

                  <input
                    id="patientName"
                    name="patientName"
                    type="text"
                    value={formData.patientName}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* ROW 4 */}
              <div className="hospital-form-row">

                <div className="hospital-form-field">
                  <label htmlFor="hospitalInsurance">
                    INSURANCE COMPANY
                  </label>

                  <input
                    id="hospitalInsurance"
                    name="insuranceCompany"
                    type="text"
                    value={formData.insuranceCompany}
                    onChange={handleChange}
                  />
                </div>

                <div className="hospital-form-field">
                  <label htmlFor="hospitalPolicy">
                    POLICY NUMBER
                  </label>

                  <input
                    id="hospitalPolicy"
                    name="policyNumber"
                    type="text"
                    value={formData.policyNumber}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* ROW 5 */}
              <div className="hospital-form-row">

                <div className="hospital-form-field">
                  <label htmlFor="admissionDate">
                    ADMISSION DATE
                  </label>

                  <input
                    id="admissionDate"
                    name="admissionDate"
                    type="date"
                    value={formData.admissionDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="hospital-form-field">
                  <label htmlFor="assistanceRequired">
                    ASSISTANCE REQUIRED
                  </label>

                  <select
                    id="assistanceRequired"
                    name="assistanceRequired"
                    value={formData.assistanceRequired}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select assistance
                    </option>

                    <option value="insurance-coordination">
                      Insurance Coordination
                    </option>

                    <option value="document-guidance">
                      Document Guidance
                    </option>

                    <option value="discharge-assistance">
                      Discharge Assistance
                    </option>

                    <option value="general-hospital-assistance">
                      General Hospital Assistance
                    </option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}
              <div className="hospital-form-field hospital-message-field">
                <label htmlFor="hospitalMessage">
                  ANYTHING WE SHOULD KNOW? (OPTIONAL)
                </label>

                <textarea
                  id="hospitalMessage"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              {/* CONSENT */}
              <label className="hospital-consent">

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
                <div className="hospital-form-error">
                  {error}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="hospital-submit"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting
                    ? 'Submitting Request...'
                    : 'Submit Hospital Assistance Request'}
                </span>

                {!isSubmitting && (
                  <ArrowRight size={17} />
                )}
              </button>

            </form>
          )}

        </div>

        <p className="hospital-form-disclaimer">
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

export default HospitalAssistance;