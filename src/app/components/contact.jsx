"use client";

import Image from "next/image";

import Map from "./map";
import styles from "../contact/contact.module.css";

export default function Contact() {
  return (
    <>
      <main>
        <section className={styles.header}>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <h1
                  className={`display-4 mb-4 ${styles.headerTitle} fw-bolder text-success`}
                  tabIndex="0"
                  aria-label="Welcome to Kiota Children's Home"
                >
                  WELCOME TO KIOTA CHILDREN'S HOME
                </h1>
                <p className={`${styles.headerText} fw-bolder`} tabIndex="0">
                  Reach out to us and make a difference in a child's life
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container text-center">
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-3">
              <div className="card h-100">
                <Image
                  src="/location2.jpg"
                  alt="Map showing 123 Karen Road, Nairobi, Kenya"
                  width={100}
                  height={250}
                  className="card-img-top mx-auto d-block p-3"
                />
                <div className="card-body">
                  <h5 className="card-title">Our Address</h5>
                  <p className="card-text">
                    Kangundo rd,Opposite Fastmart Kipawa
                  </p>
                </div>
              </div>
            </div>

            <div className="col mb-3">
              <div className="card h-100">
                <Image
                  src="/phone2.svg"
                  alt="Phone icon for +254 123 456 789"
                  width={150}
                  height={250}
                  className="card-img-top mx-auto d-block p-3"
                />
                <div className="card-body">
                  <h5 className="card-title">Call Us On</h5>
                  <p className="card-text">+254 714292148</p>
                </div>
              </div>
            </div>

            <div className="col mb-3">
              <div className="card h-100">
                <Image
                  src="/gmail2.jpg"
                  alt="Email icon for contact@kiota.com"
                  width={150}
                  height={250}
                  className="card-img-top mx-auto d-block p-3"
                />
                <div className="card-body">
                  <h5 className="card-title">Our Email</h5>
                  <p className="card-text">kiotafoundationkenya@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Removed duplicate header for clarity */}

        <section className="container h-3">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <a
                href="https://wa.me/0714292148"
                className={`${styles.socialCard} ${styles.whatsappCard}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <Image
                        src="/whatsapp.png"
                        alt="WhatsApp logo"
                        width={100}
                        height={150}
                        className={`card-img-top mx-auto d-block ${styles.cardImage}`}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">WhatsApp Us</h5>
                        <p className="card-text">
                          Chat with us on WhatsApp for quick responses to your
                          queries.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://facebook.com/kiotachildrenshome"
                className={`${styles.socialCard} ${styles.facebookCard}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <Image
                        src="/facebook.png"
                        alt="Facebook logo"
                        width={100}
                        height={150}
                        className={`card-img-top mx-auto d-block ${styles.cardImage}`}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Follow Us on Facebook</h5>
                        <p className="card-text">
                          Stay updated with our latest news and events.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="mailto:kiotafoundationkenya@gmail.com"
                className={`${styles.socialCard} ${styles.gmailCard}`}
              >
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <Image
                        src="/gmailpic.png"
                        alt="Gmail logo for contact@kiota.com"
                        width={100}
                        height={150}
                        className={`card-img-top mx-auto d-block ${styles.cardImage}`}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Email Us</h5>
                        <p className="card-text">
                          Send us an email for detailed inquiries and support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col">
              <form className="p-4 border rounded bg-light">
                {/* Name Field */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-end">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="container my-5">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-4 fw-bolder">Find Us Here</h2>
              <Map />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
