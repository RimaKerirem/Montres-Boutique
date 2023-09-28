import "./primary-button.css";

function PrimaryButton(props) {
  return (
    <button
      className={props.qte === 1 ? "primary-button disabled" : "primary-button"}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}

export default PrimaryButton;
