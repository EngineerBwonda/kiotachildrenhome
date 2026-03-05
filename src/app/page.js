import Body from "./components/body";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Vidplayerb from "./components/vidplayerb";
import FloatingButton from "./components/floatingButton";
import Navbar from "./components/navbar";

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
