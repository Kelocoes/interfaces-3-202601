"use client"

import { usePathname } from "next/navigation";

export default function NotFound() {
    const route = usePathname()
    return (
        <div className="p-6 text-center space-y-4">
            <h1 className="text-6xl text-bold">404</h1>
            <p>{route} no existe, intenta de nuevo.</p>
        </div>
    );
}