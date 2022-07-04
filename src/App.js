import { Route, Routes } from "react-router-dom";
import * as ROUTES from "./constant/routes";
import Navbar from "./components/navbar";
import DashBoard from "./pages/dashboard";
import ProductDetails from "./pages/productDetail";
import SearchResult from "./pages/searchResult";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTES.DASHBOARD} element={<DashBoard />} />
        <Route path={ROUTES.PRODUCTDETAILS} element={<ProductDetails />} />
        <Route path={ROUTES.SEARCH} element={<SearchResult />} />
      </Routes>
    </>
  );
}
