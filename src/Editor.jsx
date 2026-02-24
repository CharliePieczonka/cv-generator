import EditorSection from './EditorSection.jsx'
import EditorBlock from './EditorBlock.jsx'
import TextInput from './inputs/TextInput.jsx'

function Editor({ cvData, setCvData, addEducation, deleteEducation, addExperience, deleteExperience, addSkill, deleteSkill, addProject, deleteProject }) {
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
            label="Phone"
            value={cvData.general.phone}
            onChange={(v) =>
              setCvData(prev => ({
                ...prev,
                general: { ...prev.general, phone: v }
              }))
            }
          />
        </EditorBlock>
        <EditorBlock>
          <TextInput
            label="Email"
            value={cvData.general.email}
            onChange={(v) =>
              setCvData(prev => ({
                ...prev,
                general: { ...prev.general, email: v }
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
      </EditorSection>
      <EditorSection title="Profile">
        <EditorBlock>
          <textarea 
            className="editor-textarea"
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
      <EditorSection title="Education">
        {cvData.education.map((edu) => (
          <div key={edu.id} className="education-item repeatable-section-item">
            <div className="section-delete-container">
              <button 
                type="button"
                className="btn section-delete-btn"
                onClick={() => deleteEducation(edu.id)}
              >
                X
              </button>
            </div>
            <EditorBlock>
              <TextInput
                label="Degree"
                value={edu.degree}
                onChange={(v) =>
                  setCvData(prev => ({
                    ...prev,
                    education: prev.education.map(e =>
                      e.id === edu.id ? { ...e, degree: v } : e
                    )
                  }))
                }
              />
              <TextInput
                label="School"
                value={edu.school}
                onChange={(v) => {
                  setCvData(prev => ({
                    ...prev,
                    education: prev.education.map(e =>
                      e.id === edu.id ? { ...e, school: v } : e
                    )
                  }))
                }}
              />
            </EditorBlock>
            <EditorBlock>
              <TextInput
                label="Start Date"
                value={edu.dateFrom}
                onChange={(v) => {
                  setCvData(prev => ({
                    ...prev,
                    education: prev.education.map(e =>
                      e.id === edu.id ? { ...e, dateFrom: v } : e
                    )
                  }))
                }}
              />
              <TextInput
                label="End Date"
                value={edu.dateTo}
                onChange={(v) => {
                  setCvData(prev => ({
                    ...prev,
                    education: prev.education.map(e =>
                      e.id === edu.id ? { ...e, dateTo: v } : e
                    )
                  }))
                }}
              />
            </EditorBlock>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary w-50 align-self-center"
          onClick={addEducation}
        >
          Add Education
        </button>
      </EditorSection>
      <EditorSection title="Experience">
        {cvData.experience.map((exp) => (
          <div key={exp.id} className="experience-item repeatable-section-item">
            <div className="section-delete-container">
              <button 
                type="button"
                className="btn section-delete-btn"
                onClick={() => deleteExperience(exp.id)}
              >
                X
              </button>
            </div>
            <EditorBlock>
              <TextInput
                label="Job Title"
                value={exp.title}
                onChange={(v) =>
                  setCvData(prev => ({
                    ...prev,
                    experience: prev.experience.map(e =>
                      e.id === exp.id ? { ...e, title: v } : e
                    )
                  }))
                }
              />
              <TextInput
                label="Company"
                value={exp.company}
                onChange={(v) => {
                  setCvData(prev => ({
                    ...prev,
                    experience: prev.experience.map(e =>
                      e.id === exp.id ? { ...e, company: v } : e
                    )
                  }))
                }}
              />
            </EditorBlock>
            <EditorBlock>
              <TextInput
                label="Start Date"
                value={exp.dateFrom}
                onChange={(v) => {
                  setCvData(prev => ({
                    ...prev,
                    experience: prev.experience.map(e =>
                      e.id === exp.id ? { ...e, dateFrom: v } : e
                    )
                  }))
                }}
              />
              <TextInput
                label="End Date"
                value={exp.dateTo}
                onChange={(v) => {
                  setCvData(prev => ({
                    ...prev,
                    experience: prev.experience.map(e =>
                      e.id === exp.id ? { ...e, dateTo: v } : e
                    )
                  }))
                }}
              />
            </EditorBlock>
            <div>
              <label className="text-label">Description:</label>
              <textarea 
                className="editor-textarea"
                onChange={(v) =>
                  setCvData(prev => ({
                    ...prev,
                    experience: prev.experience.map(e => 
                      e.id === exp.id ? {...e, description: v.target.value } : e
                    )
                  }))
                }
              >
              </textarea>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary w-50 align-self-center"
          onClick={addExperience}
        >
          Add Experience
        </button>
      </EditorSection>
      <EditorSection title="Skills">
        {cvData.skills.map((skl) => (
          <div key={skl.id} className="skill-item repeatable-section-item">
            <div className="section-delete-container">
              <button 
                type="button"
                className="btn section-delete-btn"
                onClick={() => deleteSkill(skl.id)}
              >
                X
              </button>
            </div>
            <EditorBlock>
              <TextInput
                label="Title"
                value={skl.title}
                onChange={(v) =>
                  setCvData(prev => ({
                    ...prev,
                    skills: prev.skills.map(e =>
                      e.id === skl.id ? { ...e, title: v } : e
                    )
                  }))
                }
              />
            </EditorBlock>
            <div>
              <label className="text-label">Description:</label>
              <textarea 
                className="editor-textarea"
                onChange={(v) =>
                  setCvData(prev => ({
                    ...prev,
                    skills: prev.skills.map(e => 
                      e.id === skl.id ? {...e, description: v.target.value } : e
                    )
                  }))
                }
              >
              </textarea>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary w-50 align-self-center"
          onClick={addSkill}
        >
          Add Skill
        </button>
      </EditorSection>
      <EditorSection title="Projects">
        {cvData.projects.map((prj) => (
          <div key={prj.id} className="project-item repeatable-section-item">
            <div className="section-delete-container">
              <button 
                type="button"
                className="btn section-delete-btn"
                onClick={() => deleteProject(prj.id)}
              >
                X
              </button>
            </div>
            <EditorBlock>
              <TextInput
                label="Title"
                value={prj.title}
                onChange={(v) =>
                  setCvData(prev => ({
                    ...prev,
                    projects: prev.projects.map(e =>
                      e.id === prj.id ? { ...e, title: v } : e
                    )
                  }))
                }
              />
            </EditorBlock>
            <div>
              <label className="text-label">Description:</label>
              <textarea 
                className="editor-textarea"
                onChange={(v) =>
                  setCvData(prev => ({
                    ...prev,
                    projects: prev.projects.map(e => 
                      e.id === prj.id ? {...e, description: v.target.value } : e
                    )
                  }))
                }
              >
              </textarea>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-secondary w-50 align-self-center"
          onClick={addProject}
        >
          Add Project
        </button>
      </EditorSection>
    </div>
  );
}

export default Editor