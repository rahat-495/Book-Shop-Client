import Footer from "@/pages/sharepage/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
