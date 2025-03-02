import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Mason Consulting Limited - IT services with a neurodiversity focus" />
          <link rel="icon" href="/favicon.ico" />
          {/* You can add additional meta tags, web fonts, or analytics here */}
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
