
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { Button } from "@/components/ui/button";
import { CgProfile } from "react-icons/cg";
import { useGetMyDataQuery } from "@/redux/features/user/userApi";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {

    const location = useLocation() ;
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user);
    const {data} = useGetMyDataQuery(undefined) ;

    const navLists = [
        { name: "Home", path: "/" },
        { name: "Books", path: "/books" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Dashboard", path: "/dashboard" },
    ]

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className={`flex z-40 w-full ${location.pathname?.includes('/dashboard') ? 'w-full px-3 xl:px-16' : 'xl:w-[1440px] px-2'} mx-auto justify-between items-center bg-transparent backdrop-blur-xl gro sticky top-0 py-3 text-black`}>
            
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
                <Link to={`/cart`} className="btn btn-circle rounded-full">
                    <FaShoppingCart />
                </Link>
                {user ? (
                    <details className="dropdown">

                        <summary className="btn btn-circle rounded-full"> 
                            <CgProfile className="text-2xl"/>
                        </summary>

                        <div className="menu gro dropdown-content border bg-white right-1 rounded-box z-1 p-2 shadow-md backdrop-blur-2xl flex flex-col items-center justify-center  w-60 gap-2">
                            <h1 className="font-semibold">{data?.data?.name}</h1>
                            <p className="font-semibold">{data?.data?.email}</p>
                            <Button
                                onClick={handleLogout}
                                className="bg-primary cursor-pointer text-white w-full px-4 py-1 rounded-md transition duration-300"
                            > Logout </Button>
                        </div>

                    </details>
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

            <div className="flex md:flex lg:hidden">
                <details className="dropdown">
                    <summary className="btn btn-circle rounded-full "> 
                        <CgProfile className="text-2xl"/>
                    </summary>
                    <div className="menu dropdown-content bg-base-300 right-1 rounded-box z-1 p-2 shadow-md backdrop-blur-2xl flex flex-col items-center justify-center sm:w-32 md:w-40 gap-2">
                        
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
                        {user ? (
                            <Button
                                onClick={handleLogout}
                                className="bg-primary text-white px-4 py-1 rounded-md transition duration-300"
                            >
                                Logout
                            </Button>
                            ) : (
                            <>
                                <Link to="/login" className="bg-primary text-white px-4 py-1 w-full flex items-center justify-center font-semibold rounded-md transition duration-300">Login</Link>
                                <Link to="/register" className="bg-primary text-white px-4 py-1 w-full flex items-center justify-center font-semibold rounded-md transition duration-300">Register</Link>
                            </>
                        )}
                        
                    </div>
                </details>
            </div>
            
        </div>
    );
};

export default Nav;
