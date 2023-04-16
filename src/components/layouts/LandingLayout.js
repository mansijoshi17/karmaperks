import { Outlet } from "react-router-dom";  
import Header from "../header/Header";
import Footer from "../header/Footer";

export default function LendingLayout() {
  return (
    <>
      <Header /> 
      <Outlet />
      <Footer />
    </>
  );
}
