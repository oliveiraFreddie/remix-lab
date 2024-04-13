import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Loader from API" },
    { name: "description", content: "Loader" },
  ];
};

export const loader: LoaderFunction = () => {
    return fetch("http://localhost:1337/api/contacts")
}

export default function Contacts() {
    const contacts = useLoaderData<typeof loader>();
    const title = "LoaderFunction - useLoaderData"
    const subtitle = "Consumindo dados de API"
    return (
        <div className="py-4 px-4">
          <h1 className="text-3xl font-bold underline">{title}</h1>
          <br />
          <p>{subtitle}</p>
          <br />
          <div className="contacts-container">
            {contacts.data.map((contact: any) => (
              <div key={contact.id} className="contact-item">
                <img src={contact.attributes.avatar} alt="Avatar" className="contact-image" />
                <div className="contact-details">
                  <p className="contact-title">{contact.attributes.first} {contact.attributes.last}</p>
                  <p className="contact-info">Twitter: {contact.attributes.twitter}</p>
                  <p className="contact-info">Notas: {contact.attributes.notes}</p>
                  <NavLink to={`${contact.id}`}
                     className={({isActive, isPending}) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                    >
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <button>Click</button>
                      )}{" "}
                      {contact.favorite ? <span>★</span> : null}
                    </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}