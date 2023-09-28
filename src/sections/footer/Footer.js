import { Contact, Container } from "../../components/components";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <Container>
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <Contact />
      </Container>
    </footer>
  );
}

export default Footer;
