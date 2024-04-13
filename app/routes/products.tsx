import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Produtos" },
    { name: "description", content: "Produtos" },
  ];
};

export default function Produtos() {
    const title = "Produtos"
    const subtitle = "Aqui eu vou mostrar uma lista de produtos"
    return (
      <div className="py-4 px-4">
        <h1 className="text-3xl font-bold underline">{title}</h1>
        <br />
        <p>{subtitle}</p>
      </div>
    );
}