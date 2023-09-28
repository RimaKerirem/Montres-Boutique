import "./img-product.css";

function ImgProduct({ image }) {
  return (
    <div className="img-product">
      <img src={image} alt="" />
    </div>
  );
}

export default ImgProduct;
