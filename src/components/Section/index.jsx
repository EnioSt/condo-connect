export const Section = ({ children, className = "" }) => {
  return (
    <section className={`flex-1 flex flex-col gap-4 ${className}`}>
      {children}
    </section>
  );
};
