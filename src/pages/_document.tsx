import Document, { DocumentContext, Html, Main, NextScript, Head } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href="https://cdn.discordapp.com/avatars/183497896128282625/0236d0bb976f72ce806b961c7eb9e2b1.png?size=1024"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
