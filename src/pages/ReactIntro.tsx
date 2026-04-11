import { useState } from "react";

import Map from "./Map";
import Pointer from "./Pointer";
import Form from "./Form";
import ShapeEditor from "./ShapesEditor";
import Drawer from "./Drawer";
import CustomHooks from "./CustomHooks";

function MyComponent({ id }: { id?: number }) {
    const [count, setCount] = useState(0);
    let value = 0;

    const handleClick = () => {
        value++;
        setCount((prev) => prev + 1);
        console.info(`Button ${id} clicked! Value: ${value}`);
    };
    return (
        <div className="bg-white text-black p-4 rounded-2xl">
            <h1 className="text-2xl">My Component</h1>
            <p>This is a simple React component.</p>
            <p>Component ID: {id}</p>
            <p>Value: {value}</p>
            <p>Count: {count}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                // onClick={() => alert(`Button ${id} clicked!`)}
                onClick={handleClick}
            >
                Click Me
            </button>
        </div>
    );
}

function Item({ name, isPacked }: { name: string; isPacked: boolean }) {
    return (
        <li className="item">
            {name} {isPacked && "✅"}
        </li>
    );
}

function PackingList() {
    return (
        <section>
            <h1>Lista de equipaje de Sally Ride</h1>
            <ul>
                <Item isPacked={true} name="Traje de vuelo" />
                <Item isPacked={true} name="Casco con dorado a la hoja" />
                <Item isPacked={false} name="Fotografía de Tam" />
            </ul>
        </section>
    );
}

export default function ReactIntro() {
    return (
        <div className="bg-white text-black p-4 rounded-2xl">
            <h1 className="text-2xl">React Intro</h1>
            <p>This is a simple React application to demonstrate routing and layouts.</p>
            <MyComponent id={1} />
            <MyComponent id={2} />
            <MyComponent id={3} />
            <PackingList />
            <Map />
            <Pointer />
            <Form />
            <ShapeEditor />
            <Drawer />
            <CustomHooks />
        </div>
    );
}
