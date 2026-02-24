import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Preview({ cvData }) {
  

  return (
    <div className="preview">
      <div className="document-wrapper">
        <h2>Preview</h2>
        <div className="document">
          <div className="document-body">
            <div className="document-general document-section">
              <p className="general-name">{cvData.general.name}</p>
              <div className="general-sub">
                {cvData.general.phone && <p><FontAwesomeIcon icon={faPhone} /> {cvData.general.phone}</p>}
                {cvData.general.email && <p><FontAwesomeIcon icon={faEnvelope} /> {cvData.general.email}</p>}
                {cvData.general.city && <p><FontAwesomeIcon icon={faLocationDot} /> {cvData.general.city}</p>}
              </div>
            </div>
            <div className="document-profile document-section">
              {cvData.profile && <><p className="section-title">PROFILE</p> {cvData.profile}</>}
            </div>
            <div className="document-education document-section">
              {cvData.education[0].degree && <p className="section-title">EDUCATION</p>}
              {cvData.education.map((edu) => (
                <div key={edu.id} className="education-entry">
                  <div className="education-top">
                    <div className="education-degree">{edu.degree}</div>
                    <div className="education-dates">
                      <span>{edu.dateFrom}</span>
                      {edu.dateFrom && edu.dateTo && <span> - </span>}
                      <span>{edu.dateTo}</span>
                    </div>
                  </div>
                  <p><em>{edu.school}</em></p>
                </div>
              ))}
            </div>
            <div className="document-experience document-section">
              {cvData.experience[0].title && <p className="section-title">EXPERIENCE</p>}
              {cvData.experience.map((exp) => (
                <div key={exp.id} className="experience-entry">
                  <div className="experience-top">
                    <div className="experience-title">{exp.title}</div>
                    <div className="experience-dates">
                      <span>{exp.dateFrom}</span>
                      {exp.dateFrom && exp.dateTo && <span> - </span>}
                      <span>{exp.dateTo}</span>
                    </div>
                  </div>
                  <p className="experience-company"><em>{exp.company}</em></p>
                  <ul className="experience-description-list">
                    { 
                      exp.description.length > 0 &&
                      exp.description.split("\n").map((line) => (
                        <li>{line}</li>
                      ))
                    }
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
