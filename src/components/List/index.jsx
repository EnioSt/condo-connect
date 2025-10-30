export const List = ({ children }) => {
  return (
    <div className="flex-1 overflow-y-auto max-h-[70vh] rounded-lg shadow p-4 bg-white dark:bg-slate-800">
      {children}
    </div>
  );
};
