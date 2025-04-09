
import Footer from "@/shared/Footer/Footer";
import Nav from "@/shared/Navbar/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-[1440px] mx-auto flex flex-col min-h-screen relative">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
