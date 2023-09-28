import { useState } from "react";
import { addToCart } from "../../redux/slices/cartSlice";
import { Modal, PrimaryButton } from "../components";
import "./product-card.css";
import { useDispatch } from "react-redux";

function ProductCard({ product, markName, price }) {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [showList, setShowList] = useState(false);

  return (
    <div className="product-card">
      <img src={product.image} alt="" />

      <div className="card-body">
        <div className="info">
          <div>
            <h3 className="mark">{markName}</h3>
            <p className="price">{price} DA</p>
          </div>
          <div
            className={showList ? "specification bg" : "specification"}
            onClick={(e) => setShowList(!showList)}
          >
            <span></span>
            <span></span>
            <span></span>

            <div className={showList ? "list show" : "list"}>
              <h4>Spécification</h4>

              <ul>
                {product.specification.map((li, index) => (
                  <li key={index}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <PrimaryButton
          handleClick={() => {
            dispatch(addToCart({ ...product, markName, price }));
            setOpenModal(true);
          }}
        >
          Ajouter au panier
        </PrimaryButton>
      </div>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        product={product}
        markName={markName}
        price={price}
      />
    </div>
  );
}

export default ProductCard;
