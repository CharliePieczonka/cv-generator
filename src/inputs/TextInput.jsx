function TextInput({ label, value, onChange }) {
  return (
    <div className="text-container">
      <label className="text-label">{label}: </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default TextInput;