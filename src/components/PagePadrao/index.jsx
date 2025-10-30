import Footer from "../Footer";
import Header from "../Header";

const PagePadrao = ({ children }) => {
  return (
    // <div className="flex flex-col min-h-screen">
    //   <Header />
    //   <main className="flex-1 bg-gray-300 dark:bg-slate-900">{children}</main>
    //   <Footer />
    // </div>
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex-1 overflow-hidden bg-gray-300 dark:bg-slate-900">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PagePadrao;
