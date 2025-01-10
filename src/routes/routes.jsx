import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthPage from "../pages/AuthPage";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import Shop from "../pages/Shop";
import AllSportsEquipment from "../pages/dashboard-pages/AllProducts";
import ProductForm from "../pages/ProductForm";
import ProductPage from "../pages/ProductPage";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import DashboardLayout from "../layouts/DashboardLayout";
import AdminRoutes from "./AdminRoutes";
import Dashboard from "../pages/dashboard-pages/Dashboard";
import PlaceHolder from "../components/dashboard-components/PlaceHolder";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: <ContactUs />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/product/:id",
        element: <ProductPage />,
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-md-nayeem-uddin-server-side.vercel.app/all-products/${params.id}`
          ).then((res) => res.json()),
      },
      {
        path: "/all-sports-equipment",
        element: <AllSportsEquipment />,
        loader: () =>
          fetch(
            "https://b10-a10-md-nayeem-uddin-server-side.vercel.app/all-Products"
          ).then((res) => res.json()),
      },
      {
        path: "/login",
        element: <AuthPage />,
      },
      {
        path: "/account",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoutes>
            <ProductForm />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivateRoutes>
            <ProductForm />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-md-nayeem-uddin-server-side.vercel.app/all-products/${params.id}`
          ).then((res) => res.json()),
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin",
        element: <Navigate to="/admin/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: (
          <AdminRoutes>
            <Dashboard />
          </AdminRoutes>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoutes>
            <PlaceHolder title={"users"} />
          </AdminRoutes>
        ),
      },
      {
        path: "products",
        element: (
          <AdminRoutes>
            <AllSportsEquipment />
          </AdminRoutes>
        ),
        loader: () =>
          fetch(
            "https://b10-a10-md-nayeem-uddin-server-side.vercel.app/all-Products"
          ).then((res) => res.json()),
      },
      {
        path: "sales",
        element: (
          <AdminRoutes>
            <PlaceHolder title={"sales"} />
          </AdminRoutes>
        ),
      },
      {
        path: "reports",
        element: (
          <AdminRoutes>
            <PlaceHolder title={"reports"} />
          </AdminRoutes>
        ),
      },
      {
        path: "reviews",
        element: (
          <AdminRoutes>
            <PlaceHolder title={"reviews"} />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default routes;
