import React, { useState } from "react";
import { validateEmail } from "../../assets/utils/helpers";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";


function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const { name, company, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    // validates email with imported function
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form id="contact" onSubmit={handleSubmit} style={{}}>
        <div>
        <h3 className="text-center sectionHead">Please Reach Out!</h3>
       
          <h4> 
          <Nav.Link className="contactEmail" href="mailto:TheDecoder007@gmail.com"> TheDecoder007@gmail.com</Nav.Link>
          </h4>
        
        </div>
        <Row>
          <Col>
            <Form.Control
              className="formBack"
              type="text"
              defaultValue={name}
              onBlur={handleChange}
              name="name"
              placeholder="Your Name"
            />
          </Col>
          <Col>
            <Form.Control
            className="formBack"
              type="text"
              defaultValue={company}
              onBlur={handleChange}
              name="company"
              placeholder="Your Company"
            />
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
          className="formBack"
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <InputGroup>
          <InputGroup.Text className="formText">Your Message</InputGroup.Text>
          <Form.Control
          className="formBack"
            as="textarea"
            aria-label="With textarea"
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </InputGroup>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button className="submitBtn" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;