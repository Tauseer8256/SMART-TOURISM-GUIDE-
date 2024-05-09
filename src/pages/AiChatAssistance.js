import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FiSend } from "react-icons/fi";

function AiChatAssistance() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const sendMessage = () => {
    if (inputText.trim() === "") return;
    setMessages([...messages, { role: "user", content: inputText }]);
    setInputText("");
    fetchResponse(inputText);
  };

  const fetchResponse = (prompt) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE0NTczODEyLCJleHAiOjE3MTQ2NjAyMTJ9.q8XUXI-jkTBEBLmty6E3vwz5iVTV5p-IlhPYxKsdUCg"
    );
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ prompt }),
      redirect: "follow",
    };

    fetch(
      "https://68f2-203-215-165-236.ngrok-free.app/api/ai/open-ai/es",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const { content } = result.message;
        setMessages([...messages, { role: "bot", content }]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <section id="Ai-Chat-Section">
      <Container className="chatbot-container">
        <Row className="h-100">
          <Col className="d-flex justify-content-center align-items-center">
            <div className="chat-container text-light">
              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div key={index} className={`message ${message.role}`}>
                    {message.content}
                  </div>
                ))}
              </div>
              <Form
                className="chat-input"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
              >
                <Form.Group style={{width:"100%"}} controlId="formChatInput">
                  <Form.Control
                    type="text"
                    placeholder="Type your message..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                <FiSend />
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AiChatAssistance;
