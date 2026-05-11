import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
        "Content-Type": "application/json"
    }
})

const setAuthorizationHeader = (config: InternalAxiosRequestConfig, token?: string) => {
    if (!token) return

    config.headers = config.headers ?? {}
        ; (config.headers as Record<string, string>).Authorization = `Bearer ${token}`
}

const onRequest = async (config: InternalAxiosRequestConfig) => {
    let token: string | undefined

    if (typeof window === "undefined") {
        const { cookies } = await import("next/headers")
        token = (await cookies()).get("token")?.value
    } else {
        token = localStorage.getItem("token") ?? undefined
    }
    
    setAuthorizationHeader(config, token)
    return config
}

const onSuccess = (response: AxiosResponse) => {
    return response
}

const onError = (error: AxiosError) => {
    return Promise.reject(error)
}

axiosClient.interceptors.request.use(onRequest, onError)
axiosClient.interceptors.response.use(onSuccess, onError)

export type ApiResult<T> = {
    error: false
    data: T
    status: number
} | {
    error: true
    message: string
    status?: number
}

export async function safeRequest<T>(request: Promise<AxiosResponse<T>>): Promise<ApiResult<T>> {
    try {
        const response = await request;
        return {
            error: false,
            data: response.data,
            status: response.status
        };
    } catch (error) {
        if (error instanceof AxiosError) {
            return {
                error: true,
                message: error.message,
                status: error.response?.status
            };
        }
        return {
            error: true,
            message: "An unexpected error occurred",
            status: undefined
        };
    }
}

export default axiosClient