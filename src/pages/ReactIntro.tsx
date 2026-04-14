import { useEffect, useState } from "react";

import CustomItem from "../components/Item";

import Canvas from "./Canvas";

export default function ReactIntro() {
    let anotherCounter = 0;
    const [counter, setCounter] = useState(0);
    const incrementarContador = () => {
        setCounter(counter + 1); // 0 + 1 = 1
        anotherCounter++;
        console.log("Counter, state", counter, "Counter, variable", anotherCounter);
    };

    useEffect(() => {
        console.log(counter);
    }, [counter]);

    return (
        <>
            <h1 className="text-4xl text-bold">React intro!</h1>
            <p>Contador va en: {counter}</p>
            <button type="button" onClick={incrementarContador} className="btn btn-primary">
                Aumentar!
            </button>
            <CustomItem id={1} name={"Carro"} />
            <CustomItem id={2} name={"Moto"} />
            <CustomItem id={3} name={"Autobús"} />
            <Canvas />
        </>
    );
}
