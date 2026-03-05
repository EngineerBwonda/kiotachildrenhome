import React from "react";
import NavbarB from "../components/navbar";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import Image from "next/image";
import FloatingButton from "../components/floatingButton";

export default function GetInvolvedPage() {
  return (
    <>
      <NavbarB />
      <Carousel />

      {/* Hero Section - Emotional and Impactful */}
      <div
        className="position-relative"
        style={{
          backgroundImage: "url('/childC.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(34, 139, 34, 0.85), rgba(0, 80, 0, 0.9))",
            zIndex: 1,
          }}
        ></div>
        <div
          className="container position-relative d-flex flex-column justify-content-center align-items-center text-center text-white"
          style={{ zIndex: 2, minHeight: "400px", padding: "2rem" }}
        >
          <h1
            className="display-3 fw-bold mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
          >
            Get Involved with Kiota Children&apos;s Home
          </h1>
          <p className="lead fs-4 mb-4" style={{ maxWidth: "700px" }}>
            Join us in making a difference in the lives of children in need.
            Your support can help us provide better facilities, educational
            resources, and a brighter future for them.
          </p>
          <p className="fs-5 fw-semibold">
            Together, we can give these children the love and care they deserve.
          </p>
        </div>
      </div>

      {/* Clear Call to Action Section */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <h2 className="text-center text-success fw-bold display-5 mb-2">
            Ways to Make a Difference
          </h2>
          <p className="text-center text-muted fs-5 mb-5">
            Choose how you&apos;d like to contribute and change a child&apos;s
            life today
          </p>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {/* Sponsor a Child */}
            <div className="col">
              <div
                className="card h-100 text-center p-4 border-0 shadow-sm"
                style={{ borderRadius: "16px", transition: "transform 0.3s" }}
              >
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "#e8f5e9",
                  }}
                >
                  <span style={{ fontSize: "36px" }}>👶</span>
                </div>
                <h4 className="text-success fw-bold mb-3">Sponsor a Child</h4>
                <p className="text-muted mb-4">
                  Provide monthly support for a child&apos;s education, food,
                  and care.
                </p>
                <button className="btn btn-success btn-lg rounded-pill">
                  Sponsor Now
                </button>
              </div>
            </div>

            {/* Volunteer Today */}
            <div className="col">
              <div
                className="card h-100 text-center p-4 border-0 shadow-sm"
                style={{ borderRadius: "16px", transition: "transform 0.3s" }}
              >
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "#e3f2fd",
                  }}
                >
                  <span style={{ fontSize: "36px" }}>🤝</span>
                </div>
                <h4 className="text-primary fw-bold mb-3">Volunteer Today</h4>
                <p className="text-muted mb-4">
                  Share your time and skills to brighten a child&apos;s day.
                </p>
                <button className="btn btn-primary btn-lg rounded-pill">
                  Volunteer
                </button>
              </div>
            </div>

            {/* Make a Donation */}
            <div className="col">
              <div
                className="card h-100 text-center p-4 border-0 shadow-sm"
                style={{ borderRadius: "16px", transition: "transform 0.3s" }}
              >
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "#fff3e0",
                  }}
                >
                  <span style={{ fontSize: "36px" }}>💝</span>
                </div>
                <h4 className="text-warning fw-bold mb-3">Make a Donation</h4>
                <p className="text-muted mb-4">
                  Every contribution, big or small, helps provide for our
                  children.
                </p>
                <button className="btn btn-warning btn-lg rounded-pill text-white">
                  Donate
                </button>
              </div>
            </div>

            {/* Partner With Us */}
            <div className="col">
              <div
                className="card h-100 text-center p-4 border-0 shadow-sm"
                style={{ borderRadius: "16px", transition: "transform 0.3s" }}
              >
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: "#fce4ec",
                  }}
                >
                  <span style={{ fontSize: "36px" }}>🤗</span>
                </div>
                <h4 className="fw-bold mb-3" style={{ color: "#e91e63" }}>
                  Partner With Us
                </h4>
                <p className="text-muted mb-4">
                  Collaborate with us to create lasting impact for vulnerable
                  children.
                </p>
                <button
                  className="btn btn-lg rounded-pill"
                  style={{ backgroundColor: "#e91e63", color: "white" }}
                >
                  Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real Stories Section - Because of You */}
      <div className="container-fluid py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-success fw-bold display-4">Because of You</h2>
            <p className="text-muted fs-5">
              Real stories of transformation, hope, and love
            </p>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Child's Transformation Story */}
            <div className="col">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: "16px", overflow: "hidden" }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Image
                    src="/childA.jpg"
                    alt="Child transformation"
                    width={400}
                    height={300}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body p-4">
                  <div
                    className="d-inline-block px-3 py-1 rounded-pill mb-3"
                    style={{
                      backgroundColor: "#e8f5e9",
                      color: "#2e7d32",
                      fontSize: "14px",
                    }}
                  >
                    Child&apos;s Story
                  </div>
                  <h5 className="card-title fw-bold mb-3">A Journey of Hope</h5>
                  <p className="card-text text-muted">
                    "When I came to Kiota, I didn't have anyone. Now I have a
                    family, go to school, and dream of becoming a doctor. Thank
                    you for giving me a chance at life&quot;"u — A grateful
                    child (name protected)
                  </p>
                </div>
              </div>
            </div>

            {/* Volunteer Testimonial */}
            <div className="col">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: "16px", overflow: "hidden" }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Image
                    src="/childB.jpg"
                    alt="Volunteer"
                    width={400}
                    height={300}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body p-4">
                  <div
                    className="d-inline-block px-3 py-1 rounded-pill mb-3"
                    style={{
                      backgroundColor: "#e3f2fd",
                      color: "#1565c0",
                      fontSize: "14px",
                    }}
                  >
                    Volunteer Voice
                  </div>
                  <h5 className="card-title fw-bold mb-3">
                    Volunteering Changed My Life
                  </h5>
                  <p className="card-text text-muted">
                    "Spending time with these children has been the most
                    rewarding experience of my life. Their smiles and hugs
                    remind me what truly matters. I've found my purpose here." —
                    Sarah M., Volunteer
                  </p>
                </div>
              </div>
            </div>

            {/* Sponsor Quote */}
            <div className="col">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: "16px", overflow: "hidden" }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Image
                    src="/childC.jpg"
                    alt="Sponsor"
                    width={400}
                    height={300}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body p-4">
                  <div
                    className="d-inline-block px-3 py-1 rounded-pill mb-3"
                    style={{
                      backgroundColor: "#fff3e0",
                      color: "#e65100",
                      fontSize: "14px",
                    }}
                  >
                    Sponsor&apos;s Heart
                  </div>
                  <h5 className="card-title fw-bold mb-3">A Sponsor's Joy</h5>
                  <p className="card-text text-muted">
                    "Sponsoring David has been a blessing beyond words. Watching
                    him grow, excel in school, and thrive brings me immeasurable
                    joy. These children just need someone to believe in them." —
                    James K., Sponsor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Events Section */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#e8f5e9" }}
      >
        <div className="container">
          <h2 className="text-center text-success fw-bold display-4 mb-5">
            Our Events
          </h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Thanksgiving */}
            <div className="col">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: "16px", overflow: "hidden" }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Image
                    src="/childA.jpg"
                    alt="Thanksgiving"
                    width={400}
                    height={300}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h5 className="card-title text-success fw-bold fs-4 mb-3">
                    Thanksgiving Celebration
                  </h5>
                  <p className="card-text text-muted mb-4">
                    Join us as we celebrate gratitude and togetherness with our
                    children, volunteers, and supporters.
                  </p>
                  <button className="btn btn-success rounded-pill px-4">
                    Support Event
                  </button>
                </div>
              </div>
            </div>

            {/* Graduation */}
            <div className="col">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: "16px", overflow: "hidden" }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Image
                    src="/childB.jpg"
                    alt="Graduation"
                    width={400}
                    height={300}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h5 className="card-title text-success fw-bold fs-4 mb-3">
                    Annual Graduation
                  </h5>
                  <p className="card-text text-muted mb-4">
                    Celebrating the academic achievements of our brilliant
                    children as they take their next big steps.
                  </p>
                  <button className="btn btn-success rounded-pill px-4">
                    Support Event
                  </button>
                </div>
              </div>
            </div>

            {/* Sports Day */}
            <div className="col">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: "16px", overflow: "hidden" }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Image
                    src="/childC.jpg"
                    alt="Sports Day"
                    width={400}
                    height={300}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h5 className="card-title text-success fw-bold fs-4 mb-3">
                    Sports Day
                  </h5>
                  <p className="card-text text-muted mb-4">
                    A day of fun, sports, and friendly competition that brings
                    out the best in our children.
                  </p>
                  <button className="btn btn-success rounded-pill px-4">
                    Support Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support a Child Section */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <h2 className="text-center text-success fw-bold display-4 mb-2">
            Support a Child
          </h2>
          <p className="text-center text-muted fs-5 mb-5">
            Your sponsorship can change a child&apos;s life forever
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* Child 1 */}
            <div className="col">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: "16px", overflow: "hidden" }}
              >
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <Image
                    src="/childA.jpg"
                    alt="Child"
                    width={400}
                    height={350}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">
                    Emmanuel, 8 years old
                  </h5>
                  <p className="text-muted mb-3">
                    Emmanuel loves reading and dreams of becoming an engineer.
                    He needs support for his education and basic needs.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">$50/month</span>
                    <button className="btn btn-success rounded-pill">
                      Sponsor Emmanuel
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Child 2 */}
            <div className="col">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: "16px", overflow: "hidden" }}
              >
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <Image
                    src="/childB.jpg"
                    alt="Child"
                    width={400}
                    height={350}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">
                    Grace, 6 years old
                  </h5>
                  <p className="text-muted mb-3">
                    Grace is a bright and curious girl who loves drawing. She
                    deserves a chance at education and a bright future.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">$50/month</span>
                    <button className="btn btn-success rounded-pill">
                      Sponsor Grace
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Child 3 */}
            <div className="col">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: "16px", overflow: "hidden" }}
              >
                <div style={{ height: "250px", overflow: "hidden" }}>
                  <Image
                    src="/childC.jpg"
                    alt="Child"
                    width={400}
                    height={350}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">
                    David, 10 years old
                  </h5>
                  <p className="text-muted mb-3">
                    David is a helpful and responsible young boy. He excels in
                    mathematics and wants to become a doctor someday.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success fw-bold">$50/month</span>
                    <button className="btn btn-success rounded-pill">
                      Sponsor David
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-outline-success btn-lg rounded-pill px-5">
              View All Children
            </button>
          </div>
        </div>
      </div>

      {/* Powerful Closing Section */}
      <div
        className="position-relative py-5"
        style={{
          backgroundImage: "url('/childA.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(34, 139, 34, 0.85), rgba(0, 80, 0, 0.95))",
            zIndex: 1,
          }}
        ></div>
        <div
          className="container position-relative d-flex flex-column justify-content-center align-items-center text-center text-white"
          style={{ zIndex: 2, minHeight: "300px", padding: "2rem" }}
        >
          <h2
            className="display-4 fw-bold mb-4"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
          >
            "You don&apos;t have to change the whole world.
            <br />
            Just one child&apos;s world&apos;s"
          </h2>
          <p className="fs-5 mb-4" style={{ maxWidth: "600px" }}>
            Every act of kindness, no matter how small, creates ripples of hope
            that last a lifetime.
          </p>
          <button className="btn btn-light btn-lg rounded-pill text-success px-5 fw-bold">
            Start Making a Difference Today
          </button>
        </div>
      </div>

      <FloatingButton />
      <Footer />
    </>
  );
}
