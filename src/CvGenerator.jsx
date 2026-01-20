import { useState } from 'react'
import Editor from './Editor.jsx'
import Preview from './Preview.jsx'

function CvGenerator() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    city: "",
    phone: "",
    website: "",
  });

  return (
    <>
      <div className="header">
        <h1>CV Generator</h1>
      </div>
      <div className="main">
        <Editor
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <Preview generalInfo={generalInfo} />
      </div>
    </>
  )
}

export default CvGenerator