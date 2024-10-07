import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./ProductsPage.module.css";
import Card from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
// import Input from "../../components/SearchBox/Input";
import {
  filterProducts,
  initialQuery,
  searchProducts,
} from "../../helpers/helper";
import SearchBox from "../../components/SearchBox/SearchBox";
import SideBar from "../../components/SideBar/SideBar";
import useProductsContext from "../../hook/useProductsContext";
import { useTitle } from "../../hook/useTitle";

function ProductsPage() {
  useTitle("Product page")

  // STATES
  const { products } = useProductsContext(); //all products state

  const [displayedProducts, setDisplayedProducts] = useState([]); //displayed products state
  const [searchValue, setSearchValue] = useState(""); //search state
  const [query, setQuery] = useState({}); //search and category or one of them state

  const [searchParams, setSearchParams] = useSearchParams(); //query string

  // USEEFFECT
  useEffect(() => {
    setDisplayedProducts(products);
    // after reRendering page the query stay in url
    setQuery(initialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    // ********   solve the error of input when delete the input
    setSearchValue(query.search || "");
    // ********   solve the error of input

    let resultSearchedProducts = searchProducts(products, query.search);
    resultSearchedProducts = filterProducts(
      resultSearchedProducts,
      query.category
    );
    setDisplayedProducts(resultSearchedProducts);
  }, [query]);

  return (
    <>
      {/* SEARCH BOX */}
      <SearchBox
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setQuery={setQuery}
      />

      {/* MAIN */}
      <main className={styles.container}>
        {/* PRODUCTS LIST SECTION*/}
        <section className={styles.productsContainer}>
          {!displayedProducts.length && <Loading />}
          {displayedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </section>

        {/* CATEGORY SECTION */}
        <SideBar query={query} setQuery={setQuery} />
      </main>
    </>
  );
}

export default ProductsPage;
