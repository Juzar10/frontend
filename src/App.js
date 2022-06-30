import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/dashboard";
import * as ROUTES from "./constant/routes";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.DASHBOARD} element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
