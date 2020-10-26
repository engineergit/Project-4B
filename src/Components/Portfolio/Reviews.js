import Marquee from "react-marquee-slider";

import React from "react";

export const Reviews = () => {
  const arrayReviews = [
    {
      title: "Client Reviews",
      src:
        "https://image.freepik.com/free-vector/testimonial-design-with-speech-bubbles_23-2147935346.jpg",
    },
  ];
  return (
    <div style={{ height: "550px" }}>
      <h2 style={{ textAlign: "center", fontFamily: "monospace" }}>
        We believe our work speaks for itself, but our customers vouch for us
        too. Here’s just a few of the reviews that make up our 4.9 star rating
        on .
      </h2>
      <Marquee
        velocity={200}
        minScale={0.7}
        resetAfterTries={100}
        scatterRandomly
      >
        {arrayReviews.map((id) => (
          <div
          key={id}
            style={{
              height: "auto",
              width: "auto",
              borderRadius: "50%",
              padding: "20px",
            }}
          >
            <img
            alt ="sohail"
              style={{ borderRadius: "200px" ,marginBottom:'90px'}}
              height="400px"
              src={id.src}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
