
import Sidebar from "@/components/DashboardComp/Sidebar";
import Nav from "@/shared/Navbar/Nav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col w-full min-h-screen justify-between items-center">
            
            <Nav />
            <div className="flex w-full -my-10 min-h-screen">

                <Sidebar />

                <div className="pt-10 ml-60">
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default Dashboard;
