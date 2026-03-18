export default function Map() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Location</h2>
      <div className="row">
        <div className="col-md-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8263760916734!2d37.04724739999999!3d-1.2776553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6fe660be3773%3A0x49f7545c3751966d!2sMountain%20movers%20and%20restoration%20Ministries%20kamulu%20kipawa%20stage!5e0!3m2!1sen!2ske!4v1773828448364!5m2!1sen!2ske"
            height="450"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
