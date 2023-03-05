import Head from 'next/head';

const Layout = ({ title, description, keywords, children }) => {
  const defaultTitle = 'Default Title';
  const defaultDescription = 'Default Description';
  const defaultKeywords = 'Default, Keywords';

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
