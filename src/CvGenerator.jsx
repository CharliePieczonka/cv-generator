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

  const addEducation = () => {
    setCvData(prev => ({
      ...prev,
      education: [...prev.education, createEducation()],
    }));
  };

  const deleteEducation = (id) => {
    if(cvData.education.length > 1) {
      setCvData(prev => ({
        ...prev,
        education: prev.education.filter(e => e.id !== id),
      }));
    } 
  };

  const addExperience = () => {
    setCvData(prev => ({
      ...prev,
      experience: [...prev.experience, createExperience()],
    }));
  };

  const deleteExperience = (id) => {
    if(cvData.experience.length > 1) {
      setCvData(prev => ({
        ...prev,
        experience: prev.experience.filter(e => e.id !== id),
      }));
    } 
  };

  const addSkill = () => {
    setCvData(prev => ({
      ...prev,
      skills: [...prev.skills, createSkill()],
    }));
  };

  const deleteSkill = (id) => {
    if(cvData.experience.length > 1) {
      setCvData(prev => ({
        ...prev,
        skills: prev.skills.filter(e => e.id !== id),
      }));
    } 
  };

  const addProject = () => {
    setCvData(prev => ({
      ...prev,
      projects: [...prev.projects, createProject()],
    }));
  };

  const deleteProject = (id) => {
    if(cvData.projects.length > 1) {
      setCvData(prev => ({
        ...prev,
        projects: prev.projects.filter(e => e.id !== id),
      }));
    } 
  };

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
          addEducation={addEducation}
          deleteEducation={deleteEducation}
          addExperience={addExperience}
          deleteExperience={deleteExperience}
          addSkill={addSkill}
          deleteSkill={deleteSkill}
          addProject={addProject}
          deleteProject={deleteProject}
        />
        <Preview cvData={cvData} />
      </div>
    </>
  )
}

export default CvGenerator