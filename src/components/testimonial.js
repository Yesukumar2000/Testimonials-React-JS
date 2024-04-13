import React from "react";
import "./testimonial.css"; 

function Testimonial({ pic, name, role, description }) {
  return (
    <div>
      <img src={pic} alt="profile" className="profile" />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <blockquote>{description}</blockquote>
    </div>
  );
}

export default Testimonial;
