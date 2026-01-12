import { useState, useEffect } from 'react';
import './Donate.css';

function Donate() {
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="donate-page">
      {/* Updated to use donate-hero from CSS */}
      <section className="donate-hero">
        <div className="container">
          <h1 className="scroll-animate">Support Our Mission</h1>
          <p className="hero-subtitle scroll-animate">Every Contribution Makes a Difference</p>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="scroll-animate">Your Support Empowers Youth</h2>
          <p className="lead-text scroll-animate">
            Your generous donations help us reach more students, conduct impactful programs, 
            and create opportunities for young people across India. Every rupee counts in 
            making dreams come true.
          </p>
        </div>
      </section>

      {/* Impact Section styled like the Values Grid */}
      <section className="donation-section">
        <div className="container">
          <h2 className="text-center scroll-animate">How Your Donation Helps</h2>
          <div className="impact-grid">
            <div className="impact-item scroll-animate">
              <div className="impact-amount">₹500</div>
              <p>Provides educational materials for 5 students</p>
            </div>
            <div className="impact-item scroll-animate">
              <div className="impact-amount">₹1,000</div>
              <p>Sponsors a workshop session for 20 students</p>
            </div>
            <div className="impact-item scroll-animate">
              <div className="impact-amount">₹2,500</div>
              <p>Supports a full-day program at a school</p>
            </div>
            <div className="impact-item scroll-animate">
              <div className="impact-amount">₹5,000</div>
              <p>Funds mentorship program for a month</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center scroll-animate">Make a Donation</h2>
          
          <div className="donation-card scroll-animate">
            <div className="donation-content">
              <p className="donation-intro">
                We accept donations through UPI for a quick and secure transaction. 
                Click the button below to view our payment QR code.
              </p>

              <button
                className="btn btn-primary btn-lg"
                onClick={() => setShowQR(!showQR)}
                style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block' }}
              >
                {showQR ? 'Hide QR Code' : 'Show Payment QR Code'}
              </button>

              {showQR && (
                <div className="qr-code-container">
                  <div className="qr-code-display">
                    <img src="/qr-code.png" alt="UPI Payment QR Code" className="qr-image" />
                    <p className="qr-name">Archana Shah</p>
                  </div>
                  
                  <div className="payment-info">
                    <div className="upi-id">
                      <p><strong>UPI ID:</strong></p>
                      <code>aarchanashah-3@okicici</code>
                    </div>
                    <p className="upi-note">Scan the QR code above with any UPI app to donate</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="donation-note scroll-animate">
            <h3>Important Note</h3>
            <p>
              Youth Rise India is currently an unregistered NGO. We are in the process 
              of obtaining our official registration. All donations are used directly 
              for program expenses and youth empowerment initiatives.
            </p>
            <p>
              For bank transfer or other payment methods, please <a href="/contact">contact us</a> directly.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Section using the dark gradient style */}
      <section className="transparency-section">
        <div className="container text-center">
          <h2 className="scroll-animate">Our Commitment to Transparency</h2>
          <p className="transparency-text scroll-animate">
            We believe in complete transparency with our donors. Your contributions go directly towards:
          </p>
          <div className="transparency-grid">
            <div className="transparency-item scroll-animate">
              <span className="percentage">70%</span>
              <p>Program Expenses</p>
            </div>
            <div className="transparency-item scroll-animate">
              <span className="percentage">20%</span>
              <p>Materials & Resources</p>
            </div>
            <div className="transparency-item scroll-animate">
              <span className="percentage">10%</span>
              <p>Operations & Outreach</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-center">
          <h2 className="scroll-animate">Other Ways to Support</h2>
          <p className="lead-text scroll-animate">
            Can't donate right now? You can still make a difference!
          </p>
          <div className="support-options scroll-animate">
            <a href="/get-involved" className="btn btn-secondary btn-lg">Volunteer With Us</a>
            <a href="/contact" className="btn btn-outline btn-lg">Partner With Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;