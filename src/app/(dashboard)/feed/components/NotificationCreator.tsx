"use client";

import { useState } from "react";
import { useNotificationsStore } from "@/lib/store/notificationsStore";

export default function NotificationCreator() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const add = useNotificationsStore((s) => s.addNotification);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        add(title.trim(), body.trim() || undefined);
        setTitle("");
        setBody("");
    };

    return (
        <form onSubmit={onSubmit} className="flex gap-2 items-start">
            <input
                className="input input-bordered"
                placeholder="Título de notificación"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className="input input-bordered"
                placeholder="Cuerpo (opcional)"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">Emitir</button>
        </form>
    );
}
