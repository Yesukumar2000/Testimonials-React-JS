import React from "react";
import "./components/testimonial.css";
import Testimonial from "./components/testimonial.js";


function App() {
  const testimonials = [
    {
      pic: "https://testimonials-components.netlify.app/images/img1.jpg",
      name: "Eleanor Crisp",
      role: "UX Design",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sint expedita molestiae facilis ex, est repellat."
    },
    {
      pic: 'https://testimonials-components.netlify.app/images/img2.jpg',
      name: "Eleanor Crisp",
      role: "Accountant",
      description: "Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!"
    },
    {
      pic: 'https://testimonials-components.netlify.app/images/img3.jpg',
      name: "Eleanor Crisp",
      role: "Frontend Developer",
      description: "Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!"
    },
    {
      pic: 'https://testimonials-components.netlify.app/images/img2.jpg',
      name: "Eleanor Crisp",
      role: "Accountant",
      description: "Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!"
    }, {
      pic: 'https://testimonials-components.netlify.app/images/img1.jpg',
      name: "Eleanor Crisp",
      role: "UX Design",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sint expedita molestiae facilis ex, est repellat."
    },{
      pic: 'https://testimonials-components.netlify.app/images/img2.jpg',
      name: "Eleanor Crisp",
      role: "Frontend Developer",
      description: "Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!"
    }
  ];
  
  return (
    <>
      <h1>Testimonials</h1>
      <div className="container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="container-Block">
            <Testimonial
              pic={testimonial.pic}
              name={testimonial.name}
              role={testimonial.role}
              description={testimonial.description}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;