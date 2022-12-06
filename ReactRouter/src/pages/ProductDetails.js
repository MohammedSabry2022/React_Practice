import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product Detail</h1>
      <h2>{params.productId}</h2>
    </section>
  );
};
export default ProductDetails;
