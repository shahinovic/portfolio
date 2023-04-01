import Feature from "../../components/feature/Feature";
import "./whoWeAre.css";

import Motion from "../Motion";

function WhoWeAre() {
  return (
    <Motion>
      <div className="section AS__whoweare  section__padding" id="whoWeAre">
        <div className="AS__whoweare-feature">
          <Feature
            title="My Role"
            text="As a front-end developer, my task is to develop and implement the user interface of a website or web application. My primary focus is on the design and functionality of the client-side portion of the application, which includes the layout, structure, and behavior of the website or application."
          />
        </div>
        <div className="AS__whoweare-heading">
          <h1 className="gradient__text">
            My responsibilities as a front-end developer include:
          </h1>
        </div>
        <div className="AS__whoweare-container">
          <Feature
            title="Developing web interfaces"
            text="Developing user-friendly and responsive web interfaces using HTML, CSS, and JavaScript."
          />
          <Feature
            title="Collaborating with teams"
            text="Collaborating with designers and back-end developers to ensure that the website or application meets the design and functional requirements."
          />
          <Feature
            title="Maintaining and optimizing websites"
            text="Maintaining and optimizing the website or application to ensure that the website or application meets the design and functional requirements."
          />
          <Feature
            title="Overall Goal"
            text="Creating a visually appealing, user-friendly, and functional website or application that provides an optimal user experience."
          />
        </div>
      </div>
    </Motion>
  );
}

export default WhoWeAre;
