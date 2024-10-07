import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

function Header({ state }) {
  return (
    <header className={styles.header}>
      <Link to="/products">
        <h1>OnlineShop</h1>
      </Link>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
        </ul>
      </nav>
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
