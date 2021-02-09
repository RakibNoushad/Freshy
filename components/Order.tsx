import { TableCell, TableRow } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import orderStyles from "../pages/cusStyles/myOrders.module.css";

const Order = ({ order }) => {
  return (
    <Link href="/order/[id]" as={`/order/${order.id}`}>
      <TableRow className={orderStyles.row}>
        <TableCell>{order.id}</TableCell>

        <TableCell>
          {order.fName} {order.lName}
        </TableCell>

        <TableCell align="center">
          {new Date(order.createdAt).toLocaleDateString()}
        </TableCell>

        <TableCell align="center">{order.items}</TableCell>
      </TableRow>
    </Link>
  );
};

export default Order;
