"use client";
export default function vidplayerb() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="ratio ratio-16x9">
            <video controls className="rounded shadow">
              <source src="kiotavid2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* <p className="text-center mt-3">Sample Video Player</p> */}
        </div>
      </div>
    </div>
  );
}
