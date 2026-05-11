"use client";

import Link from "next/link";

type NavBarProps = {
    title?: string;
};

export default function NavBar({ title = "Dashboard" }: NavBarProps) {
    return (
        <nav className="navbar bg-base-100 border-b border-base-200 px-4">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    {title}
                </Link>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li>
                        <Link href="/feed" className="btn btn-ghost">Feed</Link>
                    </li>
                    <li>
                        <Link href="/profile" className="btn btn-ghost">Perfil</Link>
                    </li>
                    <li>
                        <Link href="/settings" className="btn btn-ghost">Ajustes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
