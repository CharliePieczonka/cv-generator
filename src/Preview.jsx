export default function Preview({ generalInfo }) {
  return (
    <div className="preview">
      <div className="document-wrapper">
        <h2>Preview</h2>
        <div className="document">
          <div className="document-body">
            <div className="document-general">
              <p>Name: {generalInfo.name}</p>
              <p>City: {generalInfo.city}</p>
              <p>Phone: {generalInfo.phone}</p>
              <p>Website: {generalInfo.website}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
