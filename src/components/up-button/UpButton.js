import { FaAngleDoubleUp } from "react-icons/fa";
import "./up-button.css";
import { useEffect, useRef } from "react";

function UpButton() {
  const upButton = useRef(null);

  const handleScroll = (e) => {
    upButton.current.style.display =
      e.currentTarget.scrollY >= 400
        ? (upButton.current.style.display = "flex")
        : (upButton.current.style.display = "none");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavor: "smooth",
    });
  };

  return (
    <span className="up-button" ref={upButton} onClick={handleClick}>
      <FaAngleDoubleUp />
    </span>
  );
}

export default UpButton;
