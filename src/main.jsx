import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost from "./components/NewPost";

const router = createBrowserRouter([
  { path: "/", element:  },
  { path: "/", element: <App /> }, //main domain
  { path: "/create-post", element: <NewPost /> }, //main domain
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
