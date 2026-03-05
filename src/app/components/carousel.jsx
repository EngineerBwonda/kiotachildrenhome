"use client";
import Image from "next/image";
import styles from "./carousel.module.css";

export default function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide carousel-fade ${styles.carouselContainer}`}
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className={`carousel-inner ${styles.bb}`}>
        <div className="carousel-item active" data-bs-interval="5000">
          <Image
            src="/carolA.jpeg"
            className={`d-block w-100 ${styles.pic}`}
            alt="Children playing and smiling at Kiota Children's Home"
            width={800}
            height={400}
            style={{ objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <a
              href="/getinvolved"
              className={`btn btn-primary ${styles.donatebtn}`}
            >
              Join Our Family
            </a>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <Image
            src="/carolC.jpeg"
            className={`d-block w-100 ${styles.pic}`}
            alt="Children learning and studying at Kiota"
            width={800}
            height={400}
            style={{ objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <a
              href="/getinvolved"
              className={`btn btn-primary ${styles.donatebtn}`}
            >
              Support Education
            </a>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <Image
            src="/carolB.jpeg"
            className={`d-block w-100 ${styles.pic}`}
            alt="Happy children at Kiota Children's Home"
            width={800}
            height={400}
            style={{ objectFit: "cover" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <a
              href="/getinvolved"
              className={`btn btn-primary ${styles.donatebtn}`}
            >
              Make a Difference
            </a>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
