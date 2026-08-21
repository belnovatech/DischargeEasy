import React from 'react';
import { Star } from 'lucide-react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Testimonials.css';

interface TestimonialItem {
  name: string;
  location: string;
  quote: string;
}

export const Testimonials: React.FC = () => {
  const reviews: TestimonialItem[] = [
    {
      name: 'Ramesh Krishnan',
      location: 'Madhapur, Hyderabad',
      quote: 'My father was admitted for emergency cardiac treatment. DischargeEasy coordinated the TPA desk claims, letting our family stay by his side. Incredible human assistance!',
    },
    {
      name: 'Priyanka Reddy',
      location: 'Gachibowli, Hyderabad',
      quote: 'Buying health insurance through DischargeEasy was smooth. When I had to use it for maternity care, their advisor took care of the hospital claim, and it was completely free!',
    },
    {
      name: 'Anil Kumar',
      location: 'Kondapur, Hyderabad',
      quote: 'We had an external policy and paid ₹999 for claim assistance. The coordinator managed the document submissions and got our approvals processed quickly. Highly recommended!',
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <SectionTitle
          title="People Deserve Support When It Matters Most."
          subtitle="Read how our compassionate coordinators have helped patients and their families navigate insurance claims."
          align="center"
        />

        <div className="testimonials-notice">
          <span className="notice-badge">Verified Service Model</span>
          <p className="notice-text">
            Testimonials below represent placeholder case studies demonstrating our claim assistance service workflows.
          </p>
        </div>

        <div className="testimonials-grid grid-3">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--teal)" color="var(--teal)" />
                ))}
              </div>
              
              <blockquote className="testimonial-quote">
                "{rev.quote}"
              </blockquote>
              
              <div className="testimonial-author">
                <div className="author-details">
                  <h4 className="author-name">{rev.name}</h4>
                  <p className="author-location">{rev.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
