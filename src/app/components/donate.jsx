"use client";

import Image from "next/image";

export default function Donate() {
  return (
    <>
      <div
        className="position-relative"
        style={{
          backgroundImage: "url('/childA.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
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
              "linear-gradient(135deg, rgba(34, 139, 34, 0.85) 0%, rgba(56, 142, 60, 0.75) 50%, rgba(46, 125, 50, 0.85) 100%)",
            zIndex: 1,
          }}
        />

        <div
          className="container position-relative d-flex flex-column justify-content-center align-items-center text-center"
          style={{ zIndex: 2, minHeight: "70vh", padding: "2rem" }}
        >
          <div
            className="mb-4 px-4 py-2 rounded-pill"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="text-white fw-semibold fs-5">
              Every Child Deserves a Chance
            </span>
          </div>

          <h1
            className="display-2 fw-bolder text-white mb-4"
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              letterSpacing: "-0.02em",
            }}
          >
            Give Hope, Give Love, Give Life
          </h1>

          <p
            className="lead text-white mb-5 fs-3"
            style={{ maxWidth: "700px", lineHeight: "1.6" }}
          >
            Your generosity can transform a child's life. Join us in providing
            shelter, education, and love to children who need it most.
          </p>

          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <button
              className="btn btn-light btn-lg px-5 py-3 fw-bold"
              style={{
                borderRadius: "50px",
                color: "#388e3c",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
              onClick={() =>
                document
                  .getElementById("donate-options")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Donate Now ♥
            </button>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#e8f5e9" }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-12 mb-4">
              <h2 className="fw-bolder text-success display-5">
                Your Donation Makes a Difference
              </h2>
              <p className="text-muted fs-5">
                See how your contribution can help transform lives
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {[
              {
                amount: "KSh 500",
                impact: "Provides school supplies for one child",
                icon: "📚",
              },
              {
                amount: "KSh 2,000",
                impact: "Feeds a child for one month",
                icon: "🍚",
              },
              {
                amount: "KSh 5,000",
                impact: "Covers medical checkup & medicine",
                icon: "💊",
              },
              {
                amount: "KSh 10,000",
                impact: "Sponsors a child's education for a term",
                icon: "🎓",
              },
            ].map((item, index) => (
              <div key={index} className="col">
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "16px",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-8px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <div className="card-body text-center p-4">
                    <div className="fs-1 mb-3">{item.icon}</div>
                    <h3 className="fw-bolder text-success mb-2">
                      {item.amount}
                    </h3>
                    <p className="text-muted mb-0">{item.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation Options Section */}
      <div id="donate-options" className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="fw-bolder text-success display-4">Ways to Donate</h2>
            <p className="text-muted fs-5">
              Choose how you'd like to make a difference
            </p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {/* Bank Transfer Card */}
          <div className="col">
            <div
              className="card h-100 border-0 shadow-lg"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div
                className="card-header text-white text-center py-4"
                style={{
                  background:
                    "linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)",
                }}
              >
                <h3 className="fw-bolder mb-0">
                  <span className="me-2">🏦</span>Bank Transfer
                </h3>
                <p className="mb-0 mt-2 opacity-75">
                  Direct bank transfer to our account
                </p>
              </div>
              <div
                className="card-body p-4"
                style={{ backgroundColor: "#f8fdf8" }}
              >
                <div className="bg-white p-4 rounded-3 shadow-sm border">
                  <div className="row mb-3">
                    <div className="col-5 text-muted fw-semibold">
                      Bank Name:
                    </div>
                    <div className="col-7 fw-bold text-dark">Equity Bank</div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-5 text-muted fw-semibold">
                      Account Name:
                    </div>
                    <div className="col-7 fw-bold text-dark">
                      Kiota Foundation
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-5 text-muted fw-semibold">
                      Account Number:
                    </div>
                    <div className="col-7 fw-bold text-dark">
                      <span className="badge bg-success fs-6 p-2">
                        1440282479492
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-4 p-3 rounded-3"
                  style={{ backgroundColor: "#e8f5e9" }}
                >
                  {/* <p className="mb-0 text-dark small">
                            <strong>💡 Tip:</strong> After making a transfer, please
                            email the receipt to
                            <a
                              href="mailto:contact@kiota.com"
                              className="text-success fw-bold"
                            >
                              {" "}
                              contact@kiota.com
                            </a>
                            for acknowledgment and tax deduction purposes.
                          </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* M-Pesa Card */}
          <div className="col">
            <div
              className="card h-100 border-0 shadow-lg"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <div
                className="card-header text-white text-center py-4"
                style={{
                  background:
                    "linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)",
                }}
              >
                <h3 className="fw-bolder mb-0">
                  <span className="me-2">📱</span>M-Pesa
                </h3>
                <p className="mb-0 mt-2 opacity-75">
                  Quick and easy mobile money transfer
                </p>
              </div>
              <div
                className="card-body p-4"
                style={{ backgroundColor: "#faf4fc" }}
              >
                <div className="bg-white p-4 rounded-3 shadow-sm border">
                  <div className="text-center mb-4">
                    <div className="mb-3">
                      <span className="badge bg-success fs-4 px-4 py-2">
                        TILL NUMBER: 479492
                      </span>
                    </div>
                    <p className="text-muted mb-0">Paybill Number</p>
                  </div>

                  <hr className="my-4" />

                  <h5 className="fw-bold text-dark mb-3">
                    How to Donate via M-Pesa:
                  </h5>
                  <ol className="ps-3">
                    <li className="mb-2">
                      Go to <strong>M-Pesa</strong> on your phone
                    </li>
                    <li className="mb-2">
                      Select <strong>Lipa na M-Pesa</strong>
                    </li>
                    <li className="mb-2">
                      Choose <strong>Paybill</strong>
                    </li>
                    <li className="mb-2">
                      Enter Business Number: <strong>247247</strong>
                    </li>
                    <li className="mb-2">
                      Enter Account Number: <strong>479492</strong>
                    </li>
                    <li className="mb-2">Enter amount and confirm</li>
                  </ol>
                </div>

                <div
                  className="mt-4 p-3 rounded-3"
                  style={{ backgroundColor: "#f3e5f5" }}
                >
                  <p className="mb-0 text-dark small">
                    <strong>💡 Instant Donation:</strong> M-Pesa donations are
                    processed instantly. You'll receive an SMS confirmation from
                    Safaricom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emotional Story Section */}
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#1b5e20" }}
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 g-5 align-items-center">
            <div className="col">
              <div
                className="position-relative rounded-4 overflow-hidden shadow"
                style={{
                  aspectRatio: "4 / 3",
                  maxHeight: "450px",
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
                />
              </div>
            </div>

            <div className="col text-white">
              <h2 className="fw-bolder mb-4 display-5">Every Story Matters</h2>
              <p
                className="fs-5 mb-4"
                style={{ lineHeight: "1.8", opacity: 0.95 }}
              >
                When we welcomed <strong>Rachael</strong> as our first child in
                2005, we knew we were starting something meaningful. Today, over
                100 children call Makimei their home.
              </p>
              <p
                className="fs-5 mb-4"
                style={{ lineHeight: "1.8", opacity: 0.95 }}
              >
                Your donation doesn't just provide for their basic needs—it
                gives these children the gift of <strong>education</strong>,{" "}
                <strong>healthcare</strong>, and most importantly,{" "}
                <strong>unconditional love</strong>.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <div className="d-flex align-items-center">
                  <span className="fs-1 me-3">❤️</span>
                  <div>
                    <div className="fw-bold fs-4">100+</div>
                    <div className="opacity-75">Children Helped</div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="fs-1 me-3">🎓</span>
                  <div>
                    <div className="fw-bold fs-4">95%</div>
                    <div className="opacity-75">In School</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact for Corporate/Large Donations */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="card border-0 shadow-lg"
              style={{
                borderRadius: "20px",
                background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
              }}
            >
              <div className="card-body p-5 text-center">
                <h2 className="fw-bolder text-success mb-3">
                  Want to Make a Larger Impact?
                </h2>
                <p className="fs-5 text-muted mb-4">
                  For corporate partnerships, sponsorship programs, or large
                  donations, we'd love to hear from you.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <a
                    href="tel:+254 714 292 148"
                    className="btn btn-success btn-lg px-4 py-2"
                    style={{ borderRadius: "50px" }}
                  >
                    📞 Call: +254 714 292 148
                  </a>
                  <a
                    href="mailto:contact@kiota.com"
                    className="btn btn-outline-success btn-lg px-4 py-2"
                    style={{ borderRadius: "50px" }}
                  >
                    ✉️ Email: Kiotafoundationkenya@gmail.com
                  </a>
                  <a
                    href="https://wa.me/+254714292148"
                    className="btn btn-success btn-lg px-4 py-2"
                    style={{ borderRadius: "50px", backgroundColor: "#25D366" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Section */}
      <div className="container py-5 text-center mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h2 className="fw-bolder text-success mb-4">
              Thank You for Your Generosity! 🙏
            </h2>
            <p
              className="fs-5 text-muted"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Your support means the world to our children. Every contribution,
              no matter the size, helps us continue our mission of providing a
              loving home for children in need. Together, we can build a
              brighter future for these young minds.
            </p>
            <div className="mt-4">
              <span className="fs-1">❤️</span>
              <span className="fs-1 mx-2">🌱</span>
              <span className="fs-1">✨</span>
              <span className="fs-1 mx-2">🏠</span>
              <span className="fs-1">💚</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
