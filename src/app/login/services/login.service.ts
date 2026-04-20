import axiosClient, { ApiResult, safeRequest } from "@/lib/axios/client"

type LoginPayload = {
    email: string
    password: string
}

type LoginResponse = {
    token: string
}

class LoginService {
    async login(payload: LoginPayload): Promise<ApiResult<LoginResponse>> {
        return safeRequest<LoginResponse>(axiosClient.post("/api/auth/login", payload))
    }
}

export const loginService = new LoginService()
