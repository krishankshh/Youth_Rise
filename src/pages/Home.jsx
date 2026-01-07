import { useEffect, useState } from 'react';
import { CheckCircle2, Star, ArrowRight, Sparkles, Users, Book, Target } from 'lucide-react';
import './Home.css';

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for scroll animations
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section with Parallax */}
      <section className="hero">
        <div 
          className="hero-bg-image" 
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="hero-overlay" />
        <div className="floating-elements">
          <div className="float-icon float-1"><Book size={32} /></div>
          <div className="float-icon float-2"><Sparkles size={28} /></div>
          <div className="float-icon float-3"><Users size={30} /></div>
          <div className="float-icon float-4"><Target size={26} /></div>
        </div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <div className="hero-badge scroll-animate">
              <Sparkles size={16} />
              <span>Empowering India's Youth</span>
            </div>
            <h1 className="hero-title scroll-animate">
              Build The <span className="highlight-saffron">Future</span> You Dream Of
            </h1>
            <p className="hero-description scroll-animate">
              Join Youth Rise India in our mission to empower young minds through education, mentorship, and leadership. Together, we're creating opportunities that transform lives and communities.
            </p>
            <div className="hero-buttons scroll-animate">
              <a href="/get-involved" className="btn btn-primary btn-lg btn-glow">
                Join the Movement
                <ArrowRight size={20} />
              </a>
              <a href="/donate" className="btn btn-secondary btn-lg">Support Our Cause</a>
            </div>
            <div className="hero-stats scroll-animate">
              <div className="hero-stat">
                <div className="stat-num">500+</div>
                <div className="stat-text">Youth Impacted</div>
              </div>
              <div className="hero-stat">
                <div className="stat-num">20+</div>
                <div className="stat-text">Volunteers</div>
              </div>
              <div className="hero-stat">
                <div className="stat-num">1</div>
                <div className="stat-text">State</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-image scroll-animate">
              <img src="/education.png" alt="Education and Community" />
              <div className="image-badge">
                <CheckCircle2 size={24} />
                <span>Empowering Communities</span>
              </div>
            </div>
            <div className="mission-text scroll-animate">
              <h2>Our Mission & Vision</h2>
              <div className="mission-card-inline">
                <div className="icon-circle-inline mission-icon-bg">
                  <CheckCircle2 size={32} strokeWidth={2.5} color="white" />
                </div>
                <div>
                  <h3>Mission</h3>
                  <p>
                    To empower and inspire India's youth through accessible education, mentorship, and skill development programs that foster leadership, creativity, and social responsibility.
                  </p>
                </div>
              </div>
              <div className="mission-card-inline">
                <div className="icon-circle-inline vision-icon-bg">
                  <Star size={32} strokeWidth={2.5} color="white" />
                </div>
                <div>
                  <h3>Vision</h3>
                  <p>
                    To create a generation of confident, compassionate, and capable young leaders who drive positive change in their communities and contribute to India's progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats - Animated */}
      <section className="section impact-section">
        <div className="container">
          <h2 className="text-center text-primary scroll-animate">Our Impact So Far</h2>
          <div className="stats-grid">
            <div className="stat-card scroll-animate">
              <div className="stat-icon"><Users size={40} /></div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Students Impacted</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="stat-card scroll-animate">
              <div className="stat-icon"><Sparkles size={40} /></div>
              <div className="stat-number">20+</div>
              <div className="stat-label">Volunteers</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{width: '65%'}}></div>
              </div>
            </div>
            <div className="stat-card scroll-animate">
              <div className="stat-icon"><Target size={40} /></div>
              <div className="stat-number">1</div>
              <div className="stat-label">Active Program</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{width: '100%'}}></div>
              </div>
            </div>
            <div className="stat-card scroll-animate">
              <div className="stat-icon"><Book size={40} /></div>
              <div className="stat-number">1</div>
              <div className="stat-label">State Reached</div>
              <div className="stat-progress">
                <div className="progress-bar" style={{width: '45%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes - Enhanced Grid */}
      <section className="section themes-section bg-white">
        <div className="container">
          <h2 className="text-center scroll-animate">What We Do</h2>
          <p className="section-subtitle scroll-animate">Transforming lives through focused programs and initiatives</p>
          <div className="themes-grid">
            <div className="theme-card theme-education scroll-animate">
              <div className="theme-icon"><Book size={36} /></div>
              <h3>Education & Skills</h3>
              <p>Providing quality educational resources and skill development workshops to empower youth with knowledge and practical abilities.</p>
            </div>
            <div className="theme-card theme-leadership scroll-animate">
              <div className="theme-icon"><Users size={36} /></div>
              <h3>Youth Leadership</h3>
              <p>Nurturing future leaders through leadership training, confidence building, and decision-making workshops.</p>
            </div>
            <div className="theme-card theme-mentorship scroll-animate">
              <div className="theme-icon"><Target size={36} /></div>
              <h3>Mentorship Programs</h3>
              <p>Connecting experienced mentors with young minds to guide them in their personal and professional growth journey.</p>
            </div>
            <div className="theme-card theme-community scroll-animate">
              <div className="theme-icon"><Sparkles size={36} /></div>
              <h3>Community Impact</h3>
              <p>Creating positive change through community engagement, social initiatives, and volunteer-driven projects.</p>
            </div>
            <div className="theme-card theme-volunteer scroll-animate">
              <div className="theme-icon"><Users size={36} /></div>
              <h3>Volunteer Opportunities</h3>
              <p>Join our passionate team of volunteers making a real difference in young lives across India.</p>
            </div>
            <div className="theme-card theme-empowerment scroll-animate">
              <div className="theme-icon"><Sparkles size={36} /></div>
              <h3>Youth Empowerment</h3>
              <p>Empowering youth to become change makers who inspire others and drive positive transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates with Image */}
      <section className="section updates-section">
        <div className="container">
          <div className=" update-wrapper">
            <div className="update-image scroll-animate">
              <img src="/leadership.png" alt="Leadership and Growth" />
            </div>
            <div className="update-content scroll-animate">
              <div className="badge badge-saffron">Recent Program</div>
              <h2>Gujarat Initiative</h2>
              <h3>PM's Childhood School</h3>
              <p>
                We recently conducted an impactful program at the Prime Minister's childhood school in Gujarat, inspiring hundreds of students with education, motivation, and skill-building activities. This milestone program marked our commitment to reaching young minds across India.
              </p>
              <a href="/programs" className="btn btn-primary btn-glow">
                Learn More About Our Programs
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="section cta-section">
        <div className="cta-glow" />
        <div className="container text-center">
          <h2 className="text-white scroll-animate">Ready to Make a Difference?</h2>
          <p className="cta-text scroll-animate">
            Join us in empowering the next generation. Whether you want to volunteer, donate, or partner with us, there's a place for you in the Youth Rise community.
          </p>
          <div className="cta-buttons scroll-animate">
            <a href="/get-involved" className="btn btn-secondary btn-lg">Become a Volunteer</a>
            <a href="/donate" className="btn btn-outline btn-lg">Make a Donation</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
