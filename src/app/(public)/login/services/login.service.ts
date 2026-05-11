import axiosClient, { ApiResult, safeRequest } from "@/lib/axios/client"

export type LoginResponse = {
    access_token: string;
}

class LoginService {
    async login(email: string, password: string): Promise<ApiResult<LoginResponse>> {
        const result = await safeRequest<LoginResponse>(
            axiosClient.post("/auth/login", { email, password })
        )
        return result;
    }
}

export const loginService = new LoginService()