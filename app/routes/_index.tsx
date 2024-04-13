import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Meu LAB Remix" },
    { name: "description", content: "Bem Vindo!" },
  ];
};

export default function Index() {
  const title = "Bem vindo ao meu LAB Remix"
  const subtitle = "Aqui eu exploro as funcionalidades desse framework incrível"
  return (
    <div className="py-4 px-4">
      <h1 className="text-3xl font-bold underline">{title}</h1>
      <br />
      <p>{subtitle}</p>
    </div>
  );
}
