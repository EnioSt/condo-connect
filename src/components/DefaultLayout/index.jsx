export const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-6 h-full">
      {children}
    </div>
  );
};
