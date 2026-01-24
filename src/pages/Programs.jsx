import { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Award, ChevronDown, ChevronUp, X } from 'lucide-react';
import './Programs.css';

function Programs() {
  const [programs, setPrograms] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  
  useEffect(() => {
    fetch('/programs/programs-data.json')
      .then(res => res.json())
      .then(data => setPrograms(data.programs))
      .catch(error => console.error('Error loading programs:', error));
  }, []);


  useEffect(() => {
    
    if (programs.length === 0) return;

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

    
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [programs]); 

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="programs-page">
      {/* Hero */}
      <section className="programs-hero">
        <div className="container scroll-animate">
          <h1>Our Journey</h1>
          <p className="hero-subtitle">
            Programs That Changed Lives - A Timeline of Impact
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="timeline">
            {programs.map((program, index) => (
              <div key={program.id} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < programs.length - 1 && <div className="timeline-line"></div>}
                </div>

                <div className="timeline-content">
                  <div className="program-year">{program.date}</div>
                  
                  <div 
                    className={`program-card-timeline ${expandedId === program.id ? 'expanded' : ''}`}
                    onClick={() => toggleExpand(program.id)}
                  >
                    <div className="program-header">
                      <div className="program-image">
                        <img 
                          src={`/programs/${program.id}/${program.coverImage}`} 
                          alt={program.title}
                          onError={(e) => {
                            e.target.src = '/hero-bg.png';
                          }}
                        />
                        <div className={`status-badge status-${program.status}`}>
                          {program.status}
                        </div>
                      </div>

                      <div className="program-summary">
                        <h2>{program.title}</h2>
                        <div className="program-meta-row">
                          <span><MapPin size={16} /> {program.location}</span>
                          <span><Calendar size={16} /> {program.date}</span>
                        </div>
                        <p className="program-excerpt">{program.description}</p>
                        
                        <div className="program-stats-row">
                          <div className="stat-item">
                            <Users size={20} />
                            <span>{program.stats.students} Students</span>
                          </div>
                          <div className="stat-item">
                            <Award size={20} />
                            <span>{program.stats.volunteers} Volunteers</span>
                          </div>
                        </div>

                        <button className="expand-btn">
                          {expandedId === program.id ? (
                            <>Less Details <ChevronUp size={20} /></>
                          ) : (
                            <>More Details <ChevronDown size={20} /></>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedId === program.id && (
                      <div className="program-details">
                        <div className="details-section">
                          <h3>About This Program</h3>
                          <p>{program.fullDescription || program.description}</p>
                        </div>

                        {program.highlights && (
                          <div className="details-section">
                            <h3>Highlights</h3>
                            <ul className="highlights-grid">
                              {program.highlights.map((highlight, idx) => (
                                <li key={idx}>• {highlight}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div className="details-section">
                          <h3>Photo Gallery</h3>
                          <div className="photo-grid">
                            <div 
                              className="photo-item"
                              onClick={(e) => {
                                e.stopPropagation();
                                setLightboxImage(`/programs/${program.id}/${program.coverImage}`);
                              }}
                            >
                              <img 
                                src={`/programs/${program.id}/${program.coverImage}`} 
                                alt={`${program.title} - Photo 1`}
                                onError={(e) => {
                                  e.target.src = '/hero-bg.png';
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {program.impact && (
                          <div className="details-section impact-section">
                            <h3>Impact</h3>
                            <p>{program.impact}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
            <X size={32} />
          </button>
          <img src={lightboxImage} alt="Full size" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

export default Programs;
