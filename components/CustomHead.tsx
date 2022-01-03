import { ReactElement } from "react";
import Head from "next/head";
import appleTouchIcon from "../public/apple-touch-icon.png";
import favicon32 from "../public/favicon-32x32.png";
import favicon16 from "../public/favicon-16x16.png";

export default function CustomHead(props): ReactElement {
  const description =
    "We make buying insurance easier by showing you the best options available and helping you find the perfect policy at a great price.";
  const siteName = "Riley insurance Consultants & Agency";
  const pageTitle =
    "Riley insurance Consultants - We make buying insurance easier";
  const twitterHandle = "";
  const currentURL = "https://rileyconsultants.co.ke/revamp-2";
  const previewImage = "https://rileyconsultants.co.ke/revamp-2/cover.png";

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description}></meta>
      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
      {/* Open Graph */}
      <meta property="og:url" content={currentURL} key="ogurl" />
      <meta property="og:image" content={previewImage} key="ogimage" />
      <meta property="og:site_name" content={siteName} key="ogsitename" />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <title>{pageTitle}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${appleTouchIcon.src}`}
        key="apple-touch-icon"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${favicon32.src}`}
        key="favicon-32x32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${favicon16.src}`}
        key="favicon-16x16"
      />
      <link rel="manifest" href="./site.webmanifest" key="manifest" />
    </Head>
  );
}
