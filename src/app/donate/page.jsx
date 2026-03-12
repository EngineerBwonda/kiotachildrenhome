"use client";
import React from "react";
import NavbarB from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import FloatingButton from "../components/floatingButton";
import Head from "next/head";
import Donate from "../components/donate";
export default function DonatePage() {
  return (
    <>
      <Head>
        <title>Get Involved | Kiota Children's Home</title>
        <meta
          name="description"
          content="Join Kiota Children's Home and make a difference. Learn how to sponsor, volunteer, donate, or partner to help children in need."
        />
        <meta
          property="og:title"
          content="Get Involved | Kiota Children's Home"
        />
        <meta
          property="og:description"
          content="Join Kiota Children's Home and make a difference. Learn how to sponsor, volunteer, donate, or partner to help children in need."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/getinvolved" />
      </Head>
      <NavbarB />
      <Donate></Donate>

      <FloatingButton />
      <Footer />
    </>
  );
}
