import { useState, useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link } from "react-router-dom";
import xLogo from "./assets/IMG_7972.ico";

function App() {
  const [timestamp, setTimestamp] = useState("");
  const titleRef = useRef(null);
  const spanRef = useRef(null);
  const logoRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    anime({
      targets: titleRef.current,
      translateY: [-100, 0],
      delay: anime.stagger(300, { start: 500 }),
      opacity: [0, 1],
      duration: 800,
      easing: "easeInQuad",
    });
    anime({
      targets: spanRef.current,
      translateY: [-100, 0],
      delay: anime.stagger(300, { start: 400 }),
      opacity: [0, 1],
      duration: 700,
      easing: "easeInQuad",
    });

    anime({
      targets: logoRef.current,
      rotate: [0, 360],
      duration: 4000,
      easing: "easeInOutSine",
      loop: true,
    });

    anime({
      targets: buttonsRef.current.querySelectorAll("a"),
      translateY: [100, 0],
      opacity: [0, 1],
      delay: anime.stagger(300, { start: 700 }),
      duration: 1000,
      easing: "easeInOutCubic",
    });

    const padWithZero = (value) => value.toString().padStart(2, "0");

    const updateTimestamp = () => {
      const now = new Date();
      const formattedDate = `${padWithZero(now.getDate())}/${padWithZero(
        now.getMonth() + 1
      )}/${now.getFullYear()} ${padWithZero(now.getHours())}:${padWithZero(
        now.getMinutes()
      )}:${padWithZero(now.getSeconds())}:${padWithZero(
        now.getMilliseconds().toString().slice(0, 2)
      )}`;
      setTimestamp(formattedDate);
    };

    updateTimestamp();
    const intervalId = setInterval(updateTimestamp, 70);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="app-container">
      <h1 ref={titleRef} className="title">
        Welcome to My App
      </h1>
      <span ref={spanRef} className="span">
        {timestamp}
      </span>
      <div ref={logoRef} className="logo-container">
        <img src={xLogo} className="logo" />
      </div>
      <div ref={buttonsRef}>
        <Link
          to="/login"
          type="button"
          class="btn btn-outline-info m-2 p-2 w-100"
        >
          Login
        </Link>
        <Link
          to="/register"
          type="button"
          class="btn btn-outline-secondary m-2 p-2 w-100"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default App;
