import React from "react";
import Footer from "../components/footer";
import Image from "next/image";
import Head from "next/head";
import Map from "../components/map";
import NavbarB from "../components/navbar";
import Carousel from "../components/carousel";
import FloatingButton from "../components/floatingButton";
import styles from "./style.module.css";
import Link from "next/link";
import AboutUsPage from "../components/aboutUs";

// Static metadata export for About page
export const metadata = {
  metadataBase: new URL("https://www.kiotafoundation.org"),
  title: {
    default: "About Us | Kiota Foundation",
    template: "%s | Kiota Children's Home",
  },
  description:
    "Learn about Kiota Children's Home, our vision, mission, and the team dedicated to supporting children in Kenya.",
  keywords: [
    "Kiota Children's Home",
    "about",
    "vision",
    "kiota foundation",
    "mission",
    "team",
    "children's home Kenya",
    "charity",
    "orphans",
    "support children",
    "Kenya",
  ],
  alternates: {
    canonical: "https://www.kiotafoundation.org/about",
    languages: {
      "en-US": "https://www.kiotafoundation.org/en-US/about",
      "sw-KE": "https://www.kiotafoundation.org/sw-KE/about",
    },
  },
  openGraph: {
    title: "About Us | Kiota Children's Home",
    description:
      "Learn about Kiota Children's Home, our vision, mission, and the team dedicated to supporting children in Kenya.",
    url: "https://www.kiotafoundation.org/about",
    siteName: "Kiota Children's Home",
    images: [
      { url: "/vision.jpeg" },
      { url: "/mission2.jpeg" },
      { url: "/aim2.svg" },
      { url: "/apostle dorcas.jpeg" },
      { url: "/deputy director c.png" },
      { url: "/rose.jpeg" },
      { url: "/caretaker.jpeg" },
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
    title: "About Us | Kiota Children's Home",
    description:
      "Learn about Kiota Children's Home, our vision, mission, and the team dedicated to supporting children in Kenya.",
    site: "@KiotaChildrensHome",
    creator: "@KiotaChildrensHome",
    images: [
      "/vision.jpeg",
      "/mission2.jpeg",
      "/aim2.svg",
      "/apostle dorcas.jpeg",
      "/deputy director c.png",
      "/rose.jpeg",
      "/caretaker.jpeg",
    ],
  },
};

export default function About() {
  return (
    <>
      <Head>
        <title>About | Kiota Children's Home</title>
        <meta
          name="description"
          content="Learn more about Kiota Children's Home, our mission, vision, and the impact we make in the community."
        />
        <meta property="og:title" content="About | Kiota Children's Home" />
        <meta
          property="og:description"
          content="Learn more about Kiota Children's Home, our mission, vision, and the impact we make in the community."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.kiotafoundation.org/about"
        />
      </Head>
      <NavbarB></NavbarB>
      <Carousel></Carousel>
      <AboutUsPage></AboutUsPage>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4">Find Us Here</h2>
            <Map />
          </div>
        </div>
      </div>
      <FloatingButton></FloatingButton>
      <Footer></Footer>
    </>
  );
}
