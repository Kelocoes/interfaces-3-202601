import axiosClient, { safeRequest } from "@/lib/axios/client"

type LoginPayload = {
    email: string
    password: string
}

class LoginService {
    async login(payload: LoginPayload) {
        return safeRequest(axiosClient.post("/api/auth/login", payload))
    }
}

export const loginService = new LoginService()
