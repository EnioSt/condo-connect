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

export default Button;
