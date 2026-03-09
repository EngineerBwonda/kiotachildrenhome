"use client";
import React from "react";
import NavbarB from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import Map from "../components/map";
import Carousel from "../components/carousel";
import styles from "./contact.module.css";
import FloatingButton from "../components/floatingButton";
// Ensure this path is correct based on your project structure

export default function ContactPage() {
  return (
    <>
      <NavbarB />
      <Carousel />

      <div className={styles.header}>
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
      </div>

      <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-3">
            <div className="card h-100">
              <Image
                src="/location2.jpg"
                alt="Location Icon"
                width={100}
                height={250}
                className="card-img-top mx-auto d-block p-3"
              />
              <div className="card-body">
                <h5 className="card-title">Our Address</h5>
                <p className="card-text">123 Karen Road, Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          <div className="col mb-3">
            <div className="card h-100">
              <Image
                src="/phone2.svg"
                alt="Phone Icon"
                width={150}
                height={250}
                className="card-img-top mx-auto d-block p-3"
              />
              <div className="card-body">
                <h5 className="card-title">Call Us On</h5>
                <p className="card-text">+254 123 456 789</p>
              </div>
            </div>
          </div>

          <div className="col mb-3">
            <div className="card h-100">
              <Image
                src="/gmail2.jpg"
                alt="Email Icon"
                width={150}
                height={250}
                className="card-img-top mx-auto d-block p-3"
              />
              <div className="card-body">
                <h5 className="card-title">Our Email</h5>
                <p className="card-text">contact@kiota.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Removed duplicate header for clarity */}

      <div className="container h-3">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <a
              href="https://wa.me/1234567890"
              className={`${styles.socialCard} ${styles.whatsappCard}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src="/whatsapp.png"
                      alt="WhatsApp"
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
                      alt="Facebook"
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
              href="mailto:contact@kiota.com"
              className={`${styles.socialCard} ${styles.gmailCard}`}
            >
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <Image
                      src="/gmailpic.png"
                      alt="Email"
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
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-4 fw-bolder">Find Us Here</h2>
            <Map /> {/* Properly use the Map component */}
          </div>
        </div>
      </div>

      <FloatingButton></FloatingButton>

      <Footer />
    </>
  );
}
