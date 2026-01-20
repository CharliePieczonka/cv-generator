import EditorSection from './EditorSection.jsx'
import EditorBlock from './EditorBlock.jsx'
import TextInput from './inputs/TextInput.jsx'

function Editor({ generalInfo, setGeneralInfo }) {
  return (
    <div className="editor">
      <h2>Editor</h2>

      <EditorSection title="General Information">
        <EditorBlock>
          <TextInput
            label="Name"
            value={generalInfo.name}
            onChange={(v) =>
              setGeneralInfo({ ...generalInfo, name: v })
            }
          />
          <TextInput
            label="City"
            value={generalInfo.city}
            onChange={(v) =>
              setGeneralInfo({ ...generalInfo, city: v })
            }
          />
        </EditorBlock>

        <EditorBlock>
          <TextInput
            label="Phone"
            value={generalInfo.phone}
            onChange={(v) =>
              setGeneralInfo({ ...generalInfo, phone: v })
            }
          />
          <TextInput
            label="Website"
            value={generalInfo.website}
            onChange={(v) =>
              setGeneralInfo({ ...generalInfo, website: v })
            }
          />
        </EditorBlock>
      </EditorSection>
    </div>
  );
}

export default Editor