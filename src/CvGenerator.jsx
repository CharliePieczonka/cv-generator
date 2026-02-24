import { useState } from 'react'
import Editor from './Editor.jsx'
import Preview from './Preview.jsx'

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

function CvGenerator() {
  const [cvData, setCvData] = useState({
    general: { name: "", city: "", phone: "", email: "" },
    profile: "",
    education: [createEducation()],
    experience: [createExperience()],
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

  return (
    <>
      <div className="header">
        <h1>CV Generator</h1>
      </div>
      <div className="main">
        <Editor
          cvData={cvData}
          setCvData={setCvData}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
          addExperience={addExperience}
          deleteExperience={deleteExperience}
        />
        <Preview cvData={cvData} />
      </div>
    </>
  )
}

export default CvGenerator