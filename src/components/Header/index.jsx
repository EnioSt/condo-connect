import { Link } from "react-router-dom";
import logo from "/download.png";
import InputIcon from "../InputIcon";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo do condomínio" className="h-10" />
        </div>

        <InputIcon placeholder="O que deseja buscar" />

        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/home" className="hover:text-blue-300 transition">
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
    </header>
  );
};

export default Header;
