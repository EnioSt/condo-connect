import PagePadrao from "../../components/PagePadrao";
import { ProfileSummary } from "../../components/ProfileSummary";
import { Publication } from "../../components/Publication";

const Home = () => {
  return (
    <PagePadrao>
      <div className="flex gap-6 px-4 py-6">
        {/* Resumo do perfil */}
        <aside className="w-1/4 rounded-lg shadow p-4 h-fit sticky top-6">
          <ProfileSummary />
        </aside>

        {/* Área de publicações */}
        <section className="flex-1 overflow-y-auto max-h-[80vh]  rounded-lg shadow p-4">
          {/* Aqui você pode mapear as postagens */}
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            <div className="bg-gray-100 dark:bg-slate-700 p-4 rounded">
              <Publication />
            </div>
            {/* ... */}
          </div>
        </section>
      </div>
    </PagePadrao>
  );
};

export default Home;
