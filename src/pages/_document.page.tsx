import { default as Document, Html, Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <body className="bg-gray-50">
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}
