import { useEffect } from 'react';
import { CheckCircle2, Star, Heart, Users, Lightbulb, Rocket, Globe, Target } from 'lucide-react';
import './About.css';

function About() {
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

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="scroll-animate">About Youth Rise India</h1>
          <p className="hero-subtitle scroll-animate">
            Building a brighter future for India's youth through empowerment, education, and opportunity
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section bg-white">
        <div className="container container-narrow">
          <h2 className="text-center scroll-animate">Who We Are</h2>
          <p className="lead scroll-animate">
            Youth Rise India is a grassroots movement dedicated to empowering young minds across the nation. Currently operating as an unregistered NGO, we are driven by passion, purpose, and the unwavering belief that every young person deserves access to quality education, mentorship, and opportunities to thrive.
          </p>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="section mission-vision-section">
        <div className="container">
         <div className="mv-grid">
            <div className="mv-card scroll-animate">
              <div className="icon-circle-large mission-gradient">
                <CheckCircle2 size={48} strokeWidth={2.5} color="white" />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower and inspire India's youth through accessible education, mentorship, and skill development programs that foster leadership, creativity, and social responsibility.
              </p>
            </div>
            <div className="mv-card scroll-animate">
              <div className="icon-circle-large vision-gradient">
                <Star size={48} strokeWidth={2.5} color="white" />
              </div>
              <h3>Our Vision</h3>
              <p>
                To create a generation of confident, compassionate, and capable young leaders who drive positive change in their communities and contribute to India's progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center scroll-animate">Our Core Values</h2>
          <p className="section-subtitle scroll-animate">Guiding principles that drive everything we do</p>
          <div className="values-grid">
            <div className="value-card scroll-animate">
              <div className="value-icon"><Lightbulb size={40} /></div>
              <h4>Empowerment</h4>
              <p>We believe in empowering youth with knowledge, skills, and confidence to pursue their aspirations.</p>
            </div>
            <div className="value-card scroll-animate">
              <div className="value-icon"><Users size={40} /></div>
              <h4>Inclusivity</h4>
              <p>We create inclusive spaces where every young person feels valued, respected, and heard.</p>
            </div>
            <div className="value-card scroll-animate">
              <div className="value-icon"><Target size={40} /></div>
              <h4>Excellence</h4>
              <p>We are committed to delivering high-quality programs that make a lasting impact on young lives.</p>
            </div>
            <div className="value-card scroll-animate">
              <div className="value-icon"><Heart size={40} /></div>
              <h4>Compassion</h4>
              <p>We approach our work with empathy, understanding, and genuine care for the youth we serve.</p>
            </div>
            <div className="value-card scroll-animate">
              <div className="value-icon"><Rocket size={40} /></div>
              <h4>Innovation</h4>
              <p>We continuously explore creative approaches to engage and inspire the next generation.</p>
            </div>
            <div className="value-card scroll-animate">
              <div className="value-icon"><Globe size={40} /></div>
              <h4>Social Impact</h4>
              <p>We focus on creating positive, measurable change in communities across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section story-section">
        <div className="container container-narrow">
          <h2 className="text-center scroll-animate">Our Story</h2>
          <div className="story-content scroll-animate">
            <p className="lead">
              Youth Rise India was born from a simple yet powerful idea: every young person in India deserves the opportunity to reach their full potential.
            </p>
            <p>
              Our journey began with a small group of passionate individuals who witnessed firsthand the challenges faced by youth in accessing quality education and mentorship. We saw talented young minds constrained by circumstances, and we knew we had to act.
            </p>
            <p>
              Starting with our flagship program at the Prime Minister's childhood school in Gujarat, we've touched the lives of over 500 students, providing them with educational resources, motivational sessions, and skill-building workshops. Each interaction reinforces our belief that when given the right support, India's youth can achieve extraordinary things.
            </p>
            <div className="pull-quote">
              "When we invest in the next generation, we invest in the future of our nation."
            </div>
            <p>
              While we're currently operating as an unregistered NGO, our impact is real and growing. Every volunteer hour, every donated resource, and every inspired student is a testament to the power of collective action and unwavering commitment to youth empowerment.
            </p>
            <p>
              As we continue to grow, our vision remains clear: to expand our reach across India, touching more lives, creating more opportunities, and building a movement that transforms how we support and empower the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2 className="text-white scroll-animate">Join Our Journey</h2>
          <p className="cta-text scroll-animate">
            Be part of something bigger. Whether you want to volunteer, donate, or partner with us, your support can change lives.
          </p>
          <div className="cta-buttons scroll-animate">
            <a href="/get-involved" className="btn btn-secondary btn-lg">Get Involved</a>
            <a href="/contact" className="btn btn-outline btn-lg">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
