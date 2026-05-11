import axiosClient, { safeRequest } from "@/lib/axios/client"

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
        const result = await safeRequest<GameResponse[]>(
            axiosClient.get("/games")
        );
        return result;
    }

    async createGame(payload: CreateGameDto) {
        const result = await safeRequest<GameResponse>(
            axiosClient.post("/games", payload)
        );
        return result;
    }

    async deleteGame(id: number) {
        await safeRequest(axiosClient.delete(`/games/${id}`));
    }
}

export const gameService = new GameService()