import Link from "next/link";
import { decrease, delCart, increase } from "../dataContext/Actions";
import ClearIcon from "@material-ui/icons/Clear";
import detStyle from "../styles/OrderDet.module.css";
import React from "react";
import { IconButton, TableCell, TableRow } from "@material-ui/core";

const OrderItem = ({ item }) => {
  return (
    <TableRow>
      <TableCell>
        <div className={detStyle.pic}>
          <img
            src={item.imageUrl}
            alt={item.name}
            style={{ minWidth: "80px", height: "80px" }}
          />
        </div>

        <div className={detStyle.title}>{item.name}</div>
      </TableCell>

      <TableCell align="right" style={{ fontWeight: "bold" }}>
        ${item.price}
      </TableCell>

      <TableCell align="center" style={{ fontWeight: "bold" }}>
        {item.quantity}
      </TableCell>

      <TableCell align="right" style={{ fontWeight: "bold" }}>
        ${item.price * item.quantity}
      </TableCell>

      <TableCell></TableCell>
    </TableRow>
  );
};

export default OrderItem;
