import { Html, Head, Main, NextScript } from "next/document";

/**
 * Document shell — loads global fonts that are not managed by next/font.
 * Inter is loaded via next/font in _app.tsx; Material Symbols loads here.
 */
export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
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
