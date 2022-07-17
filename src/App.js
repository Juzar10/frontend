import { Route, Routes } from "react-router-dom";
import * as ROUTES from "./constant/routes";
import Navbar from "./components/navbar";
import DashBoard from "./pages/dashboard";
import ProductDetails from "./pages/productDetail";
import SearchResult from "./pages/searchResult";
import Signin from "./pages/signin";
import Login from "./pages/login";
import Cart from "./pages/cart";
import GenereSelect from "./pages/genreSelect";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadDashBoard } from "./reduxStore/dashboard-slice";
import { useLoadDashBoardDataQuery } from "./reduxStore/api-slice";

export default function App() {
  const dispatch = useDispatch();
  const listofId = [
    "62b77562076177189c8f53b0",
    "62b77562076177189c8f53fc",
    "62b775e2076177189c8f58e0",
    "62b77562076177189c8f53bf",
    "62b77562076177189c8f53b6",
  ];
  const { data } = useLoadDashBoardDataQuery(listofId)
  useEffect(() => {
    if (data) {
      dispatch(loadDashBoard(data.data))
    }
  }, [data, dispatch])

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
        <Route path={ROUTES.GENRE} element={<GenereSelect />} />
      </Routes>
    </>
  );
}
