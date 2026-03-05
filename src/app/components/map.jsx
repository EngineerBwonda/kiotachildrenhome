export default function Map() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Location</h2>
      <div className="row">
        <div className="col-md-12">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=karen+(nairobi)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
