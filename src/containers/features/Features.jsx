import React from "react";
import Feature from "../../components/feature/Feature";
import Motion from "../Motion";
import "./features.css";

const futureData = [
  {
    title: "Learning new technologies",
    text: "Continuously learning and keeping up with the latest front-end technologies and tools.",
  },
  {
    title: "Mastering CSS",
    text: "Improving my CSS skills and mastering advanced techniques such as CSS Grid and Flexbox.",
  },
  {
    title: "Building accessible websites",
    text: "Ensuring that all websites I build are accessible to users with disabilities.",
  },
  {
    title: "Creating responsive designs",
    text: "Developing responsive websites that look great on all devices, from desktops to smartphones.",
  },
  {
    title: "Optimizing website performance",
    text: "Optimizing website performance and speed by implementing best practices for code and asset optimization.",
  },
  {
    title: "Working with designers",
    text: "Collaborating with designers to bring their vision to life and create beautiful and functional designs.",
  },
  {
    title: "Testing and debugging",
    text: "Thoroughly testing and debugging websites to ensure they are free of errors and function as intended.",
  },
  {
    title: "Writing clean and maintainable code",
    text: "Writing clean, maintainable, and reusable code that is easy for other developers to understand and work with.",
  },
];

const Features = () => {
  const style = {
    height: "100vh",
  };
  return (
    <Motion>
      <div className="section AS__features section__padding" id="features">
        <div className="AS__features-heading">
          <h1 className="gradient__text">Future Goals</h1>
        </div>
        <div className="AS__features-container">
          {futureData.map((item, index) => (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          ))}
        </div>
      </div>
    </Motion>
  );
};
export default Features;
