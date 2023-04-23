// Components
import Layout from "./Layout";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function Showcase() {
  return (
    <Layout>
      <section>
        <Header />
        <Main/>
        <Footer />
      </section>
    </Layout>
  );
}
