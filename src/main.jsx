import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  // Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Graduation from "./components/Graduation";
import HigherStudy from "./components/HigherStudy";
import PrimaryStudy from "./components/PrimaryStudy";
// import Education from "./components/Education";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      // {
      //   index: true, // This is the default route for "/"
      //   element: <Navigate to="/education/graduation" />,
      // },
      {
        path: "/education/graduation",
        element: <Graduation />,
      },
      {
        path: "/education/higher",
        element: <HigherStudy />,
      },
      {
        path: "/education/primary",
        element: <PrimaryStudy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
