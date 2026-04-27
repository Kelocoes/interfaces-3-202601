import axiosClient from "@/lib/axios/client"

export type GameResponse = {
    id: number,
    name: string,
    description: string
}

export type CreateGameDto = {
    name: string;
    description: string;
    minPlayers: number;
    maxPlayers: number;
    category: string;
    createdBy: number;
}

class GameService {
    async getGames() {
        const result = await axiosClient.get<GameResponse[]>("/games");
        return result.data
    }

    async createGame(payload: CreateGameDto) {
        const result = await axiosClient.post<GameResponse>("/games", payload);
        return result.data;
    }

    async deleteGame(id: number) {
        await axiosClient.delete(`/games/${id}`);
    }
}

export const gameService = new GameService()