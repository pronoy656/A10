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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArtAndCraftItems",
        element: <AllArtAndCraftItems></AllArtAndCraftItems>,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
