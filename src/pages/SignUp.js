import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { IoHome } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import SiteLogo from "../assets/images/site-logo.png";
import ClipLoader from "react-spinners/ClipLoader";
import { SignUpUser } from "../WebApiCall/WebApiCalls";

const SignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }
      setLoader(true);
      let responseMessage = await SignUpUser(firstname, lastname, email, password);
      console.log("here is the actual response data---->")
      if (responseMessage?.data?.token) {
        setLoader(false);
        localStorage.setItem("AuthenticationToken", responseMessage?.data?.token);
        localStorage.setItem("UserName", responseMessage?.data?.data?.firstname);
        navigate("/");
      } else {
        let errorMsg = responseMessage?.message;
        setLoader(false);
        setErrorMessage(errorMsg ? errorMsg : "some thing went wrong");
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

  const handleConfirmPasswordChange = (event) => {
    setErrorMessage("");
    setConfirmPassword(event.target.value);
  };

  return (
    <section id="Auth-page">
      <div className="home-btn d-none d-sm-block">
        <Link className="text-dark" to="/">
          <IoHome />
        </Link>
      </div>
      <Row className="justify-content-center">
        <Col md={6}>
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
            <h2 className="login-heading">Welcome To Sign Up</h2>
            <p>Please Register to Continue</p>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  value={firstname}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setErrorMessage("");
                  }}
                  required
                  className="login-input"
                />
              </Form.Group>
              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  value={lastname}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setErrorMessage("");
                  }}
                  required
                  className="login-input"
                />
              </Form.Group>
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
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className="login-input"
                />
              </Form.Group>
              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
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
                    marginBottom:10
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
                  "Submit"
                )}
              </Button>
              <div className="mt-3 text-center text-decoration-underline">
                <Link
                  style={{
                    color: "#ffffff",
                    textDecoration: "underline !important",
                  }}
                  to="/login"
                >
                  Already have an account
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default SignUp;
