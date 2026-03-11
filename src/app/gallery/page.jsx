"use client";
import React from "react";
import NavbarB from "../components/navbar";
import Carousel from "../components/carousel";
import Footer from "../components/footer";
import Image from "next/image";
import Player from "../components/vidplayer";
import Playerb from "../components/vidplayerb";
import FloatingButton from "../components/floatingButton";
import Head from "next/head";

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

      <div className="container text-center">
        <div className="row">
          <div className="col display-4 m-4 text-success border-bottom fw-bold">
            WELCOME TO KIOTA CHILDRENS HOME GALLERY
          </div>
        </div>
      </div>

      <Player />

      <div className="container text-center bg-gradient">
        <div className="row row-cols-1 row-cols-md-3 g-2">
          <div className="col">
            <div className="card">
              <Image
                src="/g1.jpeg"
                alt="Child A"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/g2.jpeg"
                alt="Child B"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/g3.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Image
                src="/kiotapic2.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Image
                src="/childC.jpg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          {/* <div className="col">
            <div className="card">
              <Image
                src="/childC.jpg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div> */}
          <div className="col">
            <div className="card">
              <Image
                src="/g4.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/g5.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/g6.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/g7.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/childC.jpg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Image
                src="/childA.jpg"
                alt="Child "
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          {/* <div className="col">
            <div className="card">
              <Image
                src="/childC.jpg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div> */}

          <div className="col">
            <div className="card">
              <Image
                src="/childB.jpg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Image
                src="/childA.jpg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
      </div>

      <FloatingButton></FloatingButton>

      <Playerb />

      <Footer />
    </>
  );
}
