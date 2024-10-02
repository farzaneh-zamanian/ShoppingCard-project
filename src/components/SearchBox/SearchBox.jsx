import React, { useEffect } from "react";
import { createQueryObject } from "../../helpers/helper";
import styles from "./SearchBox.module.css";

function SearchBox({ searchValue, setSearchValue, setQuery }) {
  // SEARCH ACTION
  const searchHandler = (event) => {
    // const searchValue = event.target.value?.toLowerCase();
    setSearchValue(event.target.value?.toLowerCase().trim());
    // if (!searchValue) return setSearchValue("");
    // setQuery((query) => createQueryObject(query, { search: searchValue }));
  };

  useEffect(() => {
    setQuery((query) => createQueryObject(query, { search: searchValue }));
  }, [searchValue, setQuery]);
  return (
    <section>
      <div className={styles.container}>
        <input
          type="text"
          value={searchValue}
          placeholder="Search Product Tiltle"
          onChange={searchHandler}
        />
      </div>

    </section>
  );
}

export default SearchBox;
