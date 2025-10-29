import { FiSearch } from "react-icons/fi";

const InputIcon = ({
  placeholder = "Buscar...",
  icon: Icon = FiSearch,
  ...rest
}) => {
  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent border border-white text-white placeholder-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
        {...rest}
      />
      <Icon className="absolute left-3 top-2.5 text-white text-lg" />
    </div>
  );
};

export default InputIcon;
