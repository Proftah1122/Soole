import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Soole</title>
        <link
          rel='stylesheet'
          href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css'
        />

        <script
          defer
          src='https://unpkg.com/alpinejs@3.10.2/dist/cdn.min.js'
        ></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
