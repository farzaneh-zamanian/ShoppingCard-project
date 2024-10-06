import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetailsPage.module.css";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import useProductDetails from "../../hook/useProductDetails";
function ProductDetailsPage() {
  const { id } = useParams(); //this is string
  const productDetails = useProductDetails(+id); //this is number
  if (!productDetails) return;

  return (
    <div className={styles.productDetailContainer}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productDetails.category}
        </p>
        <div className={styles.actions}>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span style={{fontSize:"1.3rem"}}>back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
