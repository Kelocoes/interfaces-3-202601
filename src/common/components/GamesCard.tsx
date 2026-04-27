"use client";

type GamesCardProps = {
    id: number;
    name: string;
    description: string;
    onDeleteAction: (id: number) => Promise<void>;
};

export default function GamesCard({ id, name, description, onDeleteAction }: GamesCardProps) {
    return (
        <div className="rounded-lg border border-base-200 bg-base-100 p-4 shadow-md">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold mb-2">{name}</h2>
                    <p className="text-base-content/70">{description}</p>
                </div>

                <button
                    className="btn btn-error btn-sm"
                    type="button"
                    onClick={async () => {
                        await onDeleteAction(id);
                    }}
                >
                    Borrar
                </button>
            </div>
        </div>
    )
}