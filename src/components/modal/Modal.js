import {
  CloseButton,
  ImgProduct,
  PrimaryButton,
  SecondaryButton,
} from "../components";
import { Link } from "react-router-dom";
import "./modal.css";

function Modal({ openModal, setOpenModal, product, markName, price }) {
  return (
    <div
      className={openModal ? "modal open" : "modal"}
      onClick={() => setOpenModal(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <CloseButton handleClick={() => setOpenModal(false)} />

        <div className="product-info">
          <ImgProduct image={product.image} />

          <h2>{markName}</h2>

          <p>{price} DA</p>
        </div>

        <SecondaryButton handleClick={() => setOpenModal(false)}>
          Continuer D'acheter
        </SecondaryButton>

        <Link to="panier">
          <PrimaryButton>Voir Mon Panier</PrimaryButton>
        </Link>
      </div>
    </div>
  );
}

export default Modal;
