import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import NotfoundPage from "./pages/404/NotFoundPage";
import ProductDetails from "./pages/ProductDetailsPage/ProductDetailsPage";
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage";
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Routes>
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path="/products" element={<ProductsPage />} /> */}
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/*" element={<NotfoundPage />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
