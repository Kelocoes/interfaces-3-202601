// app/login/actions.ts
'use server'

import { cookies } from 'next/headers'
import { loginService } from '@/app/login/services/login.service'

export async function loginAction(formData: FormData) {
    const email = String(formData.get("email") ?? "")
    const password = String(formData.get("password") ?? "")

    const result = await loginService.login({ email, password })


    if (!result.error) {
        const cookieStore = await cookies()
        cookieStore.set('token', result.data.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        })
    }

    return result
}