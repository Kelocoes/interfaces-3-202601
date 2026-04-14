import { useState } from "react";

export default function Canvas() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    return (
        <div
            onPointerMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setPosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }}
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    left: position.x,
                    top: position.y,
                    transform: "translate(-50%, -50%)",
                    width: 20,
                    height: 20,
                }}
            />
        </div>
    );
}
