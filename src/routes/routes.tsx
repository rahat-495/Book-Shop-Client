import App from "@/App";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Books from "@/pages/Books/Books";
import Home from "@/pages/Home/Home";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard/Dashboard";

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
