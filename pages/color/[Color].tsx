import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const DynamicMain = dynamic(
  () => import("../../components/elements/Main/Main"),
  {
    ssr: false,
  }
);

const Color = () => {
  const router = useRouter();
  //const { Color } = router.query;

  return (
    <>
      <Head>
        <title>10 Shades of Light</title>
        <meta name="description" content="10 shades of light" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicMain {...router.query} />
    </>
  );
};

export default Color;
