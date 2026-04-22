import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios"

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

const onSuccess = (response: AxiosResponse) => {
    return response
}

const getTokenFromCookie = () => {
    if (typeof document === "undefined") return null

    const tokenCookie = document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith("token="))

    return tokenCookie ? decodeURIComponent(tokenCookie.split("=")[1] ?? "") : null
}

const onRequest = (config: InternalAxiosRequestConfig) => {
    if (typeof window !== "undefined") {
        const token = window.localStorage.getItem("token") ?? getTokenFromCookie()

        if (token) {
            config.headers = config.headers ?? {};
            (config.headers as Record<string, string>).Authorization = `Bearer ${token}`
        }
    }

    return config
}

const onError = (error: AxiosError) => {
    return Promise.reject(error)
}

axiosClient.interceptors.request.use(onRequest)
axiosClient.interceptors.response.use(onSuccess, onError)

export type ApiResult<T> =
    | {
        error: false
        data: T
        status: number
    }
    | {
        error: true
        message: string
        status?: number
    }

export async function safeRequest<T>(request: Promise<AxiosResponse<T>>): Promise<ApiResult<T>> {
    try {
        const response = await request
        return {
            error: false,
            data: response.data,
            status: response.status,
        }
    } catch (error) {
        const axiosError = error as AxiosError<{ message?: string }>

        return {
            error: true,
            message: axiosError.response?.data?.message ?? axiosError.message ?? "Unexpected error",
            status: axiosError.response?.status,
        }
    }
}

export default axiosClient
