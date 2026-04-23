import axiosClient from "@/lib/axios/client"

export type GameResponse = {
    id: number,
    name: string,
    description: string
}

class GameService {
    async getGames() {
        const result = await axiosClient.get<GameResponse[]>("/games");
        return result.data
    }
}

export const gameService = new GameService()