import Head from 'next/head';
import getConfig from 'next/config';

const Layout = ({ title, description, keywords, children }) => {
  const defaultTitle = 'Mohit.Fun';
  const defaultDescription = 'Cool web-apps, tools, games, visualizations etc.';
  const defaultKeywords = 'games, visualizations, nealfun, tools';

  return (
    <div>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
