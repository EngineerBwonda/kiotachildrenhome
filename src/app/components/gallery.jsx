"use client";

import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col display-4 m-4 text-success border-bottom fw-bold">
            WELCOME TO KIOTA CHILDRENS HOME GALLERY
          </div>
        </div>
      </div>

      <div className="container text-center bg-gradient">
        <div className="row row-cols-1 row-cols-md-3 g-2">
          <div className="col">
            <div className="card">
              <Image
                src="/g1.jpeg"
                alt="Child A"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/g2.jpeg"
                alt="Child B"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/g3.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Image
                src="/kiotapic2.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Image
                src="/childC.jpg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Image
                src="/g4.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/g5.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/g6.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/g7.jpeg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/childC.jpg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Image
                src="/childA.jpg"
                alt="Child "
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Image
                src="/childB.jpg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>

          <div className="col">
            <div className="card">
              <Image
                src="/childA.jpg"
                alt="Child C"
                width={200}
                height={300}
                className="card-img-top"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
