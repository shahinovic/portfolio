import React from "react";
import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { changeDir } from "./actions";

import { Blog, Possibility, Features, WhoWeAre, Header } from "./containers";

import { Navbar } from "./components";
import "./App.css";
import "./index.css";

function App() {
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const [canNavigate, setCanNavigate] = useState(true);
  const ref = useRef();
  const [loc, setLoc] = useState("/");
  const pages = ["/", "/whoWeAre", "/possibility", "/features", "/blog"];

  useEffect(() => {
    const handleScroll = (event) => {
      if (canNavigate) {
        const delta = Math.max(
          -1,
          Math.min(1, event.wheelDelta || -event.detail)
        );
        // Set the canNavigate state to false to prevent navigating for the next 500ms
        setCanNavigate(false);

        dispatch(changeDir(delta));

        if (delta > 0) {
          navigate(pages[pages.indexOf(location.pathname) - 1]);
        } else {
          navigate(pages[pages.indexOf(location.pathname) + 1]);
        }

        // Set the canNavigate state to true after 500ms
        setTimeout(() => {
          setCanNavigate(true);
        }, 1000);
      }
    };

    window.addEventListener("mousewheel", handleScroll);

    setLoc(location.pathname);
    return () => {
      window.removeEventListener("mousewheel", handleScroll);
    };
  }, [canNavigate, location, navigate, pages]);
  useEffect(() => {
    setTimeout(() => {
      ref.current.classList.remove("active");
    }, 1000);
    return () => {
      ref.current.classList.add("active");
    };
  }, [loc]);

  return (
    <div className="App" ref={ref}>
      <Navbar />

      <Routes location={location}>
        <Route
          path="/"
          element={
            <div className="gradient__bg">
              <Header />
            </div>
          }
        />
        <Route path="/whoWeAre" element={<WhoWeAre path="/whoWeAre" />} />
        <Route path="/features" element={<Features path="/features" />} />
        <Route
          path="/possibility"
          element={<Possibility path="/possibility" />}
        />
        <Route path="/blog" element={<Blog path="/blog" />} />
      </Routes>
      {loc === "/blog" ? (
        ""
      ) : (
        <button
          className="next-page"
          onClick={() => navigate(pages[pages.indexOf(location.pathname) + 1])}
        >
          Next
        </button>
      )}
      {loc === "/" ? (
        ""
      ) : (
        <button
          className="prev-page"
          onClick={() => navigate(pages[pages.indexOf(location.pathname) - 1])}
        >
          Back
        </button>
      )}
    </div>
  );
}

export default App;
