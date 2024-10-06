import {
  decreaseProductActionCreator,
  deleteProductActionCreator,
  increaseProductActionCreator,
} from "../../actions/cartProducts";
import { shortenText } from "../../helpers/helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./BasketCard.module.css";

function BasketCard({ product, cardBtnHandler }) {
  const { image, title, productQuantity } = product;

  return (
    <div className={styles.basketCardContainer}>
      <img src={image} alt={product.title} />
      <p className={styles.productTitle}>{shortenText(title)}</p>
      <div className={styles.productActions}>
        {/* there is quantity that added to product */}
        {productQuantity === 1 && (
          <button
            onClick={() => cardBtnHandler(deleteProductActionCreator(product))}
          >
            <MdDeleteOutline />
          </button>
        )}
        {productQuantity > 1 && (
          <button
            onClick={() =>
              cardBtnHandler(decreaseProductActionCreator(product))
            }
          >
            -
          </button>
        )}
        <span>{productQuantity}</span>
        <button
          onClick={() => cardBtnHandler(increaseProductActionCreator(product))}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
