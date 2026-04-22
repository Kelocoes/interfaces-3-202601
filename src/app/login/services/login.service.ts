import axiosClient, { ApiResult, safeRequest } from "@/lib/axios/client"

type LoginPayload = {
    email: string
    password: string
}

type LoginResponse = {
    access_token: string
}

class LoginService {
    async login(payload: LoginPayload): Promise<ApiResult<LoginResponse>> {
        return safeRequest<LoginResponse>(axiosClient.post("/auth/login", payload))
    }
}

export const loginService = new LoginService()
