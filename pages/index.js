import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import App from "../components/timerInput";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title> {siteTitle} </title>{" "}
      </Head>
      <div className="container">
        <p>使用者列表</p>
        <App></App>
      </div>
      <section className={utilStyles.headingMd}></section>
    </Layout>
  );
}

