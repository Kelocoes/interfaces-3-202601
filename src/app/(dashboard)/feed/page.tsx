import { gameService, type GameResponse } from "./services/game.service"

export default async function Feed() {
    const games = await gameService.getGames();
    return (
        <div>
            <ul>
                {games.map((game: GameResponse) => <li key={game.id}>{game.name}</li>)}
            </ul>
        </div>
    )
}