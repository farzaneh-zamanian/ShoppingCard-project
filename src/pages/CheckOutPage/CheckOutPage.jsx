import BasketCard from "../../components/BasketCard/BasketCard";
import BasketCardSideBar from "../../components/BasketCardSideBar/BasketCardSideBar";
import useCartContext from "../../hook/useCartContext";
import styles from "./CheckOutPage.module.css";
function CheckOutPage() {
  const { state, dispatch } = useCartContext();
  const cardBtnHandler = (action) => {
    dispatch(action);
  };
  return (
    <>
      <div className={styles.selectedProductInfo}>
        {!state.cartProductsData.length ? (
          <div className={styles.emptyBasketContainer}>
            <p className={styles.title}>The Shopping Basket is Empty! </p>
            <img src="./src/assets/images/emptyBasket.jpg" />
          </div>
        ) : (
          <div className={styles.basketContainer}>
            <BasketCardSideBar state={state} cardBtnHandler={cardBtnHandler} />
           <div>
           {state.cartProductsData.map((product) => (
                <BasketCard
                  key={product.id}
                  product={product}
                  cardBtnHandler={cardBtnHandler}
                />
              ))}
           </div>
         
       
          </div>
        )}
      </div>
    </>
  );
}

export default CheckOutPage;
