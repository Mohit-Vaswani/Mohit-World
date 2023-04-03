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
        <meta name="a.validate.02" content="8isJbu_632YcJXlZhh2k7PUGB_jQWHTq9vft" />
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
