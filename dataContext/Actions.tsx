export const ACTIONS = {
  NOTIFY: "NOTIFY",
  ADD_CART: "ADD_CART",
  ADD_ORDER: "ADD_ORDER",
};

export const addToCart = (product, cart, qty?) => {
  if (qty === undefined) qty = 1;

  const check = cart.every((item) => {
    return item.id !== product.id;
  });

  if (!check)
    return {
      type: "NOTIFY",
      payload: { error: "The product has been added to cart." },
    };

  product.inStock -= qty;

  return {
    type: "ADD_CART",
    payload: [...cart, { ...product, quantity: qty }],
  };
};

export const decrease = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item.id === id) item.quantity -= 1;
  });

  return { type: "ADD_CART", payload: newData };
};

export const increase = (data, id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item.id === id) item.quantity += 1;
  });

  return { type: "ADD_CART", payload: newData };
};

export const delCart = (cart, id) => {
  const newData = cart.filter((item) => item.id !== id);

  return { type: "ADD_CART", payload: newData };
};
