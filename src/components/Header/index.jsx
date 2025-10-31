import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "/download.png";
import InputIcon from "../InputIcon";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="shrink-0">
          <img src={logo} alt="Logo do condomínio" className="h-10" />
        </div>

        {/* Input central */}
        <div className="flex- justify-center hidden md:flex">
          <InputIcon placeholder="O que deseja buscar?" />
        </div>

        {/* Menu hamburguer (mobile/tablet) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Navegação (desktop) */}
        <nav className="hidden lg:flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-300 transition">
            Home
          </Link>
          <Link to="/perfil" className="hover:text-blue-300 transition">
            Perfil
          </Link>
          <Link
            to="/restaurar-senha"
            className="hover:text-blue-300 transition"
          >
            Restaurar Senha
          </Link>
        </nav>
      </div>

      {/* Menu expandido (mobile/tablet) */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 text-sm font-medium">
          <InputIcon placeholder="O que deseja buscar?" />
          <Link to="/" className="block hover:text-blue-300 transition">
            Home
          </Link>
          <Link to="/perfil" className="block hover:text-blue-300 transition">
            Perfil
          </Link>
          <Link
            to="/restaurar-senha"
            className="block hover:text-blue-300 transition"
          >
            Restaurar Senha
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
