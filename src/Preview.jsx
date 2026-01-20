import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faComputer, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Preview({ cvData }) {
  return (
    <div className="preview">
      <div className="document-wrapper">
        <h2>Preview</h2>
        <div className="document">
          <div className="document-body">
            <div className="document-general">
              <p className="general-name">{cvData.general.name}</p>
              <div className="general-sub">
                {cvData.general.city && <p><FontAwesomeIcon icon={faLocationDot} /> {cvData.general.city}</p>}
                {cvData.general.phone && <p><FontAwesomeIcon icon={faPhone} /> {cvData.general.phone}</p>}
                {cvData.general.website && <p><FontAwesomeIcon icon={faComputer} /> {cvData.general.website}</p>}
              </div>
            </div>
            <div className="document-profile">
              {cvData.profile && <><p className="section-title">Profile</p> {cvData.profile}</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
