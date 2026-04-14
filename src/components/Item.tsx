import { useState } from "react";

export default function CustomItem({ id, name }: { id: number; name: string }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <li>
            [{id}]My item: {name}
            <button onClick={() => setIsActive(!isActive)} className="btn">
                {isActive ? "Activado!" : "Desactivado"}
            </button>
        </li>
    );
}
