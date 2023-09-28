import { useDispatch } from "react-redux";
import { CloseButton, ImgProduct, PrimaryButton } from "../components";
import "./cart-item.css";
import {
  addToCart,
  deleteFromCart,
  modifyQuantity,
} from "../../redux/slices/cartSlice";

function CartItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <ImgProduct image={product.image} />

      <ul className="info">
        <li className="mark">{product.mark}</li>
        <li className="price">{product.price} DA</li>
        <li>
          <ul className="quantity">
            <li>
              <PrimaryButton
                handleClick={() => {
                  dispatch(addToCart(product));
                }}
              >
                +
              </PrimaryButton>
            </li>
            <li className="qte-number">{product.quantity}</li>
            <li>
              <PrimaryButton
                qte={product.quantity}
                handleClick={(e) => {
                  if (product.quantity > 1) {
                    dispatch(modifyQuantity(product));
                  } else {
                    return false;
                  }
                }}
              >
                -
              </PrimaryButton>
            </li>
          </ul>
        </li>
      </ul>

      <CloseButton handleClick={() => dispatch(deleteFromCart(product))} />
    </div>
  );
}

export default CartItem;
