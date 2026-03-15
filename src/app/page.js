import Body from "./components/body";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Vidplayerb from "./components/vidplayerb";
import FloatingButton from "./components/floatingButton";
import Navbar from "./components/navbar";
// Static metadata export for Home page
export const metadata = {
  metadataBase: new URL("https://www.kiotafoundation.org"),
  title: {
    default: "Home | Kiota Children's Home",
    template: "%s | Kiota Children's Home",
  },
  description:
    "Kiota Children's Home in Kenya provides a safe, loving, and nurturing environment for abandoned and orphaned children. Learn more about our mission, vision, and how you can help.",
  keywords: [
    "Kiota Children's Home",
    "children's home Kenya",
    "charity",
    "orphans",
    "support children",
    "donate",
    "volunteer",
    "Kenya",
    "foundation",
    "mission",
    "vision",
  ],
  alternates: {
    canonical: "https://www.kiotafoundation.org/",
    languages: {
      "en-US": "https://www.kiotafoundation.org/en-US/",
      "sw-KE": "https://www.kiotafoundation.org/sw-KE/",
    },
  },
  openGraph: {
    title: "Home | Kiota Children's Home",
    description:
      "Kiota Children's Home in Kenya provides a safe, loving, and nurturing environment for abandoned and orphaned children.",
    url: "https://www.kiotafoundation.org/",
    siteName: "Kiota Children's Home",
    images: [{ url: "https://www.kiotafoundation.org/images/home-cover.jpg" }],
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
    title: "Home | Kiota Children's Home",
    description:
      "Kiota Children's Home in Kenya provides a safe, loving, and nurturing environment for abandoned and orphaned children.",
    site: "@KiotaChildrensHome",
    creator: "@KiotaChildrensHome",
    images: ["https://www.kiotafoundation.org/images/home-cover.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Body />
      <Vidplayerb />
      <FloatingButton />
      <Footer />
    </>
  );
}
