/* eslint-disable @next/next/no-sync-scripts */
import Document, { NextScript, Head, Main, Html } from "next/document";

export default class CustromDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' href='/favicon/logo.png' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap'
            rel='stylesheet'
          />
          <script src='https://kit.fontawesome.com/cfef524a5f.js'></script>
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
