import React, { useEffect, useState } from 'react';
import './InLovingMemory.css';

function InLovingMemory() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [candleLit, setCandleLit] = useState(false);

  const memories = [
    {
      id: 1,
      name: "Full Name",
      years: "1998 – 2023",
      img: "/cofounder1.png",
      text: "A kind soul whose warmth, compassion, and strength touched everyone around them. Their presence continues to guide and inspire us."
    },
    {
      id: 2,
      name: "Full Name",
      years: "2000 – 2024",
      img: "/images/person2.jpg",
      text: "Remembered for their courage, kindness, and unwavering belief in making the world a better place."
    }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    document
      .querySelectorAll('.scroll-animate')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="memory-section">
    
      <div className="memory-ambient-glow glow-1"></div>
      <div className="memory-ambient-glow glow-2"></div>

      {/* Floating Petals */}
      <div className="petal-container">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="petal"></span>
        ))}
      </div>

      {/* HERO SECTION*/}
 
      <section className="memory-hero section scroll-animate">
        <header className="memory-header">
          <div className="memory-badge">Legacy of Love</div>
          <h1>In Loving Memory</h1>
          <div className="header-divider"></div>
          <p className="lead-text">
            Honouring the beautiful lives etched in our hearts.
          </p>
        </header>
      </section>
      

    
      {/* PHOTO / MEMORY CARDS SECTION                                       */}
     
      <section className="memory-photos section scroll-animate">
        <div className="memory-grid">
          {memories.map((person, index) => (
            <div
              key={person.id}
              className={`memory-card scroll-animate delay-${index}`}
              onClick={() => setSelectedImg(person.img)}
              style={{ cursor: 'zoom-in' }}
            >
              <div className="memory-image-container">
                <img
                  src={person.img}
                  alt={person.name}
                  className="memory-img"
                />
                <div className="image-overlay"></div>
              </div>

              <div className="memory-content">
                <span className="memory-years">{person.years}</span>
                <h3>{person.name}</h3>
                <div className="memory-quote-icon">“</div>
                <p className="memory-description">{person.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
{/* Story Section */}
<section className="their-story section scroll-animate">
  <h1 className="story-title">Their Story</h1>
  <div className="story-inner">
  <p className="story-text">
    [They were known for their quiet strength and the way they showed up for others.
    In moments big and small, they chose kindness, courage, and care — leaving
    behind memories that continue to guide and inspire.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Driven by a passion for youth empowerment and social impact, they founded Youth Rise India to create meaningful opportunities for young people across the nation.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Driven by a passion for youth empowerment and social impact, they founded Youth Rise India to create meaningful opportunities for young people across the nation.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Driven by a passion for youth empowerment and social impact, they founded Youth Rise India to create meaningful opportunities for young people across the nation.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Driven by a passion for youth empowerment and social impact, they founded Youth Rise India to create meaningful opportunities for young people across the nation.]
  </p>
  </div>
</section>



      <section className="whisper-section section scroll-animate">
        <div className="whisper-quote">
          “What we love becomes part of who we are.”
        </div>
      </section>


      <section className="legacy-cta section scroll-animate">
  <div className="legacy-cta-inner">
    <h2 className="legacy-cta-title">Continue Their Legacy</h2>

    <p className="legacy-cta-text">
      Their story does not end here.  
      By giving your time, skills, or compassion, you help carry forward the
      values they lived by.
    </p>

    <div className="legacy-cta-actions">
      <a href="/donate" className="cta-btn primary">
        Make a Donation
      </a>
      <a href="/get-involved" className="cta-btn secondary">
        Get Involved
      </a>
    </div>
  </div>
</section>

      {selectedImg && (
        <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
          <button className="lightbox-close">&times;</button>
          <img
            src={selectedImg}
            alt="Enlarged portrait"
            className="lightbox-img"
          />
          <p className="lightbox-caption">
            Held in memory. Forever.
          </p>
        </div>
      )}
    </section>
    
  );
}

export default InLovingMemory;
