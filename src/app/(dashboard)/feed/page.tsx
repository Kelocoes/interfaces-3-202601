import { gameService, type GameResponse } from "./services/game.service"
import GamesCard from "@/common/components/GamesCard";
import GameForm from "./components/GameForm";
import { revalidatePath } from "next/cache";

export default async function Feed() {
    const games = await gameService.getGames();

    async function deleteGame(id: number) {
        "use server";

        await gameService.deleteGame(id);
        revalidatePath("/feed");
    }

    return (
        <div className="min-h-screen bg-base-200 px-4 py-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start">
                <GameForm />

                <section className="card bg-base-100 border border-base-200 shadow-xl">
                    <div className="card-body gap-4">
                        <div>
                            <h2 className="card-title text-2xl">Juegos</h2>
                            <p className="text-sm text-base-content/70">Lista de juegos obtenidos desde la API.</p>
                        </div>

                        <div className="grid gap-4">
                            {games.length > 0 ? (
                                games.map((game: GameResponse) => (
                                    <GamesCard
                                        key={game.id}
                                        id={game.id}
                                        name={game.name}
                                        description={game.description}
                                        onDeleteAction={deleteGame}
                                    />
                                ))
                            ) : (
                                <div className="alert alert-info">
                                    <span>No hay juegos registrados todavía.</span>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}