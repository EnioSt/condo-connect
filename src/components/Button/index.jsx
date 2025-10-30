import { ImExit } from "react-icons/im";
import { PiPencilLineBold } from "react-icons/pi";

const Button = ({ children, className = "", ...rest }) => {
  return (
    <button
      {...rest}
      className={`mt-6 w-full bg-blue-900 text-white py-2 rounded-md cursor-pointer hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export const ButtonPost = () => {
  return (
    <button
      type="submit"
      className="flex items-center gap-2 px-4 py-2 bg-blue-900 cursor-pointer hover:bg-blue-600 text-white rounded-md transition-colors duration-200"
    >
      <PiPencilLineBold size={20} />
      Publicar
    </button>
  );
};

export const ButtonExit = ({ ...props }) => {
  return (
    <button
      {...props}
      className="flex items-center gap-2 px-4 py-2 bg-red-600 cursor-pointer hover:bg-red-700 text-white rounded-md transition-colors duration-200"
    >
      <ImExit size={20} /> Sair
    </button>
  );
};

export default Button;
