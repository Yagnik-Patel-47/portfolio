import Head from "next/head";

const Seo = () => {
  return (
    <Head>
      <title>Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="A personal portfolio." />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="keywords" content="porfolio" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default Seo;
