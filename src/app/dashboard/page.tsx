import Link from "next/link";

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Dashboard() {
    await delay(2000);

    return (
        <main className="min-h-screen bg-base-200 p-6">
            <div className="mx-auto flex max-w-md flex-col gap-4 rounded-box bg-base-100 p-6 shadow">
                <div>
                    <p className="text-sm opacity-60">Dashboard</p>
                    <h1 className="text-3xl font-bold">Home</h1>
                    <p className="mt-2 text-sm opacity-70">Choose a page.</p>
                </div>

                <div className="grid gap-2 sm:grid-cols-2">
                    <Link href="/dashboard/csr-example" className="btn btn-primary btn-sm">
                        CSR
                    </Link>
                    <Link href="/dashboard/ssr-example" className="btn btn-secondary btn-sm">
                        SSR
                    </Link>
                    <Link href="/dashboard/1" className="btn btn-outline btn-sm sm:col-span-2">
                        Profile 1
                    </Link>
                </div>
            </div>
        </main>
    );
}