import axiosClient from "@/lib/axios/client"

class LoginService {
    async login(email: string, password: string) {
        const result = await axiosClient.post("/auth/login", {
            email, password
        })
        return result.data;
    }
}

export const loginService = new LoginService()