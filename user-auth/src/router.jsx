import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefualtLayOut from "./components/DefualtLayout";
import GeustLayOut from "./components/GeustLayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefualtLayOut />,
        children: [
            {
              path:"/",
              element: <Navigate to="/users"/>
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
              path:"/dashboard",
              element: <Dashboard/>
            },
        ],
    },
    {
        path: "/",
        element: <GeustLayOut />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/create-acount",
                element: <SignUp />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
