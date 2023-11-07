import "@/styles/globals.css";
import Head from "next/head";
import Header from "../../components/Header/index";
import Footer from "../../components/footer/index";

export default function App({ Component, pageProps }) {
  return (
    <>

    
      <Head>
        <title>Victor | dev</title>
      </Head>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>


  );
}
