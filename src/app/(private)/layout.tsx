import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const token = (await cookies()).get("token")?.value

    if (!token) {
        redirect("/login?reason=session_expired")
    }

    return (
        <>{children}</>
    )
}