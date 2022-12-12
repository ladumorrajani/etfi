import Head from "next/head";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import BgAnimation from "../components/BgAnimation";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import Indices from "../components/Indices";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ETFI</title>
        <meta name="description" content="ETFI" />
      </Head>
      <Header />
      <Banner />
      <HowItWorks />
      <Indices />
      <Features />
      <BgAnimation />
      <Benefits />
      <Footer />
    </div>
  );
}
