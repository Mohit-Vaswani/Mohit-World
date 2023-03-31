
import Layout from "@/components/Layout";
import NeverHaveIEver from "@/components/NeverHaveIEver/NHIEComponent";
import AppHeader from "@/components/AppHeader";

export default function EatingChecklist() {
  return (
    <Layout title={"Never Have I Ever"} description={`"Never Have I Ever" With a comprehensive checklist of statements, you can easily keep track of things you have or not.`} keywords={"Never Have I Ever, Never Have I Ever game, Never Have I Ever checklist, Icebreaker, Statements, Fun"} favicon={"/nhie.ico"}>
    <AppHeader/>
    <NeverHaveIEver/>
    </Layout>
  )
}
