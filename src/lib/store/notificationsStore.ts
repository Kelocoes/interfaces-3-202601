import { create } from "zustand";

export type NotificationItem = {
    id: number;
    title: string;
    body?: string;
    read?: boolean;
    createdAt: string;
};

type NotificationsState = {
    notifications: NotificationItem[];
    addNotification: (title: string, body?: string) => void;
    markRead: (id: number) => void;
    markAllRead: () => void;
    removeNotification: (id: number) => void;
};

let nextId = Date.now();

export const useNotificationsStore = create<NotificationsState>((set) => ({
    notifications: [],
    addNotification: (title: string, body?: string) =>
        set((state) => ({
            notifications: [
                {
                    id: ++nextId,
                    title,
                    body,
                    read: false,
                    createdAt: new Date().toISOString(),
                },
                ...state.notifications,
            ],
        })),
    markRead: (id: number) =>
        set((state) => ({
            notifications: state.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
        })),
    markAllRead: () =>
        set((state) => ({
            notifications: state.notifications.map((n) => ({ ...n, read: true })),
        })),
    removeNotification: (id: number) =>
        set((state) => ({ notifications: state.notifications.filter((n) => n.id !== id) })),
}));
