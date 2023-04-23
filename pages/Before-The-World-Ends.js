import Logo from "@/components/Logo"
import MainComponent from "../components/BeforeTheWorldEnds/MainComponent"
import Layout from "@/components/Layout"

export default function BeforeTheWorldEnds() {
  return (
    <Layout title={`Before The World Ends`} favicon={``} description={`Write The One Wish That You Want To Do Before The World Ends.`} keywords={`Before the world ends, fun web app, neal.fun, mohit.fun, earth day`}>
    <div className="main-bg">
      <Logo />
      <MainComponent />
    </div>
    </Layout>
  )
}
