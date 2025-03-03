import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Mason Consulting Limited - IT services with a neurodiversity focus" />
          <link rel="icon" href="/favicon.ico" />
          
          {/* Preload font files for faster loading */}
          <link
            rel="preload"
            href="/fonts/Korolev-Font/KorolevCondensed-Heavy.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/library_3_am/Library3amSoft-Regular.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
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
