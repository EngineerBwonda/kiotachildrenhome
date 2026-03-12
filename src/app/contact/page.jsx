"use client";

import React from "react";
import NavbarB from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import Map from "../components/map";
import Carousel from "../components/carousel";
import styles from "./contact.module.css";
import FloatingButton from "../components/floatingButton";
import Head from "next/head";
import Contact from "../components/contact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Kiota Children's Home</title>
        <meta
          name="description"
          content="Contact Kiota Children's Home. Reach out to us and make a difference in a child's life. Address, phone, email, and social links."
        />
        <meta property="og:title" content="Contact | Kiota Children's Home" />
        <meta
          property="og:description"
          content="Contact Kiota Children's Home. Reach out to us and make a difference in a child's life."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta
          property="og:image"
          content="https://yourdomain.com/location2.jpg"
        />
      </Head>
      <header>
        <NavbarB />
        <Carousel />
      </header>

      <Contact></Contact>

      <FloatingButton />
      <Footer />
    </>
  );
}
