import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { cn } from "@/lib/utils"; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector((state) => state?.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <>
      <div className="flex fixed xl:hidden h-fit mt-6 p-2 justify-between items-center bg-base-200 shadow">
        <button onClick={() => setIsOpen(true)} className="text-2xl">
          <FiMenu />
        </button>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 backdrop-blur-xl z-40 md:hidden"
        ></div>
      )}

      <div
        className={cn(
          "fixed top-0 left-0 -translate-x-full xl:translate-x-0 h-full w-60 bg-base-300 p-4 z-50 transform transition-transform duration-300",
          {
            "-translate-x-full": !isOpen && window.innerWidth < 768,
            "translate-x-0": isOpen || window.innerWidth >= 768,
          }
        )}
      >
        <h2 className="text-xl mb-5 font-bold text-center mt-10 md:mt-0">Dashboard</h2>

        <Link to="/" onClick={handleLinkClick} className="block py-2 hover:underline">
          Home
        </Link>

        {user?.role === "user" && (
          <>
            <Link to="/dashboard/orders" onClick={handleLinkClick} className="block py-2 hover:underline">
              My Orders
            </Link>
            <Link to="/dashboard/profile" onClick={handleLinkClick} className="block py-2 hover:underline">
              Profile Settings
            </Link>
          </>
        )}

        {user?.role === "admin" && (
          <>
            <Link to="/dashboard/manage-users" onClick={handleLinkClick} className="block py-2 hover:underline">
              Manage Users
            </Link>
            <Link to="/dashboard/create-product" onClick={handleLinkClick} className="block py-2 hover:underline">
              Create Product
            </Link>
            <Link to="/dashboard/manage-products" onClick={handleLinkClick} className="block py-2 hover:underline">
              Manage Products
            </Link>
            <Link to="/dashboard/manage-orders" onClick={handleLinkClick} className="block py-2 hover:underline">
              Manage Orders
            </Link>
            <Link to="/dashboard/profile" onClick={handleLinkClick} className="block py-2 hover:underline">
              Profile Settings
            </Link>
          </>
        )}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 mt-4 text-red-500 hover:underline"
        >
          <FiLogOut /> Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;
