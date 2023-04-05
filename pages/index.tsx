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

      <div className="overlay bg-[#2e2f2f]/60 w-full h-screen backdrop-blur-sm text-center flex flex-col align-middle justify-center ">
        <main className={styles.main + " bg-[whitesmoke] w-[30rem] h-[80%] mx-auto rounded-[1rem] p-1"}>
          <section>
            <h1 className={IBM.className + " text-3xl underline m-[2rem]"}>
              School Registration Form
            </h1>
          </section>

          <section className="w-full h-[85%] overflow-y-auto">{registeringForm()}</section>
        </main>
      </div>
    </>
  );
}
