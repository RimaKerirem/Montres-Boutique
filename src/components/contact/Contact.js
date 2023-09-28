import "./contact.css";
import { FaFacebook, FaInstagram, FaMobileAlt } from "react-icons/fa";

function Contact() {
  return (
    <ul className="contact">
      <li>
        <a href="https://facebook.com" target="__blank">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" target="__blank">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="tel:+0123 45 67 89">
          <FaMobileAlt />
          <span>0123 45 67 89</span>
        </a>
      </li>
    </ul>
  );
}

export default Contact;
