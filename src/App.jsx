import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import NotfoundPage from "./pages/404/NotFoundPage";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import ProductProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";
import Layout from "./layouts/Layout";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Layout>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/*" element={<NotfoundPage />} />
          </Routes>
        </Layout>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
