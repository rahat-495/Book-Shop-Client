
import Footer from "@/shared/Footer/Footer";
import Nav from "@/shared/Navbar/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
