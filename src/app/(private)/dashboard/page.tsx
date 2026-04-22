import { gameService } from "./services/game.service"

export default async function Dashboard() {
    const games = await gameService.getGames()
    return (
        <main>
            <div className="grid min-h-screen grid-cols-1 bg-white">
                <div className="flex items-center justify-center p-4 md:p-8">
                    <div className="max-w-md">
                        <h1 className="text-2xl font-bold text-gray-800">Welcome to the Dashboard</h1>
                        <p className="text-gray-600 mt-2">
                            This is a simple dashboard layout with a responsive grid.
                        </p>
                    </div>
                </div>

                {games.error ? (
                    <div className="flex items-center justify-center p-4 md:p-8">
                        <p className="text-red-500">Error loading games: {games.message}</p>
                    </div>
                ) : (
                    <div className="flex items-center justify-center p-4 md:p-8">
                        <ul className="space-y-2">
                            {games.data.map((game) => (
                                <li key={game.id} className="text-gray-800">
                                    {game.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </main>
    )
}