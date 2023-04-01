import React, { useEffect } from "react";

import "./blog.css";
import Motion from "../Motion";
import { bootstrap, kasper, shahin, Bondi } from "./imports";

import { GrView as View } from "react-icons/gr";
import { FiGithub as Github } from "react-icons/fi";

const Blog = () => {
  let progress = 50;
  let startX = 0;
  let active = 0;
  let isDown = false;
  const speedWheel = 0.02;
  const speedDrag = -0.1;

  useEffect(() => {
    const getZindex = (array, index) =>
      array.map((_, i) =>
        index === i ? array.length : array.length - Math.abs(index - i)
      );
    const $items = document.querySelectorAll(".carousel-item");
    const $cursors = document.querySelectorAll(".cursor");
    const displayItems = (item, index, active) => {
      const zIndex = getZindex([...$items], active)[index];
      item.style.setProperty("--zIndex", zIndex);
      item.style.setProperty("--active", (index - active) / $items.length);
    };
    const animate = () => {
      progress = Math.max(0, Math.min(progress, 100));
      active = Math.floor((progress / 100) * ($items.length - 1));

      $items.forEach((item, index) => displayItems(item, index, active));
    };
    animate();
    $items.forEach((item, i) => {
      item.addEventListener("click", () => {
        progress = (i / $items.length) * 100 + 10;
        animate();
      });
    });
    const handleWheel = (e) => {
      const wheelProgress = e.deltaY * speedWheel;
      progress = progress + wheelProgress;
      animate();
    };

    const handleMouseMove = (e) => {
      if (e.type === "mousemove") {
        $cursors.forEach(($cursor) => {
          $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
      }
      if (!isDown) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const mouseProgress = (x - startX) * speedDrag;
      progress = progress + mouseProgress;
      startX = x;
      animate();
    };

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    };

    const handleMouseUp = () => {
      isDown = false;
    };
    document.addEventListener("mousewheel", handleWheel);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchstart", handleMouseDown);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);
  }, []);
  return (
    <Motion>
      <div className="section AS__blog section__padding" id="blog">
        <div className="AS__blog-heading">
          <h1 className="gradient__text">My Work </h1>
          <p>Open source projects and websites</p>
        </div>
        <div className="AS__blog-container">
          <div className="carousel">
            <div className="carousel-item">
              <div className="carousel-box">
                <div className="title">kasper</div>
                <div className="actions">
                  <a
                    href="https://shahinovic.github.io/Kasper/"
                    target="_blank"
                  >
                    <View />
                  </a>
                  <a
                    href="https://github.com/shahinovic/Kasper"
                    target="_blank"
                  >
                    <Github />
                  </a>
                </div>
                <img src={kasper} />
              </div>
            </div>

            <div className="carousel-item">
              <div className="carousel-box">
                <div className="title">Bootstrap</div>
                <div className="actions">
                  <a
                    href="https://shahinovic.github.io/practice-bootstrap-5/"
                    target="_blank"
                  >
                    <View />
                  </a>
                  <a
                    href="https://github.com/shahinovic/practice-bootstrap-5"
                    target="_blank"
                  >
                    <Github />
                  </a>
                </div>
                <img src={bootstrap} />
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-box">
                <div className="title">Shahin</div>
                <div className="actions">
                  <a
                    href="https://shahinovic.github.io/Shahin/"
                    target="_blank"
                  >
                    <View />
                  </a>
                  <a
                    href="https://github.com/shahinovic/Shahin"
                    target="_blank"
                  >
                    <Github />
                  </a>
                </div>
                <img src={shahin} />
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-box">
                <div className="title">Bondi</div>
                <div className="actions">
                  <a
                    href="https://shahinovic.github.io/bootstrap-first-design/"
                    target="_blank"
                  >
                    <View />
                  </a>
                  <a
                    href="https://github.com/shahinovic/bootstrap-first-design"
                    target="_blank"
                  >
                    <Github />
                  </a>
                </div>
                <img src={Bondi} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion>
  );
};
export default Blog;
