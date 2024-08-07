import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import AllArtAndCraftItems from "./Components/AllArtAndCraftItems/AllArtAndCraftItems.jsx";
import AddCraftItem from "./Components/AddCraftItem/AddCraftItem.jsx";
import MyArtAndCraftList from "./Components/MyArtAndCraftList/MyArtAndCraftList.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/LogIn/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import DetailsPage from "./Components/DetailsPage/DetailsPage.jsx";
import AuthProvider from "./Components/AuthProvider/AuthProvider.jsx";
import toast, { Toaster } from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.jsx";
import Update from "./Components/Update/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://assignment-10-server-site-beige.vercel.app/artAndCrafts"
          ),
      },
      {
        path: "/allArtAndCraftItems",
        element: <AllArtAndCraftItems></AllArtAndCraftItems>,
        loader: () =>
          fetch(
            "https://assignment-10-server-site-beige.vercel.app/artAndCrafts"
          ),
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoute>
            <AddCraftItem></AddCraftItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtAndCraftList",
        element: (
          <PrivateRoute>
            <MyArtAndCraftList></MyArtAndCraftList>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/detailsPage/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-site-beige.vercel.app/artAndCrafts/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-site-beige.vercel.app/artAndCrafts/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
    <Typewriter />
  </React.StrictMode>
);
