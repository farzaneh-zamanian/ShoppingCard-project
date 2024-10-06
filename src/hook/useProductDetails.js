import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

const useProductDetails = (id) => {
      const {products} = useContext(ProductContext);

      const findedProduct = products.find(product => product.id === id)
      return findedProduct
}

export default useProductDetails