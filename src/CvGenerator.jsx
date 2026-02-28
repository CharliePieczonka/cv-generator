import { useState } from 'react'
import Editor from './Editor.jsx'
import Preview from './Preview.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const createEducation = () => ({
  id: crypto.randomUUID(),
  degree: "",
  school: "",
  dateFrom: "",
  dateTo: "",
});

const createExperience = () => ({
  id: crypto.randomUUID(),
  title: "",
  company: "",
  dateFrom: "",
  dateTo: "",
  description: "",
});

const createSkill = () => ({
  id: crypto.randomUUID(),
  title: "",
  description: "",
});

const createProject = () => ({
  id: crypto.randomUUID(),
  title: "",
  description: "",
});

function CvGenerator() {
  const [cvData, setCvData] = useState({
    general: { name: "", city: "", phone: "", email: "" },
    profile: "",
    education: [createEducation()],
    experience: [createExperience()],
    skills: [createSkill()],
    projects: [createProject()],
  });

  const creators = {
    education: createEducation,
    experience: createExperience,
    skills: createSkill,
    projects: createProject,
  };

  const addItem = (section) => setCvData(prev => ({
    ...prev, [section]: [...prev[section], creators[section]()]
  }));

  const deleteItem = (section, id) => setCvData(prev => ({
    ...prev, [section]: prev[section].filter(e => e.id !== id)
  }));

  return (
    <>
      <div className="header">
        <h1>CV Generator</h1>
        <div className="icons-div">
          <a href="https://www.linkedin.com/in/charlie-pieczonka/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="header-icon"/></a>
          <a href="https://github.com/CharliePieczonka" target="_blank"><FontAwesomeIcon icon={faGithub} className="header-icon"/></a>
        </div>
      </div>
      <div className="main">
        <Editor
          cvData={cvData}
          setCvData={setCvData}
          addItem={addItem}
          deleteItem={deleteItem}
        />
        <Preview cvData={cvData} />
      </div>
    </>
  )
}

export default CvGenerator