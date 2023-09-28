import { useSelector } from "react-redux";
import { Container } from "../../components/components";
import "./header.css";
import { FaCartArrowDown, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  const cartData = useSelector((state) => state.cart);

  return (
    <header>
      <Container>
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>

        <ul>
          <li>
            <NavLink to="/">
              <FaHome />
            </NavLink>
          </li>
          <li>
            <NavLink to="/panier">
              <FaCartArrowDown />
            </NavLink>
            <span className="number">{cartData.length}</span>
          </li>
        </ul>
      </Container>
    </header>
  );
}

export default Header;
