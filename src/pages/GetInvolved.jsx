import { useEffect, useState } from 'react';
import { Users, Heart, Handshake, Share2, CheckCircle2, Send } from 'lucide-react';
import './GetInvolved.css';

function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    city: '',
    interest: '',
    experience: '',
    availability: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: 'New Volunteer Registration - Youth Rise India',
          from_name: formData.name,
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          city: '',
          interest: '',
          experience: '',
          availability: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="get-involved-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container text-center">
          <h1 className="scroll-animate">Get Involved</h1>
          <p className="hero-subtitle scroll-animate">Be the Change You Want to See</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white">
        <div className="container container-narrow text-center">
          <h2 className="scroll-animate">Join the Youth Rise Movement</h2>
          <p className="lead scroll-animate">
            Whether you're a student, professional, or passionate individual, there's a place for you in the Youth Rise family. Together, we can empower the next generation and create lasting positive change.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved - Enhanced with Icons */}
      <section className="section involvement-section">
        <div className="container">
          <h2 className="text-center scroll-animate">Ways to Get Involved</h2>
          <p className="section-subtitle scroll-animate">Choose how you'd like to make an impact</p>
          <div className="involvement-grid">
            <div className="involvement-card scroll-animate">
              <div className="involvement-icon volunteer-icon">
                <Users size={44} />
              </div>
              <h3>Volunteer</h3>
              <p>Join our team of passionate volunteers and directly impact young lives through our programs and initiatives.</p>
              <ul className="involvement-benefits">
                <li><CheckCircle2 size={18} /> Hands-on experience</li>
                <li><CheckCircle2 size={18} /> Make direct impact</li>
                <li><CheckCircle2 size={18} /> Build skills</li>
              </ul>
            </div>
            <div className="involvement-card scroll-animate">
              <div className="involvement-icon mentor-icon">
                <Heart size={44} />
              </div>
              <h3>Mentor</h3>
              <p>Share your knowledge and experience by mentoring students and guiding them on their journey to success.</p>
              <ul className="involvement-benefits">
                <li><CheckCircle2 size={18} /> One-on-one guidance</li>
                <li><CheckCircle2 size={18} /> Inspire youth</li>
                <li><CheckCircle2 size={18} /> Flexible commitment</li>
              </ul>
            </div>
            <div className="involvement-card scroll-animate">
              <div className="involvement-icon partner-icon">
                <Handshake size={44} />
              </div>
              <h3>Partner</h3>
              <p>Collaborate with us as a school, organization, or corporate partner to expand our reach and impact.</p>
              <ul className="involvement-benefits">
                <li><CheckCircle2 size={18} /> Strategic collaboration</li>
                <li><CheckCircle2 size={18} /> Expand reach</li>
                <li><CheckCircle2 size={18} /> CSR opportunities</li>
              </ul>
            </div>
            <div className="involvement-card scroll-animate">
              <div className="involvement-icon advocate-icon">
                <Share2 size={44} />
              </div>
              <h3>Spread the Word</h3>
              <p>Help us grow by sharing our mission with your network and on social media platforms.</p>
              <ul className="involvement-benefits">
                <li><CheckCircle2 size={18} /> Amplify our voice</li>
                <li><CheckCircle2 size={18} /> Raise awareness</li>
                <li><CheckCircle2 size={18} /> Connect communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Registration Form - Enhanced */}
      <section className="section volunteer-form-section">
        <div className="container container-medium">
          <div className="form-header text-center scroll-animate">
            <h2>Volunteer Registration</h2>
            <p className="form-intro">
              Ready to make a difference? Fill out the form below and we'll get in touch with you soon!
            </p>
          </div>

          <form className="volunteer-form scroll-animate" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="age" className="form-label">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="form-input"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="city" className="form-label">City *</label>
              <input
                type="text"
                id="city"
                name="city"
                className="form-input"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="interest" className="form-label">Area of Interest *</label>
              <select
                id="interest"
                name="interest"
                className="form-select"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="education">Education & Teaching</option>
                <option value="mentorship">Mentorship</option>
                <option value="events">Event Management</option>
                <option value="content">Content Creation</option>
                <option value="social-media">Social Media & Marketing</option>
                <option value="fundraising">Fundraising</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="experience" className="form-label">Previous Volunteering Experience</label>
              <textarea
                id="experience"
                name="experience"
                className="form-textarea"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Tell us about any previous volunteering or related experience..."
                rows="4"
              />
            </div>

            <div className="form-group">
              <label htmlFor="availability" className="form-label">Availability *</label>
              <select
                id="availability"
                name="availability"
                className="form-select"
                value={formData.availability}
                onChange={handleChange}
                required
              >
                <option value="">Select your availability</option>
                <option value="weekends">Weekends Only</option>
                <option value="weekdays">Weekdays</option>
                <option value="flexible">Flexible</option>
                <option value="specific-events">Specific Events Only</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Why do you want to volunteer with us?</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your motivation and what you hope to contribute..."
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
              {!isSubmitting && <Send size={20} />}
            </button>

            {submitStatus === 'success' && (
              <div className="form-message success-message">
                <CheckCircle2 size={24} />
                <p>Thank you for your interest! We'll get in touch with you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-message error-message">
                <p>✗ Something went wrong. Please try again or contact us directly.</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default GetInvolved;
