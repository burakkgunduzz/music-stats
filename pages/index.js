import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Music Stats</title>
        <meta
          name="description"
          content="Find your best tracks and artists according to country!"
        />
      </Head>
      <main>
        <h1>MUSIC STATS</h1>
      </main>
    </div>
  );
}
