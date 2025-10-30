import { PiPencilLineBold } from "react-icons/pi";
import { ButtonPost } from "../Button";

export const TextArea = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded-lg shadow space-y-3">
      <label
        htmlFor="nova-publicacao"
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        Nova publicação
      </label>

      <textarea
        id="nova-publicacao"
        name="nova-publicacao"
        rows={4}
        placeholder="Escreva sua mensagem..."
        className="w-full p-3 rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ButtonPost />
    </div>
  );
};
