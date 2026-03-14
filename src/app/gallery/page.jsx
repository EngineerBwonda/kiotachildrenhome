import React from "react";
import NavbarB from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Image from "next/image";
import Player from "../components/vidplayer";
import Playerb from "../components/vidplayerb";
import FloatingButton from "../components/floatingButton";
import Head from "next/head";
import Gallery from "../components/gallery";

// Static metadata export in a layout or page:
// Correct Next.js metadata export
export const metadata = {
  metadataBase: new URL("https://kiotafoundation.org"),
  title: {
    default: "Gallery | Kiota Children's Home",
    template: "%s | Kiota Children's Home",
  },
  description:
    "Explore our gallery and see the impact Kiota Children's Home is making for children in Kenya. View photos and videos of our community, events, and daily life.",
  keywords: [
    "Kiota Children's Home",
    "children's home Kenya",
    "gallery",
    "kiota foundation",
    "charity",
    "orphans",
    "community",
    "photos",
    "videos",
    "support children",
    "donate",
    "volunteer",
    "Kenya",
    "foundation",
    "events",
    "impact",
  ],
  alternates: {
    canonical: "https://kiotafoundation.org/gallery",
    languages: {
      "en-US": "https://kiotafoundation.org/en-US/gallery",
      "sw-KE": "https://kiotafoundation.org/sw-KE/gallery",
    },
  },
  openGraph: {
    title: "Gallery | Kiota Children's Home",
    description:
      "See the lives changed at Kiota Children's Home. Our gallery showcases the children, staff, and supporters who make our mission possible.",
    url: "https://kiotafoundation.org/gallery",
    siteName: "Kiota Children's Home",
    images: [
      { url: "https://kiotafoundation.org/images/gallery-cover.jpg" },
      { url: "https://kiotafoundation.org/images/children-smiling.jpg" },
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

export default function GalleryPage() {
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
      <Player />
      <Gallery></Gallery>

      <FloatingButton></FloatingButton>

      <Playerb />

      <Footer />
    </>
  );
}
