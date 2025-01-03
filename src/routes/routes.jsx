import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AuthPage from "../pages/AuthPage";
import ErrorPage from "../pages/ErrorPage";
import FailedFetch from "../pages/FailedFetch";
import Profile from "../pages/Profile";
import Shop from "../pages/Shop";
import AllSportsEquipment from "../pages/AllSportsEquipment";
import ProductForm from "../pages/ProductForm";
import ProductPage from "../pages/ProductPage";
import Store from "../components/Store";
import PrivateRoutes from "./PrivateRoutes";
import API from "../api/API";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <FailedFetch />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <Navigate to={"all-equipment"} />,
          },
          {
            path: "/shop/:id",
            element: <Store />,
            loader: async ({ params }) => {
              try {
                const res = await API.get(
                  `/all-products/category/${params.id}`
                );
                return res.data;
              } catch (err) {
                console.error("Error fetching all products:", err);
              }
            },
          },
        ],
      },
      {
        path: "/shop/product/:id",
        element: (
          <PrivateRoutes>
            <ProductPage />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-a10-md-nayeem-uddin-server-side.vercel.app/all-products/${params.id}`
          ),
      },
      {
        path: "/all-sports-equipment",
        element: <AllSportsEquipment />,
        loader: () =>
          fetch(
            "https://b10-a10-md-nayeem-uddin-server-side.vercel.app/all-Products"
          ),
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
          ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default routes;
