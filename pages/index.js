import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import EdinaPreview from "../components/pages/preview";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <Seo pageTitle="Preview" />
        <EdinaPreview />        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          Here's an example of a Netlify Form! When you fill this out, the
          submissions can be found in the Netlify Admin site.
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
