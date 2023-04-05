import Head from "next/head";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import styles from "@/styles/Home.module.css";

import registeringForm from "./components/Form";

const IBM = IBM_Plex_Sans_Thai({
  weight: "300",
  subsets: ["latin", "thai"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>School Registration Form</title>
        <meta
          name="description"
          content="just a form that make with 'React Final Form' + 'YUP'"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section>
          <h1 className={IBM.className + " text-3xl underline"}>
            School Registration Form
          </h1>
        </section>

        <section>{registeringForm()}</section>
      </main>
    </>
  );
}
