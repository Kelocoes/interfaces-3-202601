function delay(t: number) {
    return new Promise((resolve) => setTimeout(resolve, t));
}

export default async function Register() {
    await delay(1000);
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Register</h1>
                    <p className="py-6">
                        Please enter your credentials to register your account.
                    </p>
                    <button className="btn btn-primary">Register</button>
                </div>
            </div>
        </div>
    )
}