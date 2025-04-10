
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";

const Sidebar = () => {
  
    const user = useAppSelector((state) => state?.auth.user) ;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div className="w-60 fixed pt-10 h-screen bg-base-300 p-4 space-y-1">
        <h2 className="text-xl mb-5 font-bold text-center">Dashboard</h2>

        <Link to="/" className="block py-2 hover:underline">
            Home
        </Link>

        {
            user?.role === "user" && (
                <>
                <Link to="/dashboard/orders" className="block py-2 hover:underline">
                    My Orders
                </Link>
                <Link
                    to="/dashboard/profile"
                    className="block py-2 hover:underline"
                >
                    Profile Settings
                </Link>
            </>)
        }

        {
            user?.role === "admin" && (
                <>
                <Link
                    to="/dashboard/manage-users"
                    className="block py-2 hover:underline"
                >
                    Manage Users
                </Link>
                <Link
                    to="/dashboard/manage-products"
                    className="block py-2 hover:underline"
                >
                    Manage Products
                </Link>
                <Link
                    to="/dashboard/manage-orders"
                    className="block py-2 hover:underline"
                >
                    Manage Orders
                </Link>
                <Link
                    to="/dashboard/profile"
                    className="block py-2 hover:underline"
                >
                    Profile Settings
                </Link>
                </>
            )
        }

        {/* Logout */}
        <button
            onClick={handleLogout}
            className="flex items-center cursor-pointer w-fit gap-2 py-2 text-red-500 hover:underline"
        >
            <FiLogOut /> Logout
        </button>
        </div>
    );
};

export default Sidebar;
