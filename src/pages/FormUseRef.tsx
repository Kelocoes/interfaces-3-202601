import React, { useRef, useState } from "react";

function Counter() {
    const ref = useRef(0);

    function handleClick() {
        ref.current = ref.current + 1;
        alert("¡Hiciste clic " + ref.current + " veces!");
    }

    return <button onClick={handleClick}>¡Hazme clic!</button>;
}

function FormWithRef() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        if (inputRef.current) {
            alert("El valor del input es: " + inputRef.current.value);
        }
    }

    return (
        <div>
            <input ref={inputRef} placeholder="Escribe algo..." />
            <button onClick={handleClick}>Mostrar valor</button>
        </div>
    );
}

function FormWithState() {
    const [value, setValue] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    function handleClick() {
        alert("El valor del input es: " + value);
    }

    return (
        <div>
            <input value={value} onChange={handleChange} placeholder="Escribe algo..." />
            <button onClick={handleClick}>Mostrar valor</button>
        </div>
    );
}

export default function FormUseRef() {
    return (
        <div className="bg-white text-black p-4 rounded-2xl">
            <h1 className="text-2xl">useRef</h1>
            <p>
                El hook <code>useRef</code> es una forma de mantener un valor mutable que persiste durante todo el ciclo de vida del componente, sin causar re-renderizados cuando cambia. Es útil para almacenar cualquier valor que quieras mantener
                entre renders, como un contador, una referencia a un elemento DOM, o cualquier otro dato que no necesite causar una actualización de la interfaz de usuario.
            </p>
            <Counter />
            <FormWithRef />
            <FormWithState />
        </div>
    );
}
