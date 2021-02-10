import React, { useContext, useState } from "react";
import Meta from "../../../components/Meta";
import Button from "@material-ui/core/Button";
import { DataContext } from "../../../dataContext/GlobalState";
import { addToCart } from "../../../dataContext/Actions";
import detStyles from "../../cusStyles/prDetails.module.css";

const product = ({ product }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [qty, setQty] = useState(1);

  const increase = () => {
    setQty(qty + 1);
  };

  const decrease = () => {
    setQty(qty - 1);
  };

  return (
    <div className={detStyles.container}>
      <Meta title="Product Details" />
      <div className={detStyles.cardWrapper}>
        <div className={detStyles.card}>
          {/* Left side */}
          <div className={detStyles.productImgs}>
            <div className={detStyles.imgDisplay}>
              <div className={detStyles.imgShowcase}>
                <img src={product.imageUrl} alt={product.name} />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className={detStyles.productContent}>
            <h3 className={detStyles.productTitle}>{product.name}</h3>
            <div className={detStyles.productPrice}>
              <p className={detStyles.price}>
                Price: <span>${product.price}</span>
              </p>

              {product.inStock > 0 ? (
                <p className={detStyles.stock}>
                  In Stock: <span>{product.inStock}</span>
                </p>
              ) : (
                <p className={detStyles.outStock}>Out of Stock</p>
              )}
            </div>

            <div className={detStyles.productDetail}>
              <h3>about this item: </h3>
              <p>{product.description}</p>
            </div>

            <div className={detStyles.buttons}>
              <div className={detStyles.qty}>
                Quantity:
                <button onClick={decrease} disabled={qty === 1 ? true : false}>
                  {" "}
                  -{" "}
                </button>
                <span>{qty > product.inStock ? qty - 1 : qty}</span>
                <button
                  onClick={increase}
                  disabled={qty >= product.inStock ? true : false}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <div className={detStyles.cart}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={product.inStock > 0 ? false : true}
                  onClick={() => dispatch(addToCart(product, cart, qty))}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://localhost:5000/products/${context.params.id}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default product;
