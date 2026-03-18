"use client";

export default function VidPlayer() {
  return (
    <div className="container my-5">
      <div className="row g-4 justify-content-center">
        {/* Left Video Player */}
        <div className="col-lg-6">
          <div className="ratio ratio-16x9">
            <video controls className="rounded shadow-lg" preload="metadata">
              <source src="kiotavidA.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Video Player */}
        <div className="col-lg-6">
          <div className="ratio ratio-16x9">
            <video controls className="rounded shadow-lg" preload="metadata">
              <source src="kiotavidB.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="ratio ratio-16x9">
            <video controls className="rounded shadow-lg" preload="metadata">
              <source src="kiotavidC.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="ratio ratio-16x9">
            <video controls className="rounded shadow-lg" preload="metadata">
              <source src="kiotavidD.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="ratio ratio-16x9">
            <video controls className="rounded shadow-lg" preload="metadata">
              <source src="kiotavid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="ratio ratio-16x9">
            <video controls className="rounded shadow-lg" preload="metadata">
              <source src="kiotavid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
