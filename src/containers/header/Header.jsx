import React from "react";
import "./header.css";
import me from "../../assets/images/me.jpg";
import Motion from "../Motion";

function Header() {
  function handleDownloadClick() {
    const pdfUrl = process.env.PUBLIC_URL + "/Ahmed_Shahin_Resume.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Ahmed_Shahin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Motion>
      <div className="section AS__header section__padding" id="home">
        <div className="AS__header-content">
          <h1 className="">
            <span className="gradient__text">Hi There!, I Am Ahmed Shahin</span>
          </h1>
          <p>
            I am a front-end developer with a passion for creating visually
            stunning and intuitive web experiences. With my skills in HTML, CSS,
            and JavaScript, I am dedicated to bringing designs to life and
            exceeding user expectations. With a focus on clean code and user
            experience, I strive to deliver high-quality results on every
            project.
          </p>
          <div className="AS__header-content__input">
            <a
              data-tooltip="Size: 38.4kB"
              className="button"
              onClick={handleDownloadClick}
            >
              <div className="button-wrapper">
                <div className="text">Download</div>
                <span className="icon">
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    height="2em"
                    width="2em"
                    role="img"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                      strokeWidth="2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                    ></path>
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="AS__header-image">
          <div className="blop-ctr">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              width="100%"
              id="blobSvg"
              style={{ opacity: 1 }}
              filter="blur(0px)"
            >
              <image
                x="0"
                y="15px"
                width="400px"
                height="400px"
                clipPath="url(#shape)"
                href={me}
                preserveAspectRatio="none"
              ></image>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "rgb(239, 98, 159)" }}
                  ></stop>
                  <stop
                    offset="100%"
                    style={{ stopColor: "rgba(0, 0, 0, 0)" }}
                  ></stop>
                </linearGradient>
              </defs>
              <clipPath id="shape">
                <path id="blob" fill="url(#gradient)">
                  <animate
                    attributeName="d"
                    dur="9000ms"
                    repeatCount="indefinite"
                    values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;  "
                  ></animate>
                </path>
              </clipPath>
            </svg>
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default Header;

{
  /* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg" style="opacity: 1;" filter="blur(0px)"><image x="0" y="0" width="100%" height="100%" clip-path="url(#shape)" href="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80" preserveAspectRatio="none"></image>                        <defs>                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">                            <stop offset="0%" style="stop-color: rgb(238, 205, 163);"></stop>                            <stop offset="100%" style="stop-color: rgb(239, 98, 159);"></stop>                        </linearGradient>                        </defs>                                            <clipPath id="shape"><path id="blob" fill="url(#gradient)">                            <animate attributeName="d" dur="5600ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path></clipPath></svg> */
}
