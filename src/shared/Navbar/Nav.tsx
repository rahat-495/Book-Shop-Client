import { Button } from "@/components/ui/button";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const navLists = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/books" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex w-[1440px] mx-auto justify-between items-center bg-transparent backdrop-blur-2xl gro sticky top-0 py-2 text-black">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-xl font-semibold">Book Shop</h1>
      </div>

      <div className="flex items-center gap-3">
        {navLists.map((navList, index) => (
          <NavLink
            key={index}
            to={navList.path}
            className={({ isActive, isPending }) =>
              isPending
                ? "hover:underline"
                : isActive
                ? "hover:underline font-semibold"
                : "hover:underline"
            }
          >
            {navList.name}
          </NavLink>
        ))}
        {user ? (
          <Button
            onClick={handleLogout}
            className="bg-primary text-white px-4 py-1 rounded-md transition duration-300"
          >
            Logout
          </Button>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-primary text-white px-4 py-1 rounded-md transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-primary text-white px-4 py-1 rounded-md transition duration-300"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
