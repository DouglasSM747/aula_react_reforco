import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export function Layout() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
