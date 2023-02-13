import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "../utils/create-emotion-cache";

export default class MyDocument extends Document {
 render() {
   return (
     <Html lang="en">
       <Head>
        <meta name="application-name" content="Webbase" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Webbase" />
          <meta name="description" content="Ứng dụng khởi tạo và quản trị website tự động" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/icons/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#378dcc" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#378dcc" />

          <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-192x192.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://twitter.com/VWebbase" />
          <meta name="twitter:title" content="Webbase" />
          <meta name="twitter:description" content="Ứng dụng khởi tạo và quản trị website tự động" />
          <meta name="twitter:image" content="https://webbase.vn/icons/android-chrome-192x192.png" />
          <meta name="twitter:creator" content="@VWebbase" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="website" />
          <meta property="og:description" content="Ứng dụng khởi tạo và quản trị website tự động" />
          <meta property="og:site_name" content="Webbase" />
          <meta property="og:url" content="https://webbase.vn" />
          <meta property="og:image" content="https://webbase.vn/icons/apple-touch-icon.png" />

          <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <meta name="emotion-insertion-point" content="" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel='apple-touch-startup-image' href='/splat/splat-2048x2732.png' sizes='2048x2732' />
          <link rel='apple-touch-startup-image' href='/splat/splat-1668x2224.png' sizes='1668x2224' />
          <link rel='apple-touch-startup-image' href='/splat/splat-1536x2048.png' sizes='1536x2048' />
          <link rel='apple-touch-startup-image' href='/splat/splat-1125x2436.png' sizes='1125x2436' />
          <link rel='apple-touch-startup-image' href='/splat/splat-1242x2208.png' sizes='1242x2208' />
          <link rel='apple-touch-startup-image' href='/splat/splat-750x1334.png' sizes='750x1334' />
          <link rel='apple-touch-startup-image' href='/splat/splat-640x1136.png' sizes='640x1136' />
         {this.props.emotionStyleTags}
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </Html>
   );
 }
}

MyDocument.getInitialProps = async (ctx) => {
 const originalRenderPage = ctx.renderPage;

 const cache = createEmotionCache();
 const { extractCriticalToChunks } = createEmotionServer(cache);

 ctx.renderPage = () =>
   originalRenderPage({
     enhanceApp: (App) =>
       function EnhanceApp(props) {
         return <App emotionCache={cache} {...props} />;
       },
   });

 const initialProps = await Document.getInitialProps(ctx);

 const emotionStyles = extractCriticalToChunks(initialProps.html);
 const emotionStyleTags = emotionStyles.styles.map((style) => (
   <style
     data-emotion={`${style.key} ${style.ids.join(" ")}`}
     key={style.key}
     dangerouslySetInnerHTML={{ __html: style.css }}
   />
 ));

 return {
   ...initialProps,
   emotionStyleTags,
 };
};