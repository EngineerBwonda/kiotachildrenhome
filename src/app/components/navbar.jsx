"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
    { href: "/getinvolved", label: "Get Involved" },
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          background: "#ffffff",
          minHeight: "90px",
          fontFamily: "'Oswald', 'Roboto Condensed', 'Impact', sans-serif",
          fontWeight: 500,
          letterSpacing: "1px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
          borderBottom: "3px solid #43a047",
        }}
      >
        <div className="container-fluid">
          {/* Logo Section - Controlled entirely by CSS now */}
          <Link
            className={`${styles.logoLink} d-flex align-items-center`}
            href="/"
          >
            <Image
              src="/logo2.png"
              alt="Kiota Children's Home Logo"
              width={280}
              height={180}
              priority
              className={styles.logoImage}
            />
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ background: "#43a047" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a
                    className={`nav-link fw-bold fs-6 ${
                      pathname === link.href ? "active" : ""
                    }`}
                    href={link.href}
                    style={{
                      color: pathname === link.href ? "#ffffff" : "#333333",
                      background:
                        pathname === link.href ? "#43a047" : "transparent",
                      borderRadius: "0",
                      margin: "0 4px",
                      padding: "10px 16px",
                      transition: "all 0.2s ease",
                      fontSize: "0.95rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      border:
                        pathname === link.href
                          ? "2px solid #43a047"
                          : "2px solid transparent",
                      fontFamily: "'Oswald', 'Roboto Condensed', sans-serif",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = "#43a047";
                      e.target.style.color = "#ffffff";
                      e.target.style.border = "2px solid #43a047";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background =
                        pathname === link.href ? "#43a047" : "transparent";
                      e.target.style.color =
                        pathname === link.href ? "#ffffff" : "#333333";
                      e.target.style.border =
                        pathname === link.href
                          ? "2px solid #43a047"
                          : "2px solid transparent";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="btn ms-lg-2"
                  href="/donate"
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    padding: "10px 24px",
                    borderRadius: "0",
                    background: "#2e7d32",
                    border: "2px solid #2e7d32",
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontFamily: "'Oswald', 'Roboto Condensed', sans-serif",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#43a047";
                    e.target.style.borderColor = "#43a047";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "#2e7d32";
                    e.target.style.borderColor = "#2e7d32";
                  }}
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={styles.navbarSpacer}></div>
    </>
  );
}

//=================================================================================================
// "use client";
// import { useEffect } from "react";
// import Image from "next/image";
// import styles from "./navbar.module.css";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// export default function Navbar() {
//   const pathname = usePathname();

//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/gallery", label: "Gallery" },
//     { href: "/contact", label: "Contact" },
//     { href: "/getinvolved", label: "Get Involved" },
//   ];

//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg fixed-top"
//         style={{
//           background: "#ffffff",
//           minHeight: "90px",
//           fontFamily: "'Oswald', 'Roboto Condensed', 'Impact', sans-serif",
//           fontWeight: 500,
//           letterSpacing: "1px",
//           boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
//           borderBottom: "3px solid #43a047",
//         }}
//       >
//         <div className="container-fluid">
//           {/* Logo Section - Now fills the ENTIRE navbar height (90px) */}
//           <Link
//             className="d-flex align-items-center"
//             href="/homepage"
//             style={{
//               textDecoration: "none",
//               height: "100px",
//               padding: "0", // Removed padding so logo touches full height
//             }}
//           >
//             <Image
//               src="/logo2.png"
//               alt="Kiota Children's Home Logo"
//               width={480}
//               height={680}
//               priority
//               style={{
//                 objectFit: "contain",
//                 height: "100%", // ← This makes it fill the whole navbar height
//                 width: "auto",
//               }}
//             />
//           </Link>

//           <button
//             className="navbar-toggler border-0"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//             aria-controls="navbarCollapse"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             style={{ background: "#43a047" }}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
//               {navLinks.map((link) => (
//                 <li className="nav-item" key={link.href}>
//                   <a
//                     className={`nav-link fw-bold fs-6 ${
//                       pathname === link.href ? "active" : ""
//                     }`}
//                     href={link.href}
//                     style={{
//                       color: pathname === link.href ? "#ffffff" : "#333333",
//                       background:
//                         pathname === link.href ? "#43a047" : "transparent",
//                       borderRadius: "0",
//                       margin: "0 4px",
//                       padding: "10px 16px",
//                       transition: "all 0.2s ease",
//                       fontSize: "0.95rem",
//                       textTransform: "uppercase",
//                       letterSpacing: "1px",
//                       border:
//                         pathname === link.href
//                           ? "2px solid #43a047"
//                           : "2px solid transparent",
//                       fontFamily: "'Oswald', 'Roboto Condensed', sans-serif",
//                     }}
//                     onMouseOver={(e) => {
//                       e.target.style.background = "#43a047";
//                       e.target.style.color = "#ffffff";
//                       e.target.style.border = "2px solid #43a047";
//                     }}
//                     onMouseOut={(e) => {
//                       e.target.style.background =
//                         pathname === link.href ? "#43a047" : "transparent";
//                       e.target.style.color =
//                         pathname === link.href ? "#ffffff" : "#333333";
//                       e.target.style.border =
//                         pathname === link.href
//                           ? "2px solid #43a047"
//                           : "2px solid transparent";
//                     }}
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//               <li className="nav-item">
//                 <a
//                   className="btn ms-lg-2"
//                   href="/donate"
//                   style={{
//                     fontWeight: 700,
//                     fontSize: "0.95rem",
//                     padding: "10px 24px",
//                     borderRadius: "0",
//                     background: "#2e7d32",
//                     border: "2px solid #2e7d32",
//                     color: "#ffffff",
//                     textTransform: "uppercase",
//                     letterSpacing: "1px",
//                     fontFamily: "'Oswald', 'Roboto Condensed', sans-serif",
//                     transition: "all 0.2s ease",
//                   }}
//                   onMouseOver={(e) => {
//                     e.target.style.background = "#43a047";
//                     e.target.style.borderColor = "#43a047";
//                   }}
//                   onMouseOut={(e) => {
//                     e.target.style.background = "#2e7d32";
//                     e.target.style.borderColor = "#2e7d32";
//                   }}
//                 >
//                   Donate
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className={styles.navbarSpacer}></div>
//     </>
//   );
// }

// "use client";
// import { useEffect } from "react";
// import Image from "next/image";
// import styles from "./navbar.module.css";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// export default function Navbar() {
//   const pathname = usePathname();

//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

//   // Define your nav links for easier mapping
//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/gallery", label: "Gallery" },
//     { href: "/contact", label: "Contact" },
//     { href: "/getinvolved", label: "Get Involved" },
//   ];

//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg fixed-top"
//         style={{
//           background: "#ffffff",
//           minHeight: "90px",
//           fontFamily: "'Oswald', 'Roboto Condensed', 'Impact', sans-serif",
//           fontWeight: 500,
//           letterSpacing: "1px",
//           boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
//           borderBottom: "3px solid #43a047",
//         }}
//       >
//         <div className="container-fluid">
//           {/* Logo Section - Taller on left */}
//           <Link
//             className="d-flex align-items-center"
//             href="/homepage"
//             style={{
//               textDecoration: "none",
//               height: "90px",
//               padding: "10px 0",
//             }}
//           >
//             <Image
//               src="/logo2.png"
//               alt="Kiota Children's Home Logo"
//               width={280}
//               height={180}
//               style={{
//                 objectFit: "contain",
//                 maxHeight: "500px",
//               }}
//             />
//           </Link>

//           <button
//             className="navbar-toggler border-0"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarCollapse"
//             aria-controls="navbarCollapse"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             style={{ background: "#43a047" }}
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarCollapse">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
//               {navLinks.map((link) => (
//                 <li className="nav-item" key={link.href}>
//                   <a
//                     className={`nav-link fw-bold fs-6 ${
//                       pathname === link.href ? "active" : ""
//                     }`}
//                     href={link.href}
//                     style={{
//                       color: pathname === link.href ? "#ffffff" : "#333333",
//                       background:
//                         pathname === link.href ? "#43a047" : "transparent",
//                       borderRadius: "0",
//                       margin: "0 4px",
//                       padding: "10px 16px",
//                       transition: "all 0.2s ease",
//                       fontSize: "0.95rem",
//                       textTransform: "uppercase",
//                       letterSpacing: "1px",
//                       border:
//                         pathname === link.href
//                           ? "2px solid #43a047"
//                           : "2px solid transparent",
//                       fontFamily: "'Oswald', 'Roboto Condensed', sans-serif",
//                     }}
//                     onMouseOver={(e) => {
//                       e.target.style.background = "#43a047";
//                       e.target.style.color = "#ffffff";
//                       e.target.style.border = "2px solid #43a047";
//                     }}
//                     onMouseOut={(e) => {
//                       e.target.style.background =
//                         pathname === link.href ? "#43a047" : "transparent";
//                       e.target.style.color =
//                         pathname === link.href ? "#ffffff" : "#333333";
//                       e.target.style.border =
//                         pathname === link.href
//                           ? "2px solid #43a047"
//                           : "2px solid transparent";
//                     }}
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}
//               <li className="nav-item">
//                 <a
//                   className="btn ms-lg-2"
//                   href="/donate"
//                   style={{
//                     fontWeight: 700,
//                     fontSize: "0.95rem",
//                     padding: "10px 24px",
//                     borderRadius: "0",
//                     background: "#2e7d32",
//                     border: "2px solid #2e7d32",
//                     color: "#ffffff",
//                     textTransform: "uppercase",
//                     letterSpacing: "1px",
//                     fontFamily: "'Oswald', 'Roboto Condensed', sans-serif",
//                     transition: "all 0.2s ease",
//                   }}
//                   onMouseOver={(e) => {
//                     e.target.style.background = "#43a047";
//                     e.target.style.borderColor = "#43a047";
//                   }}
//                   onMouseOut={(e) => {
//                     e.target.style.background = "#2e7d32";
//                     e.target.style.borderColor = "#2e7d32";
//                   }}
//                 >
//                   Donate
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className={styles.navbarSpacer}></div>
//     </>
//   );
// }
