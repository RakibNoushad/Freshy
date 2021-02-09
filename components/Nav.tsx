import React, { useContext } from "react";
import Link from "next/link";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import navStyles from "../styles/Nav.module.css";
import { DataContext } from "../dataContext/GlobalState";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const isActive = (r) => {
    if (r === router.pathname) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <nav className={navStyles.nav}>
      {/* <ul>
                <li> */}
      <div className={navStyles.home}>
        <Link href="/">FRESHY</Link>
      </div>
      {/* </li> */}

      {/* <li> */}
      <div className={navStyles.icon}>
        <Link href="/cart">
          <IconButton aria-label="cart">
            <Badge badgeContent={cart.length} color="secondary" showZero>
              {isActive("/cart") ? (
                <ShoppingCartIcon style={{ color: "#000" }} />
              ) : (
                <ShoppingCartOutlinedIcon />
              )}
            </Badge>
          </IconButton>
        </Link>
        {/* </li>

                <li> */}
        <Link href="/my-orders">
          {/* <AssignmentIcon style={{
                                        // top: '-10px',
                                        // right: '-10px',
                                        // color: 'red',
                                        cursor: 'pointer',
                        }}>
                        </AssignmentIcon> */}

          <IconButton aria-label="my-orders">
            {isActive("/my-orders") ? (
              <AssignmentIcon style={{ color: "#000" }} />
            ) : (
              <AssignmentOutlinedIcon />
            )}
          </IconButton>
        </Link>
        {/* </li>
            </ul> */}
      </div>

      <style jsx>{`
        .active {
          color: rgb(0, 0, 0);
        }
        .non-active {
          color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </nav>
  );
};

export default Nav;
