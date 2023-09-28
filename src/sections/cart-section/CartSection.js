import { useDispatch, useSelector } from "react-redux";
import "./cart-section.css";

import { Link } from "react-router-dom";
import {
  CartItem,
  Container,
  PrimaryButton,
  SecondaryButton,
} from "../../components/components";
import { clearCart } from "../../redux/slices/cartSlice";

function CartSection() {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartData.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const totalQte = cartData.reduce((acc, product) => {
    acc += product.quantity;
    return acc;
  }, 0);

  return (
    <div className="cart">
      <h1 className="cart-title">Mon Panier</h1>

      {cartData.length === 0 && (
        <Container>
          <p>Votre panier est actuellement vide</p>
          <Link to="/">
            <PrimaryButton>Acheter Maintenant</PrimaryButton>
          </Link>
        </Container>
      )}

      {cartData.length !== 0 && (
        <div className="cart-content">
          <div className="left">
            {cartData.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
          </div>

          <div className="right">
            <h2>Résumé du Panier</h2>

            <ul className="nbre-products">
              <li>Produits Total</li>
              <li>{totalQte}</li>
            </ul>

            <ul className="total-price">
              <li>Prix Total</li>
              <li>{totalPrice} DA</li>
            </ul>

            <ul>
              <li>Livraison</li>
              <li>58 Wilayas</li>
            </ul>

            <SecondaryButton handleClick={() => dispatch(clearCart())}>
              Vider Le Panier
            </SecondaryButton>

            <Link to="/commande">
              <PrimaryButton>Commander</PrimaryButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartSection;
