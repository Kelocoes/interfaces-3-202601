"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
    // Get the current path from the URL
    const pathname = usePathname();
    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-semibold">404</h1>
            <p>Page {pathname} not found.</p>
        </div>
    );
}