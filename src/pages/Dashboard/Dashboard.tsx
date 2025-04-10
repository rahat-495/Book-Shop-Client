
import Sidebar from "@/components/DashboardComp/Sidebar";
import Nav from "@/shared/Navbar/Nav";

const Dashboard = () => {
    return (
        <div className="flex flex-col w-full min-h-screen justify-between items-center">
            
            <Nav />
            <div className="flex w-full -my-10 min-h-screen">

                <Sidebar />
                {/* <div className="w-60 fixed pt-10 h-screen bg-base-300">
                    asdfasdf
                </div> */}

                <div className="pt-10 ml-60">
                    content
                </div>

            </div>

        </div>
    );
};

export default Dashboard;
