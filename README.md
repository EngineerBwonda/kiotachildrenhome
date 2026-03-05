This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
const pathname = usePathname();

useEffect(() => {
require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);

// Define your nav links for easier mapping
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
          background:
            "linear-gradient(90deg,rgb(180, 187, 180) 0%,rgb(18, 41, 19) 100%)",
          minHeight: "80px",
          fontFamily: "'Montserrat', 'Segoe UI', Arial, sans-serif",
          fontWeight: 600,
          letterSpacing: "0.5px",
          boxShadow: "0 2px 8px rgba(46,125,50,0.08)",
        }} >
<div className="container-fluid">
<a
className="navbar-brand d-flex align-items-center"
href="/homepage"
style={{
              color: "#fff",
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: "1px",
              textShadow: "0 1px 2px rgba(0,0,0,0.08)",
            }} >
<span className="ms-2 h4" style={{ margin: 0 }}>
Kiota Children's Home
</span>
</a>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ background: "#388e3c" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a
                    className={`nav-link fw-bolder fs-5 ${
                      pathname === link.href ? "active" : ""
                    }`}
                    href={link.href}
                    style={{
                      color: pathname === link.href ? "#fff" : "#e8f5e9",
                      background:
                        pathname === link.href ? "#388e3c" : "transparent",
                      borderRadius: "6px",
                      margin: "0 6px",
                      padding: "8px 18px",
                      transition: "all 0.2s",
                      fontSize: "1.15rem",
                      boxShadow:
                        pathname === link.href
                          ? "0 2px 8px rgba(56,142,60,0.10)"
                          : "none",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = "#43a047";
                      e.target.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background =
                        pathname === link.href ? "#388e3c" : "transparent";
                      e.target.style.color =
                        pathname === link.href ? "#fff" : "#e8f5e9";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a
                  className="btn btn-success ms-lg-2"
                  href="/donate"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    padding: "10px 28px",
                    borderRadius: "8px",
                    background: "#1b5e20",
                    border: "none",
                    color: "#fff",
                    boxShadow: "0 2px 8px rgba(27,94,32,0.10)",
                    transition: "background 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "#388e3c";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = "#1b5e20";
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
