import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { productItemQuantity, shortenText } from "../../helpers/helper";
import useCartContext from "../../hook/useCartContext";
import {
  addProductActionCreator,
  decreaseProductActionCreator,
  deleteProductActionCreator,
  increaseProductActionCreator,
} from "../../actions/cartProducts";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

function Card({ product }) {
  const { id, title, image, price } = product; //DESCTRUCTURING
  const { state, dispatch } = useCartContext(); //CONTEXT

  //ACTION - FIND PRODUCT QUANTITY
  const productQuantity = productItemQuantity(state, id);

  // ACTION - CARD BUTTON ACTIONS
  const cardBtnHandler = (action) => {
    dispatch(action(product));
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
          {productQuantity === 1 && (
            <button onClick={() => cardBtnHandler(deleteProductActionCreator)}>
              <MdDeleteOutline />
            </button>
          )}
          {productQuantity > 1 && (
            <button
              onClick={() => cardBtnHandler(decreaseProductActionCreator)}
            >
              -
            </button>
          )}
          {!!productQuantity && <span>{productQuantity}</span>}{/* if productQuantity is truthy */}
          {productQuantity === 0 ? (
            <button onClick={() => cardBtnHandler(addProductActionCreator)}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button
              onClick={() => cardBtnHandler(increaseProductActionCreator)}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
