import { useState } from 'react'
import Editor from './Editor.jsx'
import Preview from './Preview.jsx'

function CvGenerator() {
  const [cvData, setCvData] = useState({
    general: { name: "", city: "", phone: "", website: "" },
    profile: ""
  });

  return (
    <>
      <div className="header">
        <h1>CV Generator</h1>
      </div>
      <div className="main">
        <Editor
          cvData={cvData}
          setCvData={setCvData}
        />
        <Preview cvData={cvData} />
      </div>
    </>
  )
}

export default CvGenerator