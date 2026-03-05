"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./navbarb.module.css";

export default function Navbar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    //   <div className="container-fluid">
    //     {/* ...existing code... */}

    //     <div
    //       className="offcanvas offcanvas-start"
    //       tabIndex="-1"
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //     >
    //       <div className={styles.offcanvasHeader}>
    //         <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
    //           Menu
    //         </h5>
    //         <button
    //           type="button"
    //           className="btn-close btn-close-white"
    //           data-bs-dismiss="offcanvas"
    //           aria-label="Close"
    //         ></button>
    //       </div>

    //       <div className={styles.offcanvasBody}>
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <a className={styles.navLink} href="/">
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className={styles.navLink} href="/about">
    //               About
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className={styles.navLink} href="/services">
    //               Services
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className={styles.navLink} href="/contact">
    //               Contact
    //             </a>
    //           </li>
    //         </ul>
    //         <button className={styles.donateButton} type="button">
    //           Donate
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
