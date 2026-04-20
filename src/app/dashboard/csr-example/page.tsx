'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const items = ["Elemento 1", "Elemento 2", "Elemento 3"];

export default function CsrExamplePage() {
    console.info("Renderizando componente CSRExamplePage");
    const router = useRouter();
    const [clicks, setClicks] = useState(0);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold">CSR Example</h1>
            <p className="mt-2">Clicks: {clicks}</p>
            <button
                className="mt-3 rounded bg-black px-4 py-2 text-white"
                onClick={() => setClicks((value) => value + 1)}
            >
                Incrementar
            </button>
            <button
                className="btn btn-outline btn-sm mt-3 block"
                onClick={() => router.push("/dashboard")}
            >
                Volver al dashboard
            </button>
            <ul className="mt-4 list-disc pl-6">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}