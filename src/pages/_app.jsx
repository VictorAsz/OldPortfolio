import "@/styles/globals.css";
import Head from "next/head";
import Header from "../../components/Header/index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Victor | dev</title>
      </Head>
      <Header></Header>
      <Component {...pageProps} />;
    </>
  );
}
