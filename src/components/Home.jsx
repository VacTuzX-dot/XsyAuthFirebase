import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Button, Container, Row, Col } from "react-bootstrap";
import "../Home.css";

function Home() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const welcomeRef = useRef(null);
  const userInfoRef = useRef(null);
  const logoutButtonRef = useRef(null);

  useEffect(() => {
    anime({
      targets: welcomeRef.current,
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: userInfoRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 1000,
      easing: "easeOutExpo",
      delay: 500,
    });

    anime({
      targets: logoutButtonRef.current,
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutElastic",
      delay: 1000,
    });
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Row>
        <Col className="text-center">
          <h2 ref={welcomeRef}>Welcome to the Home Page</h2>
          <div ref={userInfoRef} className="user-info">
            <p>Hi, {user?.displayName || "User"}</p>
            <p>Email: {user?.email}</p>
            <p>UID: {user?.uid}</p>
          </div>
          <div ref={logoutButtonRef} className="mt-4">
            <Button onClick={handleLogout} variant="danger">
              Logout
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
