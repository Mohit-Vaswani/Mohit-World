import Head from 'next/head';

const Layout = ({ title, description, keywords, favicon, children }) => {
  const defaultTitle = 'Mohit.World';
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
        <meta name="monetag" content="8155a8a1e2fc7ccb2f7e8ba85259ed8b"></meta>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
