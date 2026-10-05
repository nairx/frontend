import { createBrowserRouter } from "react-router-dom";
import Users from "../pages/admin/users/Users";
import RootLayout from "../layouts/RootLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddUser from "../pages/admin/users/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "login",
        element: <Login />,
      },
      { path: "register", element: <Register /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <Users /> },
          { path: "users/add", element: <AddUser /> },
        ],
      },
    ],
  },
]);

export default router;
