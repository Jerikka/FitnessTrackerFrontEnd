import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Activities from "./Components/Activities";
import Routines from "./Components/Routines";
import MyRoutines from "./Components/MyRoutines";
import ErrorPage from "./Components/ErrorPage";
import Register from "./Components/Register";
import Logout from "./Components/Logout";
import CreateActivity from "./Components/CreateActivity";
import CreateRoutine from "./Components/CreateRoutine";
import UpdateRoutine from "./Components/UpdateRoutine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
      {
        path: "/Activities",
        element: <Activities />,
      },
      {
        path: "/MyRoutines",
        element: <MyRoutines />,
      },
      {
        path: "/Routines",
        element: <Routines />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/CreateActivity",
        element: <CreateActivity />,
      },
      {
        path: "/CreateRoutine",
        element: <CreateRoutine />,
      },
      {
        path: "/UpdateRoutine",
        element: <UpdateRoutine />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
