import React, { useEffect } from "react";
import styles from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { useTitle } from "../../hook/useTitle";

function HomePage() {
  useTitle("Home page")

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Welcome to Our Online Shop</h1>
        <NavLink to="/products">
          <button className={styles.cta}>Get Started</button>
        </NavLink>
      </section>
      {/* Hero Section */}
      {/* Product Showcase */}
      {/* Call-to-Action */}
      {/* Benefits Section */}
    </main>
  );
}

export default HomePage;
