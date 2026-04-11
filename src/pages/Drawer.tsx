import React, { useState } from "react";

export default function Drawer() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const panels = [
        {
            title: "Acerca de",
            content: "Con una población de unos 2 millones de habitantes, Alma Ata es la mayor ciudad de Kazajistán. De 1929 a 1997 fue su capital.",
        },
        {
            title: "Etimología",
            content: `El nombre proviene de <span lang="kk-KZ">алма</span>, la palabra en kazajo para "manzana", y suele traducirse como
            "lleno de manzanas". De hecho, se cree que la región que rodea a Alma Ata es el hogar ancestral de la manzana, y el
            <i lang="la">Malus Silvestris</i> se considera un candidato probable para el ancestro de la manzana doméstica moderna.`,
        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Alma Ata, Kazajistán</h2>
            <div className="border rounded-lg overflow-hidden">
                {panels.map((panel, index) => (
                    <Panel key={index} title={panel.title} isActive={activeIndex === index} onShow={() => setActiveIndex(activeIndex === index ? null : index)}>
                        {panel.content}
                    </Panel>
                ))}
            </div>
        </div>
    );
}

function Panel({ title, children, isActive, onShow }: { title: string; children: React.ReactNode; isActive: boolean; onShow: () => void }) {
    return (
        <div className="border-b last:border-b-0">
            <button className="w-full px-4 py-3 text-left font-medium flex justify-between items-center bg-primary text-primary-content hover:bg-primary-focus transition-colors" onClick={onShow}>
                {title}
                <span className="text-sm font-normal">{isActive ? "Ocultar" : "Ver más"}</span>
            </button>
            {isActive && (
                <div className="p-4 bg-secondary text-secondary-content">
                    <p>{children}</p>
                </div>
            )}
        </div>
    );
}
