import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import cartStyle from "./cusStyles/cart.module.css";
import { DataContext } from "../dataContext/GlobalState";
import Meta from "../components/Meta";
import CartItem from "../components/CartItem";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

export const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((init, item) => {
        return init + item.price * item.quantity;
      }, 0);

      setTotal(res);
    };

    getTotal();
  }, [cart]);

  return (
    <div>
      <Meta title="Cart - Fresh Food" />

      {cart.length === 0 && (
        <div className={cartStyle.empty}>
          <h3>There is no products in your cart.</h3>
          <Link href="/">
            <Button variant="contained">Go to Home</Button>
          </Link>
        </div>
      )}
      {cart.length > 0 && (
        <div className={cartStyle.container}>
          <div className={cartStyle.left}>
            <Table>
              <TableHead className={cartStyle.head}>
                <TableRow>
                  <TableCell
                    style={{
                      width: "800px",
                      overflow: "hidden",
                      fontWeight: "bold",
                    }}
                  >
                    Product
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Price
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      width: "130px",
                      overflow: "hidden",
                      fontWeight: "bold",
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Total
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    dispatch={dispatch}
                    cart={cart}
                  />
                ))}
              </TableBody>
            </Table>
          </div>

          <div className={cartStyle.right}>
            <div>
              <h3>Cart Summary</h3>
              <h5>
                Total:
                <span>${total}</span>
              </h5>

              <Link href={"/checkout"}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={cart.length > 0 ? false : true}
                >
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
