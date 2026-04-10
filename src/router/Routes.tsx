import { createBrowserRouter, Navigate } from "react-router";

import PublicLayout from "../layout/PublicLayout";
import PrivateLayout from "../layout/PrivateLayout";
import ReactIntro from "../pages/ReactIntro";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: PublicLayout,
            children: [
                {
                    index: true,
                    element: <h1>Home</h1>,
                },
                {
                    path: "react-intro",
                    element: <ReactIntro />,
                },
            ],
        },
        {
            path: "/feed",
            Component: PrivateLayout,
            children: [
                {
                    index: true,
                    element: <h1>Feed</h1>,
                },
            ],
        },
        { path: "*", element: <Navigate to="/" replace /> },
    ],
    { basename: "/dmi" }
);

export default router;
