"use client";

import Link from "next/link";
import { useState } from "react";
import { useNotificationsStore } from "@/lib/store/notificationsStore";

type NavBarProps = {
    title?: string;
};

export default function NavBar({ title = "Dashboard" }: NavBarProps) {
    const [open, setOpen] = useState(false);
    const notifications = useNotificationsStore((s) => s.notifications);
    const unreadCount = notifications.filter((n) => !n.read).length;
    const markRead = useNotificationsStore((s) => s.markRead);
    const markAllRead = useNotificationsStore((s) => s.markAllRead);
    const removeNotification = useNotificationsStore((s) => s.removeNotification);

    return (
        <nav className="navbar bg-base-100 border-b border-base-200 px-4">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">
                    {title}
                </Link>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2 items-center">
                    <li>
                        <Link href="/feed" className="btn btn-ghost">Feed</Link>
                    </li>
                    <li>
                        <Link href="/profile" className="btn btn-ghost">Perfil</Link>
                    </li>

                    <li className="relative">
                        <button
                            type="button"
                            className="btn btn-ghost"
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                        >
                            Notificaciones
                            {unreadCount > 0 && (
                                <span className="badge badge-secondary ml-2">{unreadCount}</span>
                            )}
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-2 w-80 z-50 card bg-base-100 border border-base-200 shadow-lg">
                                <div className="card-body p-2">
                                    <div className="flex items-center justify-between px-2">
                                        <strong>Notificaciones</strong>
                                        <div className="flex gap-2">
                                            <button className="btn btn-xs" onClick={() => markAllRead()}>
                                                Marcar todas
                                            </button>
                                            <button className="btn btn-xs" onClick={() => setOpen(false)}>
                                                Cerrar
                                            </button>
                                        </div>
                                    </div>

                                    <div className="divide-y mt-2">
                                        {notifications.length === 0 && (
                                            <div className="p-2 text-sm text-base-content/60">Sin notificaciones</div>
                                        )}

                                        {notifications.map((n) => (
                                            <div key={n.id} className="p-2 flex items-start justify-between gap-2">
                                                <div>
                                                    <div className="font-medium">{n.title}</div>
                                                    {n.body && <div className="text-sm text-base-content/70">{n.body}</div>}
                                                    <div className="text-xs text-base-content/50 mt-1">{new Date(n.createdAt).toLocaleString()}</div>
                                                </div>
                                                <div className="flex flex-col items-end gap-1">
                                                    {!n.read && (
                                                        <button className="btn btn-xs btn-outline" onClick={() => markRead(n.id)}>
                                                            Leer
                                                        </button>
                                                    )}
                                                    <button className="btn btn-xs btn-error" onClick={() => removeNotification(n.id)}>Borrar</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
