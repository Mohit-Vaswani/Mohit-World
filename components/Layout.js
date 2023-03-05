import Head from 'next/head';

const Layout = ({ title, description, keywords, favicon, children }) => {
  const defaultTitle = 'Mohit.Fun';
  const defaultDescription = 'Cool web-apps, tools, games, visualizations etc.';
  const defaultKeywords = 'games, visualizations, nealfun, tools';
  // const defaultFavicon = "../public/favicon.ico";

  return (
    <div>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords || defaultKeywords} />
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
