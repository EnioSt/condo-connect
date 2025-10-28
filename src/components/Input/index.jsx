const Input = ({ children, htmlFor, type, placeholder, id }) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700 dark:text-white"
      >
        {children}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="placeholder-gray-400 dark:placeholder-gray-300 bg-white dark:bg-gray-800 text-black dark:text-white mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </>
  );
};

export default Input;
