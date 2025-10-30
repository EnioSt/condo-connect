import { List } from "../../components/List";
import PagePadrao from "../../components/PagePadrao";
import { Publication } from "../../components/Publication";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";

const Profile = () => {
  return (
    <PagePadrao>
      <div className="flex items-center justify-center">
        <Section>
          {/* TextArea acima das publicações */}
          <TextArea />
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
      </div>
    </PagePadrao>
  );
};

export default Profile;
