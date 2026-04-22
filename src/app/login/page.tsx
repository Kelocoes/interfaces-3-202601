"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { loginAction } from "../(private)/dashboard/loginAction"

export default function Login() {
    const formRef = React.useRef<HTMLFormElement>(null)
    const router = useRouter()

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(formRef.current!)
        const result = await loginAction(formData)

        if (result?.error) {
            console.log("Login error:", result.message)
            return
        }

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