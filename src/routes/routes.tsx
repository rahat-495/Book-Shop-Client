import App from "@/App";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Books from "@/pages/Books/Books";
import Home from "@/pages/Home/Home";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard/Dashboard";
import ManageUsers from "@/pages/admin/ManageUsers";
import ManageOrders from "@/pages/admin/ManageOrders";
import ManageProducts from "@/pages/admin/ManageProducts";
import ProfileSettings from "@/pages/Dashboard/ProfileSettings";
import MyOrders from "@/pages/user/MyOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {

        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
        {
        path: "/books",
        element: <Books />,

      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children : [
      {
        path : "manage-users",
        element : <ManageUsers />
      },
      {
        path : "manage-products",
        element : <ManageProducts />
      },
      {
        path : "manage-orders",
        element : <ManageOrders />
      },
      {
        path : "profile",
        element : <ProfileSettings />
      },
      {
        path : "orders",
        element : <MyOrders />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
