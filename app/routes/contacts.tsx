import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Contactos" },
    { name: "description", content: "Contactos" },
  ];
};

export default function Contactos() {
    const title = "Contactos"
    const subtitle = "Aqui eu vou mostrar uma lista de contactos"
    return (
      <div className="py-4 px-4">
        <h1 className="text-3xl font-bold underline">{title}</h1>
        <br />
        <p>{subtitle}</p>
      </div>
    );
}