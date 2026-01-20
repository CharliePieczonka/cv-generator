
function EditorSection({title, children}) {
  return (
    <div className="section-container">
      <h4>{title}</h4>
      {children}
    </div>
  )
}

export default EditorSection