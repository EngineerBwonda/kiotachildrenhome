import React from "react";
import NavbarB from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import FloatingButton from "../components/floatingButton";
import Head from "next/head";
import Donate from "../components/donate";

// Correct Next.js metadata export
export const metadata = {
  metadataBase: new URL("https://kiotafoundation.org"),
  title: {
    default: "Donate | Kiota Children's Home",
    template: "%s | Kiota Children's Home",
  },
  description:
    "Support Kiota Children's Home by donating. Your contribution helps provide shelter, food, education, and care for children in Kenya.",
  keywords: [
    "Kiota Children's Home",
    "donate",
    "charity",
    "orphans",
    "support children",
    "Kenya",
    "foundation",
    "help",
    "contribution",
    "children's home Kenya",
  ],
  alternates: {
    canonical: "https://kiotafoundation.org/donate",
    languages: {
      "en-US": "https://kiotafoundation.org/en-US/donate",
      "sw-KE": "https://kiotafoundation.org/sw-KE/donate",
    },
  },
  openGraph: {
    title: "Donate | Kiota Children's Home",
    description:
      "Support Kiota Children's Home by donating. Your contribution helps provide shelter, food, education, and care for children in Kenya.",
    url: "https://kiotafoundation.org/donate",
    siteName: "Kiota Children's Home",
    images: [
      { url: "/donate.png" },
      { url: "/poster1.jpg" },
      { url: "/poster2.jpg" },
      { url: "/poster3.jpg" },
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
    title: "Gallery | Kiota Children's Home",
    description:
      "See the lives changed at Kiota Children's Home. Our gallery showcases the children, staff, and supporters who make our mission possible.",
    site: "@KiotaChildrensHome",
    creator: "@KiotaChildrensHome",
    images: [
      "https://kiotafoundation.org/images/gallery-cover.jpg",
      "https://kiotafoundation.org/images/children-smiling.jpg",
    ],
  },
};
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
