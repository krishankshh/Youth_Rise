import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { X, Calendar, MapPin, Users, Award, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import './ProgramDetail.css';

function ProgramDetail({ program, onClose }) {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Load all images from the program folder
    const loadImages = async () => {
      try {
        // For now, we'll manually list images. In production, you'd use a backend endpoint
        // or generate this list during build
        const imageList = [program.coverImage]; // Start with cover image
        setImages(imageList);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, [program]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(images[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <>
      <div className="program-detail-overlay" onClick={onClose} />
      <div className="program-detail-modal">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-content">
          {/* Header */}
          <div className="program-detail-header">
            <h1>{program.title}</h1>
            <div className="program-detail-meta">
              <div className="meta-item">
                <MapPin size={20} />
                <span>{program.location}</span>
              </div>
              <div className="meta-item">
                <Calendar size={20} />
                <span>{program.date}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="program-detail-stats">
            <div className="stat-box">
              <Users size={32} />
              <div className="stat-content">
                <div className="stat-number">{program.stats.students}</div>
                <div className="stat-label">Students Reached</div>
              </div>
            </div>
            <div className="stat-box">
              <Award size={32} />
              <div className="stat-content">
                <div className="stat-number">{program.stats.volunteers}</div>
                <div className="stat-label">Volunteers</div>
              </div>
            </div>
            <div className="stat-box">
              <Calendar size={32} />
              <div className="stat-content">
                <div className="stat-number">{program.stats.days}</div>
                <div className="stat-label">Days</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="program-detail-description">
            <h2>About This Program</h2>
            <p>{program.fullDescription || program.description}</p>
          </div>

          {/* Highlights */}
          {program.highlights && program.highlights.length > 0 && (
            <div className="program-highlights">
              <h2>Program Highlights</h2>
              <ul className="highlights-list">
                {program.highlights.map((highlight, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Photo Gallery */}
          <div className="program-gallery">
            <h2>Photo Gallery</h2>
            <div className="gallery-grid">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="gallery-item"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={`/programs/${program.id}/${image}`} 
                    alt={`${program.title} - Photo ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Impact */}
          {program.impact && (
            <div className="program-impact">
              <h2>Impact</h2>
              <p>{program.impact}</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <ChevronLeft size={32} />
          </button>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <ChevronRight size={32} />
          </button>
          <img 
            src={`/programs/${program.id}/${selectedImage}`} 
            alt="Full size"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="lightbox-counter">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

ProgramDetail.propTypes = {
  program: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ProgramDetail;
