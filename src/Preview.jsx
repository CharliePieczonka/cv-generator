import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faComputer, faPhone } from '@fortawesome/free-solid-svg-icons';

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
                {cvData.general.city && <p><FontAwesomeIcon icon={faLocationDot} /> {cvData.general.city}</p>}
                {cvData.general.phone && <p><FontAwesomeIcon icon={faPhone} /> {cvData.general.phone}</p>}
                {cvData.general.website && <p><FontAwesomeIcon icon={faComputer} /> {cvData.general.website}</p>}
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
          </div>
        </div>
      </div>
    </div>
  );
}
