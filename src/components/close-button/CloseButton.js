import "./close-button.css";

function CloseButton({ handleClick }) {
  return (
    <span className="close-button" onClick={handleClick}>
      X
    </span>
  );
}

export default CloseButton;
