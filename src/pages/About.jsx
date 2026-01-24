import { useEffect } from 'react';
import { CheckCircle2, Star, Heart, Users, Lightbulb, Rocket, Globe, Target } from 'lucide-react';
import { motion } from 'framer-motion';
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

      {/* Founder Section */}
      <section className="section founder-section">
        <div className="container">
          <h2 className="text-center scroll-animate">Meet Our Founder</h2>
          <div className="founder-content scroll-animate">
            <div className="founder-image">
              <img src="/founder.png" alt="Founder Name" />
            </div>
            <div className="founder-bio">
              <h3>Founder Name</h3>
              <p className="founder-title">Founder & CEO</p>
              <p>
                [Replace with founder's introduction and biography. Share their vision, passion, and journey in creating Youth Rise India. This should be 2-3 paragraphs describing their background, motivation, and commitment to empowering India's youth.]
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Driven by a passion for youth empowerment and social impact, they founded Youth Rise India to create meaningful opportunities for young people across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Founders Section */}
<section className="section mission-vision-section">
  <div className="container">
    <h2 className="text-center scroll-animate">Our Co-Founders</h2>

    <div className="mv-grid">
      {/* Left Card */}
      <motion.div
        className="mv-card"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="cofounder-image-wrapper">
          <img
            src="/cofounder1.png"
            alt="Co-Founder 1"
            className="cofounder-image"
          />
        </div>
        <h3>Co-Founder Name 1</h3>
        <p className="cofounder-role">Co-Founder & Head of Operations</p>
        <p>
          [Replace with co-founder's introduction. Brief bio highlighting their
          role, expertise, and contribution to Youth Rise India.]
        </p>
      </motion.div>

      {/* Right Card */}
      <motion.div
        className="mv-card"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="cofounder-image-wrapper">
          <img
            src="/cofounder2.png"
            alt="Co-Founder 2"
            className="cofounder-image"
          />
        </div>
        <h3>Co-Founder Name 2</h3>
        <p className="cofounder-role">Co-Founder & Head of Programs</p>
        <p>
          [Replace with co-founder's introduction. Brief bio highlighting their
          role, expertise, and contribution to Youth Rise India.]
        </p>
      </motion.div>
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
