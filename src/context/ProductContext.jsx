import { createContext, useEffect, useState } from "react";
import api from "../services/config";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

// const useProducts = () => {
//   const products = useContext(ProductContext);
//   return products;
// };

export default ProductProvider;
// export { useProducts };
