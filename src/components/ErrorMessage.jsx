import './ErrorMessage.css'

export default function ErrorMessage({ message }) {
  return (
    <div>
      <div
        style={{}} className="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error: </strong> {message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">&#10005;</button>
      </div>
    </div>
  );
}