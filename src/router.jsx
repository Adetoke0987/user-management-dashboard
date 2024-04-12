import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Users from "./pages/Users";



const router = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: "true",
                element: <Home />
            },
            {
                path: "/admin",
                element: <Admin />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/setting",
                element: <Settings />
            },
            {
                path: "/user",
                element: <Users />
            },
            {
                path: "*",
                element: "Page not found"
            }

        ]
    }
])

export default router