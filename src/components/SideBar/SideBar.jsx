import React from "react";
import styles from "./Sidebar.module.css";
import { createQueryObject } from "../../helpers/helper";
import { FaListUl } from "react-icons/fa";


function SideBar({ setQuery }) {
  //CATEGORY ACTION
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    // setQuery((query) => ({ ...query, category: category }));
    setQuery((query) => createQueryObject(query, { category: category }));
  };
  return (
    <section className={styles.sideBarContainer}>
      <div>
        <FaListUl />
        <p>Catgoroies</p>
        <ul onClick={categoryHandler}>
          <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
        </ul>
      </div>
    </section>
  );
}

export default SideBar;
