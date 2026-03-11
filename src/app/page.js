import Body from "./components/body";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Vidplayerb from "./components/vidplayerb";
import FloatingButton from "./components/floatingButton";
import Navbar from "./components/navbar";
import Head from "next/head";

export default function Home() {
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
      <Navbar />
      <Carousel />
      <Body />
      <Vidplayerb />
      <FloatingButton />
      <Footer />
    </>
  );
}
