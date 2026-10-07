import { createBrowserRouter } from "react-router-dom";
import Users from "../pages/admin/users/Users";
import RootLayout from "../layouts/RootLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddUser from "../pages/admin/users/AddUser";
import Products from "../pages/admin/products/Products";
import AddProduct from "../pages/admin/products/AddProduct";
import DeleteUser from "../pages/admin/users/DeleteUser";
import EditUser from "../pages/admin/users/EditUser";
import DeleteProduct from "../pages/admin/products/DeleteProduct";
import EditProduct from "../pages/admin/products/EditProduct";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product-details/:id", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
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
          { path: "users/delete/:id", element: <DeleteUser /> },
          { path: "users/edit/:id", element: <EditUser /> },
          { path: "products", element: <Products /> },
          { path: "products/add", element: <AddProduct /> },
          { path: "products/delete/:id", element: <DeleteProduct /> },
          { path: "products/edit/:id", element: <EditProduct /> },
        ],
      },
    ],
  },
]);

export default router;
