import Link from "next/link";
import React, { useContext } from "react";
import Meta from "../components/Meta";
import { DataContext } from "../dataContext/GlobalState";
import orderStyles from "./cusStyles/myOrders.module.css";
import Order from "../components/Order";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const myorders = () => {
  const { state, dispatch } = useContext(DataContext);
  const { orders } = state;
  return (
    <div>
      <Meta title="My Orders - Fresh Food" />

      {orders.length === 0 && (
        <div className={orderStyles.empty}>
          <h3>You didn't ordered yet</h3>
          <Link href="/">
            <Button variant="contained">Go to Home</Button>
          </Link>
        </div>
      )}
      {orders.length > 0 && (
        <div>
          <div>
            <Table>
              <TableHead className={orderStyles.head}>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>Order ID</TableCell>
                  <TableCell
                    style={{
                      width: "400px",
                      overflow: "hidden",
                      fontWeight: "bold",
                    }}
                  >
                    Customer Name
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      width: "150px",
                      overflow: "hidden",
                      fontWeight: "bold",
                    }}
                  >
                    Date
                  </TableCell>
                  <TableCell align="center" style={{ fontWeight: "bold" }}>
                    Items
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {orders.map((order) => (
                  <Order key={order.id} order={order} />
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default myorders;
