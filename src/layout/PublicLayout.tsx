import { Outlet } from "react-router";

export default function PublicLayout() {
    return (
        <div>
            <header>
                <h1>My App</h1>
            </header>
            <main className="border-2 border-white min-h-screen p-4 m-4">
                <p>Welcome to the public area!</p>
                <Outlet />
            </main>
        </div>
    );
}
