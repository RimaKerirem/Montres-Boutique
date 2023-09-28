import "./Secondary-button.css";

function SecondaryButton(props) {
  return (
    <button className="secondary-button" onClick={props.handleClick}>
      {props.children}
    </button>
  );
}

export default SecondaryButton;
