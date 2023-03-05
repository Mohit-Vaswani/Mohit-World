import AppHeader from "@/components/AppHeader";
import IdeaContainer from "@/components/A_Good_Idea/IdeaContainer";
import Layout from "@/components/Layout";

export default function AGoodIdea() {
  return (
    <Layout title={"A Good Idea"} description={"Find amazing ideas for apps, websites, diy and many more."}>
      <main className="w-full h-screen flex flex-col bg-slate-100 text-slate-900">
      <AppHeader/>
      <IdeaContainer />
      </main>
    </Layout>
  );
}
