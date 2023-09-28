import "./order-form.css";
import { Container, PrimaryButton } from "../../components/components";
import { useState } from "react";
import { communes } from "../../data/communes";
import { wilayas } from "../../data/wilayas";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/slices/cartSlice";

function OrderForm() {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let info = { name, tel, wilaya, commune, cartData };

    console.log(info);

    navigate("/");
    dispatch(clearCart());
  };

  return (
    <div className="order-form">
      <Container>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nom</label>
          <input
            id="name"
            type="text"
            value={name}
            required
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="tel">Téléphone</label>
          <input
            id="tel"
            type="tel"
            value={tel}
            required
            maxLength="10"
            autoComplete="off"
            onChange={(e) => setTel(e.target.value)}
          />
          <label htmlFor="wilaya">Wilaya</label>
          <select
            id="wilaya"
            value={wilaya}
            required
            onChange={(e) => setWilaya(e.target.value)}
          >
            <option value="">Choisir un wilaya</option>
            {wilayas &&
              wilayas.map((elt) => (
                <option value={elt.name.toLowerCase()} key={elt.idWilaya}>
                  {elt.name}
                </option>
              ))}
          </select>

          <label htmlFor="commune">Commune</label>

          <select
            id="commune"
            value={commune}
            required
            onChange={(e) => setCommune(e.target.value)}
          >
            <option value="">Choisir une commune</option>
            {communes &&
              communes
                .filter((elt) => wilaya === elt.wilayaName.toLowerCase())
                .map((elt) => (
                  <option
                    value={elt.communeName.toLowerCase()}
                    key={elt.idCommune}
                  >
                    {elt.communeName}
                  </option>
                ))}
          </select>

          <p className="delivery-price">
            Prix de livraison:&ensp;
            {wilaya !== "" && (
              <span>
                {
                  wilayas.find((elt) => elt.name.toLowerCase() === wilaya)
                    .deliveryPrice
                }
                DA
              </span>
            )}
          </p>

          <PrimaryButton>Acheter</PrimaryButton>
        </form>
      </Container>
    </div>
  );
}

export default OrderForm;
