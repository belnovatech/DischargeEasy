import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import Button from '../../components/Button/Button';
import './Contact.css';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'claim-assistance',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="contact-page-hero">
        <div className="container">
          <h1 className="page-title text-white">Contact DischargeEasy</h1>
          <p className="page-subtitle text-white">
            Get in touch with our compassionate support advisors. We are here to help you.
          </p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container contact-grid">
          {/* Left Column: Info Card */}
          <div className="contact-info-card-box">
            <h3 className="info-box-title">Get Assistance Now</h3>
            <p className="info-box-desc">
              Reach out via phone, email, or visit our support coordinators in Hyderabad.
            </p>

            <ul className="info-cards-list">
              <li className="info-card-item">
                <span className="info-icon-wrapper"><Phone size={20} /></span>
                <div>
                  <h4 className="info-card-label">Helpline Number</h4>
                  <p className="info-card-value">+91 40 6823 4567</p>
                </div>
              </li>
              
              <li className="info-card-item">
                <span className="info-icon-wrapper"><Mail size={20} /></span>
                <div>
                  <h4 className="info-card-label">Email Support</h4>
                  <p className="info-card-value">support@dischargeeasy.com</p>
                </div>
              </li>

              <li className="info-card-item">
                <span className="info-icon-wrapper"><MapPin size={20} /></span>
                <div>
                  <h4 className="info-card-label">Office Address</h4>
                  <p className="info-card-value">Hitech City, Hyderabad, India</p>
                </div>
              </li>
            </ul>

            <div className="hyderabad-network-tag">
              <CheckCircle size={18} className="text-teal" />
              <span>On-site coordinators available in all major Hyderabad hospitals.</span>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-box">
            {submitted ? (
              <div className="contact-success">
                <CheckCircle size={48} className="text-teal success-icon" />
                <h3 className="success-heading">Message Sent Successfully!</h3>
                <p className="success-desc">
                  Thank you for contacting DischargeEasy. One of our support coordinators will get in touch with you shortly.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="form-card-title">Send a Request</h3>
                
                <div className="contact-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="contact-row split-2">
                  <div className="contact-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      required
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="contact-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="contact-group">
                  <label htmlFor="contact-service">How Can We Help You?</label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="claim-assistance">Get Claims Assistance (₹999 / Free)</option>
                    <option value="health-insurance">Buy Health Insurance Guidance</option>
                    <option value="term-insurance">Buy Term Insurance Guidance</option>
                    <option value="hospital-help">On-Site Hospital Admission Help</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                <div className="contact-group">
                  <label htmlFor="contact-message">Message / Details</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Describe your requirement (e.g. Hospital Name, Policy Provider, etc.)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" showArrow={true}>
                  Submit Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
