import { Button } from "@/components/ui/button";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <div className="flex z-40 w-full xl:w-[1440px] px-2 mx-auto justify-between items-center bg-transparent backdrop-blur-xl gro sticky top-0 py-3 text-black">
            
            <div className="flex items-center justify-between gap-3">
                <h1 className="text-xl font-semibold">Book Shop</h1>
            </div>  

            <div className="hidden md:hidden lg:flex items-center gap-3">
                {
                    navLists.map((navList, index) => (
                        <NavLink 
                        key={index} 
                        to={navList.path} 
                        className={({ isActive, isPending }) => isPending ? "hover:underline" : isActive ? "hover:underline font-semibold" : "hover:underline"}>
                            {navList.name}
                        </NavLink>
                    ))
                }
                <Link to="/login" className="bg-primary text-white px-4 py-1 rounded-md transition duration-300">Login</Link>
                <Link to="/register" className="bg-primary text-white px-4 py-1 rounded-md transition duration-300">Register</Link>
            </div> 

            <div className="flex md:flex lg:hidden">
                <details className="dropdown">
                    <summary className="btn m-1"> 
                        <GiHamburgerMenu />
                    </summary>
                    <div className="menu dropdown-content bg-base-content right-1 rounded-box z-1 p-2 shadow-md backdrop-blur-2xl flex flex-col items-center justify-center sm:w-32 md:w-40 gap-2">
                        
                        {
                            navLists.map((navList, index) => (
                                <NavLink 
                                key={index} 
                                to={navList.path} 
                                className={({ isActive, isPending }) => isPending ? "hover:underline" : isActive ? "underline font-semibold" : "hover:underline"}>
                                    {navList.name}
                                </NavLink>
                            ))
                        }
                        <Link to="/login" className="bg-primary text-white px-4 py-1 w-full flex items-center justify-center font-semibold rounded-md transition duration-300">Login</Link>
                        <Link to="/register" className="bg-primary text-white px-4 py-1 w-full flex items-center justify-center font-semibold rounded-md transition duration-300">Register</Link>
                        
                    </div>
                </details>
            </div>
            
        </div>
    );

};

export default Nav;
