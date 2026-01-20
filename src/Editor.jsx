import EditorSection from './EditorSection.jsx'
import EditorBlock from './EditorBlock.jsx'
import TextInput from './inputs/TextInput.jsx'

function Editor({ cvData, setCvData }) {
  return (
    <div className="editor">
      <h2>Editor</h2>
      <EditorSection title="General Information">
        <EditorBlock>
          <TextInput
            label="Name"
            value={cvData.general.name}
            onChange={(v) =>
              setCvData(prev => ({
                ...prev,
                general: { ...prev.general, name: v }
              }))
            }
          />
          <TextInput
            label="City"
            value={cvData.general.city}
            onChange={(v) =>
              setCvData(prev => ({
                ...prev,
                general: { ...prev.general, city: v }
              }))
            }
          />
        </EditorBlock>

        <EditorBlock>
          <TextInput
            label="Phone"
            value={cvData.general.phone}
            onChange={(v) =>
              setCvData(prev => ({
                ...prev,
                general: { ...prev.general, phone: v }
              }))
            }
          />
          <TextInput
            label="Website"
            value={cvData.general.website}
            onChange={(v) =>
              setCvData(prev => ({
                ...prev,
                general: { ...prev.general, website: v }
              }))
            }
          />
        </EditorBlock>
      </EditorSection>
      <EditorSection title="Profile">
        <EditorBlock>
          <textarea 
            className="profile-text"
            onChange={(e) =>
              setCvData(prev => ({
                ...prev,
                profile: e.target.value
              }))
            }
          >
          </textarea>
        </EditorBlock>
      </EditorSection>
    </div>
  );
}

export default Editor