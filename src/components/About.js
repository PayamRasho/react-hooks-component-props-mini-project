import React from "react";

const About = ({ image, about }) => {
  return (
    <aside>
      <img
        src={
          image
            ? image
            : "https://via.placeholder.com/215Links to an external site."
        }
        alt="blog logo"
      />
      <p>{about}</p>
    </aside>
  );
};

export default About;
