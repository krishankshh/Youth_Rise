import PropTypes from 'prop-types';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import './ProgramCard.css';

function ProgramCard({ program, onClick }) {
  const statusColors = {
    completed: 'status-completed',
    upcoming: 'status-upcoming',
    ongoing: 'status-ongoing'
  };

  return (
    <div className="program-card" onClick={onClick}>
      <div className="program-card-image">
        <img 
          src={`/programs/${program.id}/${program.coverImage}`} 
          alt={program.title}
        />
        <div className={`program-status ${statusColors[program.status]}`}>
          {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
        </div>
      </div>
      
      <div className="program-card-content">
        <h3>{program.title}</h3>
        
        <div className="program-meta">
          <div className="meta-item">
            <MapPin size={16} />
            <span>{program.location}</span>
          </div>
          <div className="meta-item">
            <Calendar size={16} />
            <span>{program.date}</span>
          </div>
        </div>

        <p className="program-excerpt">{program.description}</p>

        <div className="program-stats-mini">
          <div className="stat-mini">
            <Users size={18} />
            <span>{program.stats.students}</span>
          </div>
          <div className="stat-mini">
            <Clock size={18} />
            <span>{program.stats.days} Days</span>
          </div>
        </div>

        <button className="btn-view-details">View Details →</button>
      </div>
    </div>
  );
}

ProgramCard.propTypes = {
  program: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    coverImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      students: PropTypes.string.isRequired,
      volunteers: PropTypes.string,
      days: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ProgramCard;
