import Product from "./Product";
import productStyle from "../styles/Product.module.css";

const Products = ({ products }) => {
  return (
    <div className={productStyle.grid}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
