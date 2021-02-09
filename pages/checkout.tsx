import React, { useContext, useState } from "react";
import checkStyles from "./cusStyles/checkout.module.css";
import { DataContext } from "../dataContext/GlobalState";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import Link from "next/link";
import Meta from "../components/Meta";

const Checkout = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, orders } = state;
  const id = orders.length + 1;

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const placeOrder = async () => {
    const newOrder = {
      id: id,
      fName: fName,
      lName: lName,
      phone: phone,
      address1: address1,
      address2: address2,
      city: city,
      country: country,
      items: cart.length,
      createdAt: new Date(),
      cart: cart,
    };

    dispatch({ type: "ADD_ORDER", payload: [...orders, newOrder] });

    dispatch({ type: "ADD_CART", payload: [] });
  };

  return (
    <div>
      <Meta title="Checkout - Fresh Food" />

      {cart.length === 0 && (
        <div className={checkStyles.empty}>
          <h3>There is no products in your cart to checkout.</h3>
          <Link href="/">
            <Button variant="contained">Go to Home</Button>
          </Link>
        </div>
      )}
      {cart.length > 0 && (
        <div className={checkStyles.layout}>
          <Paper className={checkStyles.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="fName"
                  label="First Name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lName"
                  label="Last Name"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  name="phone"
                  fullWidth
                  id="phone"
                  label="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address1"
                  label="Address line 1"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  label="Address line 2"
                  fullWidth
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  label="City"
                  fullWidth
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  label="Country"
                  fullWidth
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </Grid>
            </Grid>

            <div className={checkStyles.button}>
              <Link href={`/order/${id}`}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={placeOrder}
                >
                  Place order
                </Button>
              </Link>
            </div>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default Checkout;
