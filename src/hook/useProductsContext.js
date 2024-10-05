import { useContext } from "react"
import { ProductContext } from "../context/ProductContext";

const useProductsContext = () => {
      const products = useContext(ProductContext);
      return products;
}

export default useProductsContext