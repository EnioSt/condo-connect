import { PiNotSubsetOf } from "react-icons/pi";
import { ButtonExit } from "../Button";
import { useNavigate } from "react-router-dom";

export const ProfileSummary = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-3 text-gray-800 dark:text-gray-400">
      <h2 className="text-xl font-semibold">
        Enio Santos, <span className="text-blue-600 font-normal">907</span>
      </h2>
      <p className=" text-sm text-gray-600 dark:text-gray-200">
        Morador e proprietário, Morador e proprietário, Morador e proprietário,
        Morador e proprietário, Morador e proprietário, Morador e proprietário,
        Morador e proprietário, Morador e proprietário Morador e proprietário,
        Morador e proprietário, Morador e proprietário, Morador e proprietário
      </p>
      <div>
        <ButtonExit onClick={() => navigate("/auth/login")} />
      </div>
    </div>
  );
};
