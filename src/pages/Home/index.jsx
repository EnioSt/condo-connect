import { Aside } from "../../components/Aside";
import { DefaultLayout } from "../../components/DefaultLayout";
import { List } from "../../components/List";
import PagePadrao from "../../components/PagePadrao";
import { ProfileSummary } from "../../components/ProfileSummary";
import { Publication } from "../../components/Publication";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";

// const Home = () => {
//   return (
//     <PagePadrao>
//       <DefaultLayout>
//         {/* Resumo do perfil */}
//         <Aside>
//           <ProfileSummary />
//         </Aside>
//         {/* Área de publicações */}
//         <Section>
//           {/* TextArea acima das publicações */}
//           <TextArea />
//           {/* Lista de publicações com rolagem interna */}
//           <List>
//             <div className="space-y-4">
//               {[...Array(5)].map((_, i) => (
//                 <div
//                   key={i}
//                   className="bg-gray-100 dark:bg-slate-700 p-4 rounded"
//                 >
//                   <Publication />
//                 </div>
//               ))}
//             </div>
//           </List>
//         </Section>
//       </DefaultLayout>
//     </PagePadrao>
//   );
// };
const Home = () => {
  return (
    <PagePadrao>
      <DefaultLayout>
        {/* Em telas grandes, Aside fica à esquerda. Em telas menores, ele entra no topo da Section */}
        <Section className="w-full h-full">
          {/* Container flexível para Aside + TextArea lado a lado em telas pequenas */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <Aside>
                <ProfileSummary />
              </Aside>
            </div>
            <div className="md:w-1/2">
              <TextArea />
            </div>
          </div>

          {/* Lista de publicações com rolagem interna */}
          <List>
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-100 dark:bg-slate-700 p-4 rounded"
                >
                  <Publication />
                </div>
              ))}
            </div>
          </List>
        </Section>
      </DefaultLayout>
    </PagePadrao>
  );
};

export default Home;
