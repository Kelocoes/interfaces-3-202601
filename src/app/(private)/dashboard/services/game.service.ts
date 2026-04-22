import axiosClient, { ApiResult, safeRequest } from "@/lib/axios/client"

type Game = {
    id: number
    name: string
    description: string
    minPlayers: number
    maxPlayers: number
    category: string
    createdBy: {
        id: number
        username: string
        email: string
        passwordHash: string
        bio: string
        createdAt: string
    }
}

class GameService {
    async getGames(): Promise<ApiResult<Game[]>> {
        return safeRequest<Game[]>(axiosClient.get("/games"))
    }
}

export const gameService = new GameService()