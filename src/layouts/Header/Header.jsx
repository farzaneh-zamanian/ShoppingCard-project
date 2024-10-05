import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

function Header({ state }) {
  return (
    <header className={styles.header}>
      <Link to="/products">
        <h1>OnlineShop</h1>
      </Link>
      <Link to="/checkout">
        <div className={styles.shoppingCardIcon}>
          <PiShoppingCartSimpleBold />
          {!!state.productsQuantity && <span>{state.productsQuantity}</span>}
        </div>
      </Link>
    </header>
  );
}

export default Header;
