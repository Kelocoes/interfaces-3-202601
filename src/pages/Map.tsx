import { getImageUrl } from "../utils/utils";

export const people = [
    {
        id: 0,
        name: "Creola Katherine Johnson",
        profession: "matemática",
        accomplishment: "los cálculos de vuelos espaciales",
        imageId: "MK3eW3A",
    },
    {
        id: 1,
        name: "José Mario Molina-Pasquel Henríquez",
        profession: "químico",
        accomplishment: "el descubrimiento del agujero de ozono en el Ártico",
        imageId: "mynHUSa",
    },
    {
        id: 2,
        name: "Mohammad Abdus Salam",
        profession: "físico",
        accomplishment: "la teoría del electromagnetismo",
        imageId: "bE7W1ji",
    },
    {
        id: 3,
        name: "Percy Lavon Julian",
        profession: "químico",
        accomplishment: "ser pionero en el uso de cortisona, esteroides y píldoras anticonceptivas",
        imageId: "IOjWm71",
    },
    {
        id: 4,
        name: "Subrahmanyan Chandrasekhar",
        profession: "astrofísico",
        accomplishment: "los cálculos de masa de estrellas enanas blancas",
        imageId: "lrWQx8l",
    },
];

export default function Map() {
    const listItems = people.map((person) => (
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {" " + person.profession + " "}
                conocido/a por {person.accomplishment}
            </p>
        </li>
    ));
    return (
        <article>
            <h1>Científicos</h1>
            <ul>{listItems}</ul>
        </article>
    );
}
