"use client";
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
export default function About() {
  const sections = [
    {
      title: "Our Vision",
      src: "/vision.jpeg",
      alt: "Children thriving in a safe, loving and nurturing environment",
      isCircle: true,
      text: "To be a leading children's home in Kenya, providing a safe, loving and nurturing environment for abandoned and orphaned children, ensuring they have access to education, healthcare, and opportunities for personal growth.",
    },
    {
      title: "Our Mission",
      src: "/mission2.jpeg",
      alt: "Happy children receiving care and love at our home",
      isCircle: false,
      text: "We provide a home for abandoned and orphaned children, ensuring a future where they are safe, loved and learning.",
    },
    {
      title: "Our Aim",
      src: "/aim2.svg",
      alt: "Supporting street children, orphans and vulnerable children",
      isCircle: false,
      text: "Supporting street children, orphans and vulnerable children through sheltering, feeding, mentoring, educating, clothing and providing medical care.",
    },
  ];

  const teamMembers = [
    {
      name: "Apostle Dorcas",
      role: "Director",
      src: "/apostle dorcas.jpeg",
      alt: "Apostle Dorcas - Director of the children's home",
    },
    {
      name: "Rebecca Ngumi",
      role: "Deputy Director",
      src: "/deputy director c.png",
      alt: "Rebecca Ngumi - Deputy Director",
    },
    {
      name: "Rose",
      role: "Teacher",
      src: "/rose.jpeg",
      alt: "Rose - Teacher at the children's home",
    },
    {
      name: "Antony",
      role: "Caretaker & Security",
      src: "/caretaker.jpeg",
      alt: "Antony - Caretaker and Security",
    },
  ];
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
        <meta property="og:url" content="https://yourdomain.com/about" />
      </Head>
      <NavbarB></NavbarB>
      <Carousel></Carousel>
      <div className="container ">
        <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
          <div className="col bg-light">
            <h2 className="text-center text-success mt-5 border-bottom">
              THE KIOTA CHILDREN&apos;s HOME STORY
            </h2>

            <p className="text-dark mt-3 fs-5  ">
              Makimei Children&apos;s Home was founded in response to the
              pressing need for assistance to orphans and vulnerable children.
            </p>
            <p className="text-dark fs-5">
              The home was established in 2005 by a group of dedicated
              individuals who recognized the challenges faced by children in
              need. Their vision was to create a safe and nurturing environment
              where these children could thrive.
            </p>

            <p className="text-dark fs-5">
              Our journey began when we welcomed our first child, Rachael, who
              is now a director of our home. Soon after, we had two children
              from the local community whose parents succumbed to the HIV/AID
              epidemic, and then a baby who was anonymously abandoned at our
              door.
            </p>

            <p className="text-dark fs-5">
              Today, we have over 100 children in our care all of whom call
              Makimei their home. We are driven by a commitment to replace
              suffering with love. With open hearts and a vision for our
              children&apos;s future, we provide a loving and stable home for
              all children who join the Makimei family circle.
            </p>
          </div>
          <div className="col ">
            {" "}
            <Image
              src="/carolB.jpeg"
              alt="Child A"
              width={200}
              height={300}
              className="card-img-top"
            />{" "}
            <Image
              src="/carolC.jpeg"
              alt="Child A"
              width={200}
              height={300}
              className="card-img-top"
            />{" "}
          </div>
        </div>
      </div>

      <div className={`container-fluid ${styles.storySection}`}>
        <div className="container">
          <div className={`row ${styles.storyContent}`}>
            <div className={`col-12 col-md-5 ${styles.storyImageContainer}`}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "420px",
                  borderRadius: "18px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(56,142,60,0.12)",
                }}
              >
                <Image
                  src="/apostle dorcas.jpeg"
                  alt="Child's success story"
                  fill
                  className={styles.storyImage}
                  style={{ objectFit: "cover", borderRadius: "18px" }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
            <div className={`col-12 col-md-6 ${styles.storyText}`}>
              <h5 className={styles.storyTitle}>Message From The Director</h5>
              <p className={styles.storyDescription}>
                "At Kiota Children's Home, every child is given the chance to
                dream, learn, and grow in a loving family. We believe that with
                care, guidance, and opportunity, each child can overcome their
                past and build a bright future. Thank you for being part of our
                journey and for helping us nurture tomorrow’s leaders."
              </p>
              <p className={styles.storyCredit}>
                — Apostle Dorcas Wanjiru,Director
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
          {sections.map((item, index) => (
            <div className="col mb-3" key={index}>
              <div className={`${styles.card} card h-100`}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={280}
                    height={380}
                    className={`${styles.image} ${item.isCircle ? styles.circle : ""}`}
                    style={{ objectFit: item.isCircle ? "cover" : "contain" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <div className="card-body">
                  <h5
                    className={`${styles.title} card-title text-success fw-bolder fs-1`}
                  >
                    {item.title}
                  </h5>
                  <p className="card-text fs-5">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-5">
        <div className="row row-cols-1 row-cols-lg-2 g-5 align-items-center">
          {/* Image Column – clean, balanced, and modern presentation */}
          <div className="col">
            <div
              className="position-relative rounded-4 overflow-hidden shadow"
              style={{
                aspectRatio: "4 / 5",
                maxHeight: "650px",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Image
                src="/childC.jpg"
                alt="Child at Kiota Children's Home"
                fill
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                sizes="(max-width: 992px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Values Column – warmer, more polished card with theme-matching icons */}
          <div className="col">
            <div
              style={{
                backgroundColor: "#e6f4ea",
                borderRadius: "20px",
                boxShadow: "0 12px 40px rgba(56, 142, 60, 0.15)",
                padding: "3rem 2.5rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(56, 142, 60, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(56, 142, 60, 0.15)";
              }}
            >
              <h2
                className="text-center text-success mb-4"
                style={{
                  fontWeight: "800",
                  fontSize: "2.75rem",
                  letterSpacing: "-0.025em",
                }}
              >
                Our Values
              </h2>

              <p
                className="text-dark text-center fs-5 mb-5"
                style={{
                  lineHeight: "1.75",
                  maxWidth: "520px",
                  margin: "0 auto",
                }}
              >
                At Kiota Children&apos;s Home, we are guided by core values that
                shape everything we do in caring for our children.
              </p>

              <ul className="list-unstyled mb-0" style={{ padding: 0 }}>
                {[
                  {
                    icon: "♡",
                    title: "Compassion",
                    desc: "We treat every child with love and empathy.",
                  },
                  {
                    icon: "⚖️",
                    title: "Integrity",
                    desc: "We uphold honesty and transparency in all we do.",
                  },
                  {
                    icon: "🙏",
                    title: "Respect",
                    desc: "We honor the dignity of each child and their background.",
                  },
                  {
                    icon: "🌱",
                    title: "Empowerment",
                    desc: "We provide opportunities for children to grow and thrive.",
                  },
                ].map((value, index) => (
                  <li key={index} className="d-flex mb-4">
                    <div
                      style={{
                        backgroundColor: "#388e3c",
                        color: "white",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    >
                      {value.icon}
                    </div>
                    <div className="ms-4 flex-grow-1">
                      <span
                        style={{
                          fontWeight: "700",
                          color: "#388e3c",
                          fontSize: "1.15rem",
                        }}
                      >
                        {value.title}
                      </span>
                      <span
                        className="text-dark"
                        style={{
                          marginLeft: "8px",
                          lineHeight: "1.7",
                          fontSize: "1.05rem",
                        }}
                      >
                        : {value.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center">
        <div className="row row-cols-1 row-cols-md-1 g-4 m-3">
          <div
            className="position-relative mb-4"
            style={{
              backgroundImage: "url('/childA.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "16px",
              minHeight: "250px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(34, 139, 34, 0.5)",
                zIndex: 1,
              }}
            ></div>
            <div
              className="position-relative d-flex flex-column justify-content-center align-items-center h-100"
              style={{ zIndex: 2, padding: "2rem" }}
            >
              <h2 className="text-white fw-bold display-4 text-shadow mb-3">
                Meet Our Dedicated Team
              </h2>
              <p
                className="text-white fs-5 text-shadow"
                style={{ maxWidth: "700px" }}
              >
                Our passionate team is committed to nurturing, protecting, and
                empowering every child at Kiota Children&apos;s Home. Together,
                we create a loving and supportive environment where children can
                thrive.
              </p>
            </div>
          </div>
        </div>

        <div className="container text-center py-5">
          <div className="row row-cols-1 row-cols-md-2 g-4 m-3">
            {teamMembers.map((member, index) => (
              <div className="col" key={index}>
                <div className={`${styles.card} card h-100`}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={member.src}
                      alt={member.alt}
                      width={360}
                      height={460}
                      className={styles.image}
                      style={{ objectFit: "fill" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="card-body text-center pt-4">
                    <h5 className={`${styles.role} text-success fw-bold`}>
                      {member.role}
                    </h5>
                    <h4 className={styles.name}>{member.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
