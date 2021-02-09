import Meta from "../components/Meta";
import React, { useState, useEffect } from "react";
import Products from "../components/Products";

export default function Home({ products }) {
  return (
    <div>
      <Meta title="Home - Fresh Food" />
      <Products products={products} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
