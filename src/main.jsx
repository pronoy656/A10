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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/artAndCrafts"),
      },
      {
        path: "/allArtAndCraftItems",
        element: <AllArtAndCraftItems></AllArtAndCraftItems>,
        loader: () => fetch("http://localhost:5000/artAndCrafts"),
      },
      {
        path: "/addCraftItem",
        element: <AddCraftItem></AddCraftItem>,
      },
      {
        path: "/myArtAndCraftList",
        element: <MyArtAndCraftList></MyArtAndCraftList>,
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
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artAndCrafts/${params.id}`),
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
