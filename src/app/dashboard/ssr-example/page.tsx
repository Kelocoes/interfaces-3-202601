const items = ["Elemento 1", "Elemento 2", "Elemento 3"];

export default function SsrExamplePage() {
    console.info("Renderizando componente SSRExamplePage");
    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold">SSR Example</h1>
            <ul className="mt-4 list-disc pl-6">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
