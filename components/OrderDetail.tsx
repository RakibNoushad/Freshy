import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Link from "next/link";
import React from "react";
import OrderItem from "./OrderItem";
import detStyle from "../styles/OrderDet.module.css";

const OrderDetail = ({ orderDetail, state }) => {
  const { orders } = state;

  return (
    <div>
      {orderDetail.map((order) => (
        <div>
          <div key={order.id} className={detStyle.info}>
            <h3>shipping</h3>
            <h5>
              Name:
              <span>
                {order.fName} {order.lName}
              </span>
            </h5>
            <h5>
              Phone:
              <span>{order.phone}</span>
            </h5>
            <h5>
              Address:
              <span>
                {order.address1}, {order.city}, {order.country}
              </span>
            </h5>
          </div>

          <div className={detStyle.orderItems}>
            <h3>Order Items</h3>
            <Table>
              <TableHead className={detStyle.head}>
                <TableRow>
                  <TableCell
                    className={detStyle.product}
                    style={{ fontWeight: "bold" }}
                  >
                    Product
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Price
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Quantity
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Total
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {order.cart.map((item) => (
                  <OrderItem key={item.id} item={item} />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDetail;
