import { createBrowserRouter, Outlet } from "react-router";

import ReactIntro from "../pages/ReactIntro";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <div className="flex justify-center">
                    <div className="bg-white min-h-screen w-1/4"></div>
                    <div className="min-h-screen w-3/4">
                        {" "}
                        <Outlet />
                    </div>
                </div>
            ),
            children: [
                {
                    path: "react-intro",
                    Component: ReactIntro,
                },
                {
                    path: "another-page",
                    element: <p>Element outlet!</p>,
                },
            ],
        },
        {
            path: "/feed",
            element: <h1>Feed!</h1>,
        },
    ],
    { basename: "/dmi" }
);
