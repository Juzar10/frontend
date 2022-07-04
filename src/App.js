import { Route, Routes } from "react-router-dom";
import * as ROUTES from "./constant/routes";
import Navbar from "./components/navbar";
import DashBoard from "./pages/dashboard";
import ProductDetails from "./pages/productDetail";
import SearchResult from "./pages/searchResult";
import Signin from "./pages/signin";
import Login from "./pages/login";
import Cart from "./pages/cart";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.CART} element={<Cart />} />
        <Route path={ROUTES.SIGNIN} element={<Signin />} />
        <Route path={ROUTES.DASHBOARD} element={<DashBoard />} />
        <Route path={ROUTES.PRODUCTDETAILS} element={<ProductDetails />} />
        <Route path={ROUTES.SEARCH} element={<SearchResult />} />
      </Routes>
    </>
  );
}
