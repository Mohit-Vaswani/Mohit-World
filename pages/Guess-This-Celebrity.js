import Layout from "@/components/Layout"
import AppHeader from "@/components/AppHeader"
import GuessPage from "@/components/GuessThisCelebs/GuessPage"

export default function GuessThisCelebrity() {
  return (
    <Layout title={"Guess this celebrity"} description={``} keywords={""} favicon={"/nhie.ico"}>
    <AppHeader/>
    <GuessPage/>
    </Layout>
  )
}
