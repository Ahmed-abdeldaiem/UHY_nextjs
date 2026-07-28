import { Html, Head, Main, NextScript } from "next/document";

/**
 * Document shell — loads global fonts that are not managed by next/font.
 * Inter is loaded via next/font in _app.tsx; Material Symbols loads here.
 */
export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="theme-color" content="#3D1A5C" />
        <meta
          name="google-site-verification"
          content="HcaiPjovmQBCQzma4FKX8Cp11ooLJPCAymyrfWbrsro"
        />
        <link rel="icon" href="/logo-icon-1.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo-icon-1.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
