import NavBar from "./feed/components/NavBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar title="Dashboard" />
            <main className="min-h-screen bg-base-200">{children}</main>
        </>
    );
}
