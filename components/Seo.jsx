import Head from "next/head";

const Seo = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Personal Resume Site}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="	cv, portfolio, react nextjs portfolio, resume"
      />
      <meta
        name="description"
        content="Cesar Granda - Personal Resume Site"
      />
      <meta name="ibthemes" content="ATFN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <style>
        {font && `@import url(${font})`}
      </style>
      <link rel="icon" href="favicon.ico" />
    </Head>
  </>
);

export default Seo;
