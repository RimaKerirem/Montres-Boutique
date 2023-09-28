import "./products.css";
import { Container, ProductCard } from "../../components/components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../redux/slices/productsSlice";
import { marks } from "../../data/marks";

function Products() {
  const productsData = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [mark, setMark] = useState("Tous");

  useEffect(() => {
    if (mark === "Tous") {
      dispatch(getProducts(marks));
    } else {
      dispatch(getProducts(marks.filter((item) => item.name === mark)));
    }
  }, [dispatch, mark]);

  return (
    <div className="products">
      <Container>
        <ul className="marks-nav">
          <li
            className={mark === "Tous" ? "active" : ""}
            onClick={() => setMark("Tous")}
          >
            Tous
          </li>
          {marks.map((li) => (
            <li
              key={li.id}
              className={li.name === mark ? "active" : ""}
              onClick={() => setMark(li.name)}
            >
              {li.name}
            </li>
          ))}
        </ul>

        <div className="cards-container">
          {productsData.map((item) =>
            item.products.map((product) => (
              <ProductCard
                product={product}
                markName={item.name}
                price={item.price}
                key={product.id}
              />
            ))
          )}
        </div>
      </Container>
    </div>
  );
}

export default Products;
