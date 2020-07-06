import Head from "next/head";
import { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import App from "../components/timerInput";
import UserList from "../components/userList";
import { names, SimpleList } from "../components/random";

export default function Home({ allPostsData }) {
  return (
    <>
      <div className={utilStyles.container}>
        <Head>
          <title> {siteTitle} </title>
        </Head>
        <h1>{siteTitle}</h1>
        <div className={utilStyles.row}>
          <div className={utilStyles.column}>
            <h2>使用者列表</h2>
            <SimpleList></SimpleList>
          </div>
          <div className={utilStyles.column}>
            <App></App>
          </div>
        </div>
      </div>
      <section className={utilStyles.headingMd}></section>
    </>
  );
}
