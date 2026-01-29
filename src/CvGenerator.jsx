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

function CvGenerator() {
  const [cvData, setCvData] = useState({
    general: { name: "", city: "", phone: "", website: "" },
    profile: "",
    education: [createEducation()],
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
        />
        <Preview cvData={cvData} />
      </div>
    </>
  )
}

export default CvGenerator