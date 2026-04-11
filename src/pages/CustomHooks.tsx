import { useState, useEffect } from "react";

export function useDelayedValue(value: { x: number; y: number }, delay: number) {
    const [delayedValue, setDelayedValue] = useState(value);

    useEffect(() => {
        setTimeout(() => {
            setDelayedValue(value);
        }, delay);
    }, [value, delay]);

    return delayedValue;
}

export function usePointerPosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        function handleMove(e: PointerEvent) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("pointermove", handleMove);
        return () => window.removeEventListener("pointermove", handleMove);
    }, []);
    return position;
}

function Dot({ position, opacity }: { position: { x: number; y: number }; opacity: number }) {
    return (
        <div
            style={{
                position: "absolute",
                backgroundColor: "pink",
                borderRadius: "50%",
                opacity,
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }}
        />
    );
}

export default function CustomHooks() {
    const pos1 = usePointerPosition();
    const pos2 = useDelayedValue(pos1, 100);
    const pos3 = useDelayedValue(pos2, 200);
    return (
        <>
            <Dot position={pos1} opacity={1} />
            <Dot position={pos2} opacity={0.8} />
            <Dot position={pos3} opacity={0.6} />
        </>
    );
}
