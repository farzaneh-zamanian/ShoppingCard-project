import React from "react";
import styles from "./Sidebar.module.css";
import { createQueryObject } from "../../helpers/helper";
import { FaListUl } from "react-icons/fa";
import { categories } from "../../constants/categoryList";

function SideBar({ query, setQuery }) {
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
      <div className={styles.sideBarTitle}>
        <FaListUl />
        <p>Catgoroies</p>
      </div>
      <div className={styles.sideBarContent}>
        <ul onClick={categoryHandler}>
          {/* <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li> */}
          {categories.map((category) => (
            <li
              key={category.id}
              className={
                category.type.toLowerCase() === query.category
                  ? styles.selectedCategory
                  : null
              }
            >
              {category.type}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SideBar;
