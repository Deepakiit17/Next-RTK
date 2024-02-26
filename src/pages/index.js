import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Providers } from "@/redux/providers";
import AddUsers from "@/components/AddUsers";
import DisplayUsers from "@/components/DisplayUsers";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Providers>
          {children}
          <AddUsers />
          <DisplayUsers />
        </Providers>
      </main>
    </>
  );
}
