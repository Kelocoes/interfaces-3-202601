function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Dashboard() {
    await delay(2000);

    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
        </div>
    );
}