
import Sidebar from "@/components/DashboardComp/Sidebar";
import Nav from "@/shared/Navbar/Nav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex flex-col w-full min-h-screen justify-between items-center">
            
            <Nav />
            <div className="flex w-full -my-10 min-h-screen">

                <Sidebar />

                <div className="xl:pt-10 xl:ml-60 w-full">
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default Dashboard;
