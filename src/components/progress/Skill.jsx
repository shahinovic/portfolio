import React from "react";
import { Progress } from "semantic-ui-react";
import "./skill.css";

function Skill({ name, value, color }) {
  const percentComplete = value;

  return (
    <div className="skill">
      <h2>{name}</h2>
      <Progress
        percent={percentComplete}
        color={color}
        active
        label={`${percentComplete}%`}
      />
    </div>
  );
}

export default Skill;
