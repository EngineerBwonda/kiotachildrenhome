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

// Static metadata export for Contact page
export const metadata = {
  metadataBase: new URL("https://kiotafoundation.org"),
  title: {
    default: "Contact | Kiota Children's Home",
    template: "%s | Kiota Children's Home",
  },
  description:
    "Contact Kiota Children's Home. Reach out to us and make a difference in a child's life. Address, phone, email, and social links.",
  keywords: [
    "Kiota Children's Home",
    "contact",
    "address",
    "phone",
    "email",
    "children's home Kenya",
    "charity",
    "orphans",
    "support children",
    "Kenya",
  ],
  alternates: {
    canonical: "https://kiotafoundation.org/contact",
    languages: {
      "en-US": "https://kiotafoundation.org/en-US/contact",
      "sw-KE": "https://kiotafoundation.org/sw-KE/contact",
    },
  },
  openGraph: {
    title: "Contact | Kiota Children's Home",
    description:
      "Contact Kiota Children's Home. Reach out to us and make a difference in a child's life.",
    url: "https://kiotafoundation.org/contact",
    siteName: "Kiota Children's Home",
    images: [
      { url: "/location2.jpg" },
      { url: "/location.png" },
      { url: "/logo.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Kiota Children's Home",
    description:
      "Contact Kiota Children's Home. Reach out to us and make a difference in a child's life.",
    site: "@KiotaChildrensHome",
    creator: "@KiotaChildrensHome",
    images: ["/location2.jpg", "/location.png", "/logo.png"],
  },
};

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
