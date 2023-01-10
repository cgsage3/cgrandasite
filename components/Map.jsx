import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17101.728927038257!2d-73.99766363357418!3d40.73590785994218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3f71c1f67%3A0xde2a6125ed704926!2sFlatiron%20Building!5e0!3m2!1sen!2sin!4v1673382794616!5m2!1sen!2sin"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
