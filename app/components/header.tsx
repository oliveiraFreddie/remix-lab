import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-white font-bold text-lg">
          Remix Lab
        </Link>

        <div className="md:flex space-x-4 hidden">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-white hover:text-gray-300">
                Contactos
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-white hover:text-gray-300">
                Produtos
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button className="text-white bg-gray-800 hover:bg-gray-900" onClick={toggleMenu}>
            {showMenu ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {showMenu && (
        <nav className="md:hidden py-4 px-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-white hover:text-gray-300">
                Contactos
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-white hover:text-gray-300">
                Produtos
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
