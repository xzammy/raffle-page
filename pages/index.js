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
        <div className="row">
          <div className="column">
            <h2>使用者列表</h2>
          </div>
          <div className="column">
            <App></App>
          </div>
        </div>
      </div>
      <section className={utilStyles.headingMd}></section>
    </Layout>
  );
}
