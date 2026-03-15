import React from "react";
import NavbarB from "../components/navbar";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import Image from "next/image";
import FloatingButton from "../components/floatingButton";
import Head from "next/head";
import GetInvolved from "../components/getinvolved";

// Correct Next.js metadata export
export const metadata = {
  metadataBase: new URL("https://kiotafoundation.org"),
  title: {
    default: "Get Involved | Kiota Foundation",
    template: "%s | Kiota Foundation",
  },
  description:
    "Learn how to get involved with Kiota Children's Home. Sponsor, volunteer, donate, or partner to help children in need in Kenya.",
  keywords: [
    "Kiota Children's Home",
    "get involved",
    "sponsor",
    "volunteer",
    "donate",
    "partner",
    "children's home Kenya",
    "charity",
    "orphans",
    "support children",
    "Kenya",
  ],
  alternates: {
    canonical: "https://kiotafoundation.org/getinvolved",
    languages: {
      "en-US": "https://kiotafoundation.org/en-US/getinvolved",
      "sw-KE": "https://kiotafoundation.org/sw-KE/getinvolved",
    },
  },
  openGraph: {
    title: "Get Involved | Kiota Children's Home",
    description:
      "Learn how to get involved with Kiota Children's Home. Sponsor, volunteer, donate, or partner to help children in need in Kenya.",
    url: "https://kiotafoundation.org/getinvolved",
    siteName: "Kiota Children's Home",
    images: [
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

export default function GetInvolvedPage() {
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
      <Carousel />
      <GetInvolved></GetInvolved>

      <FloatingButton />
      <Footer />
    </>
  );
}
