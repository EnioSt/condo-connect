import { useNavigate } from "react-router-dom";
import logo from "../../../public/download.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/giulia-bg.png')" }}
    >
      <form className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo do condomínio" className="h-20" />
        </div>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="usuario"
              className="block text-sm font-medium text-gray-700"
            >
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              placeholder="Informe seu usuário"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              placeholder="Informe sua senha"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md cursor-pointer hover:bg-blue-700 transition"
          onClick={() => navigate("/")}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
