"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { gameService } from "../services/game.service";

export default function GameForm() {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setError(null);
        setMessage(null);

        const formData = new FormData(event.currentTarget);
        const name = String(formData.get("name") ?? "").trim();
        const description = String(formData.get("description") ?? "").trim();
        const minPlayers = Number(formData.get("minPlayers"));
        const maxPlayers = Number(formData.get("maxPlayers"));
        const category = String(formData.get("category") ?? "").trim();
        const createdBy = Number(formData.get("createdBy"));

        if ([minPlayers, maxPlayers, createdBy].some(Number.isNaN)) {
            setError("Revisa los campos numéricos antes de enviar el formulario.");
            setIsSubmitting(false);
            return;
        }

        try {
            await gameService.createGame({
                name,
                description,
                minPlayers,
                maxPlayers,
                category,
                createdBy,
            });

            setMessage("Juego creado correctamente.");
            formRef.current?.reset();
            router.refresh();
        } catch {
            setError("No fue posible crear el juego.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form ref={formRef} className="card bg-base-100 border border-base-200 shadow-xl lg:w-95 lg:max-w-none lg:shrink-0" onSubmit={handleSubmit}>
            <div className="card-body gap-4">
                <div>
                    <h2 className="card-title text-2xl">Crear juego</h2>
                    <p className="text-sm text-base-content/70">Completa la información básica del juego.</p>
                </div>

                <label className="form-control">
                    <span className="label-text mb-1">Nombre</span>
                    <input
                        className="input input-bordered w-full"
                        name="name"
                        defaultValue=""
                        placeholder="Catan"
                        required
                    />
                </label>

                <label className="form-control">
                    <span className="label-text mb-1">Descripción</span>
                    <textarea
                        className="textarea textarea-bordered min-h-28 w-full"
                        name="description"
                        defaultValue=""
                        placeholder="Juego de estrategia y negociación"
                        required
                    />
                </label>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="form-control">
                        <span className="label-text mb-1">Mín. jugadores</span>
                        <input
                            className="input input-bordered w-full"
                            name="minPlayers"
                            type="number"
                            min="1"
                            defaultValue=""
                            placeholder="2"
                            required
                        />
                    </label>

                    <label className="form-control">
                        <span className="label-text mb-1">Máx. jugadores</span>
                        <input
                            className="input input-bordered w-full"
                            name="maxPlayers"
                            type="number"
                            min="1"
                            defaultValue=""
                            placeholder="4"
                            required
                        />
                    </label>
                </div>

                <label className="form-control">
                    <span className="label-text mb-1">Categoría</span>
                    <input
                        className="input input-bordered w-full"
                        name="category"
                        defaultValue=""
                        placeholder="Estrategia"
                        required
                    />
                </label>

                <label className="form-control">
                    <span className="label-text mb-1">Creado por</span>
                    <input
                        className="input input-bordered w-full"
                        name="createdBy"
                        type="number"
                        min="1"
                        defaultValue=""
                        placeholder="1"
                        required
                    />
                </label>

                {message ? <div className="alert alert-success"><span>{message}</span></div> : null}
                {error ? <div className="alert alert-error"><span>{error}</span></div> : null}

                <div className="card-actions justify-end">
                    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Creando..." : "Crear juego"}
                    </button>
                </div>
            </div>
        </form>
    );
}
