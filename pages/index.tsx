import Head from "next/head";
//import Main from "../components/elements/Main/Main";

import dynamic from "next/dynamic";

const DynamicMain = dynamic(() => import("../components/elements/Main/Main"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Shades of Light</title>
        <meta name="description" content="Shades of light" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicMain />
    </>
  );
}
