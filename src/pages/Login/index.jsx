import { useNavigate } from "react-router-dom";
import logo from "../../../public/download.png";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/giulia-bg.png')" }}
    >
      <form className="bg-white bg-opacity-90 dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo do condomínio" className="h-20" />
        </div>
        <div className="space-y-4">
          <div>
            <Input
              htmlFor="usuario"
              type="text"
              id="usuario"
              placeholder="Informe seu usuário"
            >
              Usuário
            </Input>
          </div>
          <div>
            <Input
              htmlFor="senha"
              type="password"
              id="senha"
              placeholder="Informe sua senha"
            >
              Senha
            </Input>
          </div>
        </div>
        <Button type="submit" onClick={() => navigate("/")}>
          Entrar
        </Button>
      </form>
    </div>
  );
};

export default Login;
