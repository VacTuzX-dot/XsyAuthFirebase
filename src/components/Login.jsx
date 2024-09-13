import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import anime from "animejs/lib/anime.es.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  let navigate = useNavigate();

  const formRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    anime({
      targets: formRef.current.querySelectorAll(".form-control"),
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 500 }),
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: buttonRef.current,
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 1300,
      easing: "easeOutElastic",
    });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6 col-lg-5 shadow p-4 rounded bg-light">
        <h2 className="mb-4 text-center">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} ref={formRef}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div ref={buttonRef} className="d-grid gap-2">
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </div>
        </Form>

        <div className="text-center mt-3">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
