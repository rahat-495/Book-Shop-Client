
import { NavLink } from "react-router-dom";

const Nav = () => {

    const navLists = [
        { name: "Home", path: "/" },
        { name: "Books", path: "/books" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <div className="flex justify-between items-center bg-transparent backdrop-blur-2xl gro sticky top-0 py-2 text-black">
            
            <div className="flex items-center justify-between gap-3">
                <h1 className="text-xl font-semibold">Book Shop</h1>
            </div>  

            <div className="flex gap-3">
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
            </div>        
            
        </div>
    );
};

export default Nav;
