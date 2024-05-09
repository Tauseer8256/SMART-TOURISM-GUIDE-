import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { IoHome } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import SiteLogo from "../assets/images/site-logo.png";
import { LoginUser } from "../WebApiCall/WebApiCalls";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("AuthenticationToken");
    if (token) {
      setLoggedIn(true);
    }
    // remove classname when component will unmount
    return function cleanup() {};
  }, []);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setLoader(true);
      let loginResponse = await LoginUser(email, password);
      let responseMessage = loginResponse;
      if (responseMessage?.data?.token) {
        setLoader(false);
        localStorage.setItem("AuthenticationToken", responseMessage?.data?.token);
        localStorage.setItem("UserName",responseMessage?.data?.firstname)
        navigate("/");
      } else {
        setLoader(false);
        setErrorMessage("incorrect email or password");
      }
    }
    setValidated(true);
  };


  const handleEmailChange = (event) => {
    setErrorMessage("");
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setErrorMessage("");
    setPassword(event.target.value);
  };

  return (
    <section id="Auth-page">
      <div className="home-btn d-none d-sm-block">
        <Link className="text-dark" to="/">
          <IoHome />
        </Link>
      </div>
      <div className="login-container">
        <Link to="/" className="mb-2 d-block auth-logo">
          <img
            style={{ marginLeft: "auto", marginRight: "auto" }}
            src={SiteLogo}
            alt=""
            height="70"
            className="logo logo-dark d-block"
          />
        </Link>
        <h2 className="login-heading">Welcome To Login Page</h2>
        <p>Please login to Continue</p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              required
              className="login-input"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="login-input"
            />
          </Form.Group>

          {errorMessage ? (
            <div
              style={{
                fontSize: 12,
                color: "red",
                fontWeight: 400,
              }}
            >
              {errorMessage}
            </div>
          ) : (
            ""
          )}

          <Button variant="primary" type="submit" className="login-btn">
            {loader ? (
              <ClipLoader
                color={"#ffffff"}
                loading={loader}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Login"
            )}
          </Button>
          <div className="mt-3 text-center text-decoration-underline">
            <Link className="text-dark" to="/sign-up">
              Register Your Account
            </Link>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Login;
