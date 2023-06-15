import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Content_6 from "@/components/home/Content6";
import Head from "next/head";
import React from "react";
export default function Home() {
  return (
    <>
       <Head>
        <title> SingSing - The pioneer in music Web3 platform for singing lovers</title>
      </Head>

        <Header/>
          {/* Content */}
        <Content_6/>
          {/* Content */}
        <Footer/>
    </>
  );
}
