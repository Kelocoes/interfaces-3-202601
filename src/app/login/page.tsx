"use client"
import React from "react"
import { loginService } from "./services/login.service"
import { useRouter } from "next/navigation"

export default function Login() {
    const formRef = React.useRef<HTMLFormElement>(null)
    const router = useRouter()

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(formRef.current!)
        const email = String(formData.get("email") ?? "")
        const password = String(formData.get("password") ?? "")

        const result = await loginService.login({ email, password })

        if (result.error) {
            console.log("Login error:", result.message)
            return
        }

        console.log("Login response:", result.data.access_token)
        localStorage.setItem("token", result.data.access_token)
        document.cookie = `token=${encodeURIComponent(result.data.access_token)}; Path=/; Max-Age=${60 * 60 * 24 * 7}; SameSite=Lax`
        router.push("/dashboard")
    }

    return (
        <main>
            <div className="grid min-h-screen grid-cols-1 bg-white md:grid-cols-2">
                <div className="hidden md:flex items-center justify-center">
                    <div className="skeleton h-full w-full"></div>
                </div>

                <div className="flex items-center justify-center p-6 md:p-10">
                    <div className="card w-full max-w-md bg-base-100 shadow-md">
                        <div className="card-body">
                            <h1 className="card-title text-2xl">Iniciar sesión</h1>

                            <form className="mt-2 space-y-4" ref={formRef} onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="tu@email.com"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-neutral w-full">
                                    Entrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}