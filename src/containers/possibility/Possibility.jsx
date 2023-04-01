import React from "react";
import "./possibility.css";
import Motion from "../Motion";
import Skill from "../../components/progress/Skill";

const Possibility = () => {
  return (
    <Motion>
      <div
        className="section AS__possibility section__padding"
        id="possibility"
      >
        <div className="AS__possibility-image">
          <Skill name="react" value={67} color="purple" />
          <Skill name="html" value={60} color="purple" />
          <Skill name="css" value={80} color="purple" />
          <Skill name="js" value={75} color="purple" />
          <Skill name="bootstrap" value={75} color="purple" />
          <Skill name="Sass" value={60} color="purple" />
          <Skill name="git & github" value={70} color="purple" />
        </div>
        <div className="AS__possibility-content">
          <h1 className="gradient__text">
            My Front-End <br /> Development Skills
          </h1>
          <p>Proficient in HTML, CSS, and JavaScript</p>
          <p>Experience with front-end React framework</p>
          <p>Knowledge of CSS preprocessor Sass</p>
          <p>Familiarity with CSS frameworks such as Bootstrap and Tailwind</p>
          <p>Ability to write clean and maintainable code</p>
          <p>Understanding of responsive design principles</p>
          <p>Experience with version control systems such as Git</p>
          <p>Knowledge of web accessibility standards and best practices</p>
          <p>Experience with cross-browser compatibility testing</p>
          <p>
            Ability to work collaboratively with back-end developers, designers,
            and project managers
          </p>
        </div>
      </div>
    </Motion>
  );
};
export default Possibility;
