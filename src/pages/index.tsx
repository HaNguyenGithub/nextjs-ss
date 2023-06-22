import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Content1st from "@/components/home/Content1";
import Content2nd from "@/components/home/Content2";
import Content3rd from "@/components/home/Content3";
import Content4th from "@/components/home/Content4";
import Content5th from "@/components/home/Content5";
import Content6th from "@/components/home/Content6";
import Head from "next/head";
import React from "react";
export default function Home() {
  return (
    <>
       <Head>
        <title> SingSing - The pioneer in music Web3 platform for singing lovers</title>
      </Head>
        {/* body */}
        <Header/>
          {/* Content */}
          <Content1st/>
          <Content2nd/>
          <Content3rd/>
          <Content4th/>
          <Content5th/>
          <Content6th/>
          {/* Content */}
        <Footer/>
        {/* body */}
    </>
  );
}
