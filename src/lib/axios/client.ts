import axios, { AxiosError, AxiosResponse } from "axios"

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

const onSuccess = (response: AxiosResponse) => {
    return response
}

const onError = (error: AxiosError) => {
    return Promise.reject(error)
}

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
