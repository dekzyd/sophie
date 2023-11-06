import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
