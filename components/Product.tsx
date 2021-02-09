import React, { useContext } from "react";
import productStyle from "../styles/Product.module.css";
import Link from "next/link";

const Product = ({ product }) => {
  return (
    <div className={productStyle.item}>
      <Link href="/product/[id]" as={`/product/${product.id}`}>
        <div className={productStyle.card}>
          <div className={productStyle.image}>
            <img src={product.imageUrl} alt={product.name}></img>
          </div>

          <div className={productStyle.content}>
            <h3>{product.name}</h3>

            <div>
              <p>${product.price}</p>
              {product.inStock > 0 ? (
                <p>In Stock: {product.inStock}</p>
              ) : (
                <p className={productStyle.outStock}>Out of Stock</p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
