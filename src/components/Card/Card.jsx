import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../../helpers/helper";
import useCartContext from "../../hook/useCartContext";
import { addProductActionCreator } from "../../actions/cartProducts";

function Card({ product }) {
  const { id, title, image, price } = product;
  const { state, dispatch } = useCartContext();

  const cartHandler = () => {
    // dispatch({ type: "ADD_PRODUCT", payload: product });
    dispatch(addProductActionCreator(product));
  };
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actionsContainer}>
        <Link to={`product/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={cartHandler}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
