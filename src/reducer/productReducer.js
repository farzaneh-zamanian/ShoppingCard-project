import { addProductActionCreator, decreaseProductActionCreator, deleteProductActionCreator, increaseProductActionCreator } from "../actions/cartProducts";
import { sumProductsItems } from "../helpers/helper";

const productReducer = (state, action) => {
  switch (action.type) {
    //ADD PRODUCT
    case addProductActionCreator().type: {
      const findedProduct = state.cartProductsData.find(
        (product) => product.id === action.payload.id
      );
      if (!findedProduct) {
        state.cartProductsData.push({
          ...action.payload,
          productQuantity: 1,
        });
      }

      return {
        ...state,
        ...sumProductsItems(state.cartProductsData),
        checkOut: false,
      };
    }
    //DELETE PRODUCT
    case deleteProductActionCreator().type: {
      const newCartProductsData = state.cartProductsData.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        cartProductsData: [...newCartProductsData],
        ...sumProductsItems(newCartProductsData),
      };
    }
    //INCREASE PRODUCT
    case increaseProductActionCreator().type: {
      const index = state.cartProductsData.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cartProductsData[index].productQuantity++;
      return {
        ...state,
        ...sumProductsItems(state.cartProductsData),
      };
    }
    //DECREASE PRODUCT
    case decreaseProductActionCreator().type: {
      const index = state.cartProductsData.findIndex(
        (product) => product.id === action.payload.id
      );
      state.cartProductsData[index].productQuantity--;
      return {
        ...state,
        ...sumProductsItems(state.cartProductsData),
      };
    }

    case "CHECKOUT":
      return {
        cartProductsData: [],
        totalPrice: 0,
        productsQuantity: 0,
        checkOut: true,
      };
    default:
      throw new Error("invalid Acrion!")
  }
};


export default productReducer