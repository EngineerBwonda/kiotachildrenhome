import styles from "./footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className={`${styles.footer} bg-light text-dark mt-5 pt-4 pb-2 border-top`}
    >
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h2 className="text-center text-success mb-3">
              KIOTA CHILDREN`S HOME FOUNDATION
            </h2>
            <p className="fs-5">
              Kiota Children's Home is dedicated to providing a safe and
              nurturing environment for children in need. Our mission is to
              ensure that every child has access to education, healthcare, and
              emotional support.
            </p>

            <ul className="list-group list-group-horizontal justify-content-center mb-3">
              <li className="list-group-item bg-transparent border-0">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={42}
                    height={42}
                    className={styles.socialIcon}
                  />
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    width={42}
                    height={42}
                    className={styles.socialIcon}
                  />
                </a>
              </li>
              <li className="list-group-item bg-transparent border-0">
                <a href="mailto:contact@kiota.com">
                  <Image
                    src="/gmail.png"
                    alt="Email"
                    width={42}
                    height={42}
                    className={styles.socialIcon}
                  />
                </a>
              </li>
            </ul>

            <p className={styles.footerText}>
              &copy; 2023 Kiota Children's Home Foundation. All rights reserved.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0 text-center">
            <h2 className="text-center text-success mb-4">Quick Links</h2>
            <ul className="list-unstyled">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/getinvolved", label: "Get Involved" },
                { href: "/contact", label: "Contact" },
                { href: "/gallery", label: "Gallery" },
                { href: "/donate", label: "Donate" },
              ].map((link) => (
                <li key={link.href} className="mb-3">
                  <a
                    href={link.href}
                    className={`${styles.linkHover} ${styles.linkUnderline} fs-4`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Map */}
          <div className="col-md-4">
            <h2 className="text-center text-success mb-3">Our Location</h2>
            <div
              style={{
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=karen+(nairobi)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Kiota Children's Home Location"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
