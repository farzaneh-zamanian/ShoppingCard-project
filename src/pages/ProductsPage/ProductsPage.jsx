import styles from "./ProductsPage.module.css";
import { useProducts } from "../../context/ProductContext";
import Card from "../../components/Card/Card";
function ProductsPage() {
  const { products } = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.productsContainer}>
        {!products.length && <p>...Loading</p>}
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.sideBarContainer}>Sidebar</div>
    </div>
  );
}

export default ProductsPage;
