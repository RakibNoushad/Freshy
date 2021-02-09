import { Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import footStyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={footStyles.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link href="/">Fresh Food</Link>
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default Footer;
