import Link from "next/link";
import { decrease, delCart, increase } from "../dataContext/Actions";
import ClearIcon from "@material-ui/icons/Clear";
import cartStyles from "../pages/cusStyles/cart.module.css";
import React from "react";
import { IconButton, TableCell, TableRow } from "@material-ui/core";

const CartItem = ({ item, dispatch, cart }) => {
  return (
    <TableRow>
      <TableCell>
        <div className={cartStyles.pic}>
          <img
            src={item.imageUrl}
            alt={item.name}
            className={cartStyles.image}
          />
        </div>

        <div className={cartStyles.title}>{item.name}</div>
      </TableCell>

      <TableCell align="right" style={{ fontWeight: "bold" }}>
        ${item.price}
      </TableCell>

      <TableCell>
        <div className={cartStyles.qty}>
          <button
            onClick={() => dispatch(decrease(cart, item.id))}
            disabled={item.quantity === 1 ? true : false}
          >
            {" "}
            -{" "}
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => dispatch(increase(cart, item.id))}
            disabled={item.quantity === item.inStock ? true : false}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </TableCell>

      <TableCell align="right" style={{ fontWeight: "bold" }}>
        ${item.price * item.quantity}
      </TableCell>

      <TableCell>
        <IconButton onClick={() => dispatch(delCart(cart, item.id))}>
          <ClearIcon className={cartStyles.cross} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
