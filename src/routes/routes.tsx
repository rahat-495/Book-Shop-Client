
import App from "@/App";
import Books from "@/pages/Books/Books";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

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
        path: "/books",
        element: <Books />,
      },
    ],
  },
  {
    path : '/login' ,
    element : <Login />
  },
  {
    path : '/register' ,
    element : <Register />
  },
]);

export default router;
