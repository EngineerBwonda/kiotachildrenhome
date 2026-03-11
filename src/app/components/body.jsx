"use client";
import Image from "next/image";
import Link from "next/link";
import style from "../homepage/homepage.module.css";
import Head from "next/head";

export default function Body() {
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
      {/* Welcome Section */}
      <div className={`container-fluid ${style.welcomeSection}`}>
        <div className="container mt-0">
          <h1 className={`text-center mb-4 ${style.bb}`}>
            Welcome to Kiota Children`s Home
          </h1>
          <p className={style.text}>
            Kiota Children&apos;s Home is dedicated to providing a safe and
            nurturing environment for children in need. Our mission is to ensure
            that every child has access to education, healthcare, and emotional
            support.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container-fluid">
        <div className={`container text-center ${style.servicesSection}`}>
          <h2 className={style.sectionTitle}>Our Core Mission</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Education Card */}
            <div className="col">
              <div className={`card ${style.card}`}>
                <div className={style.cardImageContainer}>
                  <Image
                    src="/childC.jpg"
                    alt="Education"
                    fill
                    className={style.cardImage}
                  />
                </div>
                <div className={style.cardBody}>
                  <h5 className={style.cardTitle}>Education</h5>
                  <p className={style.cardText}>
                    We are committed to providing a high-quality education that
                    empowers children and adolescents to pursue their dreams and
                    realize their full potential as confident, independent
                    adults.
                  </p>
                </div>
              </div>
            </div>

            {/* Rescue Card */}
            <div className="col">
              <div className={`card ${style.card}`}>
                <div className={style.cardImageContainer}>
                  <Image
                    src="/childA.jpg"
                    alt="Rescue"
                    fill
                    className={style.cardImage}
                  />
                </div>
                <div className={style.cardBody}>
                  <h5 className={style.cardTitle}>Rescue</h5>
                  <p className={style.cardText}>
                    We believe that all children deserve to be raised in a safe
                    and loving environment and treated with the respect and care
                    they deserve.
                  </p>
                </div>
              </div>
            </div>

            {/* Health Care Card */}
            <div className="col">
              <div className={`card ${style.card}`}>
                <div className={style.cardImageContainer}>
                  <Image
                    src="/childB.jpg"
                    alt="Health Care"
                    fill
                    className={style.cardImage}
                  />
                </div>
                <div className={style.cardBody}>
                  <h5 className={style.cardTitle}>Health Care</h5>
                  <p className={style.cardText}>
                    Our children&apos;s home is dedicated to providing a
                    nurturing environment where every child receives quality
                    healthcare, ensuring their physical and mental well-being to
                    thrive and reach their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Section */}
      <div className={`container-fluid ${style.volunteerSection}`}>
        <div className="container">
          <div className={`row ${style.volunteerContent}`}>
            <div className={`col-12 col-md-5 ${style.volunteerImageContainer}`}>
              <Image
                src="/carolC.jpeg"
                alt="Volunteer with children"
                width={400}
                height={350}
                className={style.volunteerImage}
              />
            </div>
            <div className={`col-12 col-md-6 ${style.volunteerText}`}>
              <h5 className={style.volunteerTitle}>Become a Volunteer</h5>
              <p className={style.volunteerDescription}>
                Join us in making a difference in the lives of these children.
                Your support can help us provide better facilities, educational
                resources, and a brighter future for them.
              </p>
              <Link href="/getinvolved" className={style.ctaButton}>
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className={`container-fluid ${style.aboutSection}`}>
        <div className="container text-center">
          <h2 className={style.aboutTitle}>Kiota Children&apos;s Home</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <p className={style.aboutText}>
                Kiota Children&apos;s Home is dedicated to providing a safe and
                nurturing environment for children in need. Our mission is to
                ensure that every child has access to education, healthcare, and
                emotional support.
              </p>
              <p className={style.aboutText}>
                Join us in making a difference in the lives of these children.
                Your support can help us provide better facilities, educational
                resources, and a brighter future for them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className={`container-fluid ${style.gallerySection}`}>
        <div className="container">
          <h2 className={style.galleryTitle}>Our Campaign</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className={`card ${style.galleryCard}`}>
                <Image
                  src="/poster1.jpg"
                  alt="Gallery Image 1"
                  fill
                  className={style.galleryImage}
                />
              </div>
            </div>
            <div className="col">
              <div className={`card ${style.galleryCard}`}>
                <Image
                  src="/poster2.jpg"
                  alt="Gallery Image 2"
                  fill
                  className={style.galleryImage}
                />
              </div>
            </div>
            <div className="col">
              <div className={`card ${style.galleryCard}`}>
                <Image
                  src="/poster3.jpg"
                  alt="Gallery Image 3"
                  fill
                  className={style.galleryImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics Section */}
      <div className={`container-fluid ${style.statsSection}`}>
        <div className="container text-center">
          <h2 className={style.statsTitle}>Our Impact</h2>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            <div className="col">
              <div className={style.statCard}>
                <h3 className={style.statNumber}>150+</h3>
                <p className={style.statLabel}>Children Sheltered</p>
              </div>
            </div>
            <div className="col">
              <div className={style.statCard}>
                <h3 className={style.statNumber}>500+</h3>
                <p className={style.statLabel}>Meals Provided Monthly</p>
              </div>
            </div>
            <div className="col">
              <div className={style.statCard}>
                <h3 className={style.statNumber}>100%</h3>
                <p className={style.statLabel}>School Enrollment</p>
              </div>
            </div>
            <div className="col">
              <div className={style.statCard}>
                <h3 className={style.statNumber}>50+</h3>
                <p className={style.statLabel}>Volunteers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Heartwarming Story Section */}
      <div className={`container-fluid ${style.storySection}`}>
        <div className="container">
          <div className={`row ${style.storyContent}`}>
            <div className={`col-12 col-md-5 ${style.storyImageContainer}`}>
              <Image
                src="/g4.jpeg"
                alt="Child's success story"
                width={400}
                height={350}
                className={style.storyImage}
              />
            </div>
            <div className={`col-12 col-md-6 ${style.storyText}`}>
              <h5 className={style.storyTitle}>A Story of Hope</h5>
              <p className={style.storyDescription}>
                "When Emmanuel arrived at Kiota Children's Home, he had never
                attended school. Today, he's top of his class and dreams of
                becoming a doctor. Your support makes stories like his
                possible."
              </p>
              <p className={style.storyCredit}>
                — Apostle Dorcas Wanjiru,Director
              </p>
              <Link href="/about" className={style.ctaButton}>
                Read More Stories
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Urgent Needs Section */}
      <div className={`container-fluid ${style.needsSection}`}>
        <div className="container text-center">
          <h2 className={style.needsTitle}>Urgent Needs</h2>
          <p className={style.needsSubtitle}>
            Your donation today can help us provide these essential items for
            our children
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className={style.needCard}>
                <div className={style.needIcon}>🍚</div>
                <h5 className={style.needTitle}>Food Supplies</h5>
                <p className={style.needDescription}>
                  Nutritious meals for growing children
                </p>
                <Link href="/donate" className={style.needButton}>
                  Donate Now
                </Link>
              </div>
            </div>
            <div className="col">
              <div className={style.needCard}>
                <div className={style.needIcon}>📚</div>
                <h5 className={style.needTitle}>Educational Materials</h5>
                <p className={style.needDescription}>
                  Books, uniforms, and school supplies
                </p>
                <Link href="/donate" className={style.needButton}>
                  Donate Now
                </Link>
              </div>
            </div>
            <div className="col">
              <div className={style.needCard}>
                <div className={style.needIcon}>💊</div>
                <h5 className={style.needTitle}>Medical Care</h5>
                <p className={style.needDescription}>
                  Healthcare and medicine for all children
                </p>
                <Link href="/donate" className={style.needButton}>
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor a Child Section */}
      <div className={`container-fluid ${style.sponsorSection}`}>
        <div className="container text-center">
          <h2 className={style.sponsorTitle}>Sponsor a Child</h2>
          <p className={style.sponsorDescription}>
            For just $50 a month, you can provide a child with food, education,
            and love. Become their hero today.
          </p>
          <Link href="/getinvolved" className={style.sponsorButton}>
            Start Sponsoring
          </Link>
        </div>
      </div>
    </>
  );
}
