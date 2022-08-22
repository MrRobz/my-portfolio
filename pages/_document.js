import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.robie.dev/" />
          <meta property="og:title" content="Robin Philip Thomas" />
          <meta
            property="og:description"
            content="Robin Philip Thomas's portfolio website."
          />
          <meta property="og:image" content="/social-share-img.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.robie.dev/" />
          <meta property="twitter:title" content="Robin Philip Thomas" />
          <meta
            property="twitter:description"
            content="Robin Philip Thomas's portfolio website."
          />
          <meta property="twitter:image" content="/social-share-img.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
