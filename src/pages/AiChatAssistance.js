import React, { useState, useEffect,useRef } from "react"; // [1]
import { useNavigate } from "react-router-dom"; // [2]
import { Form, Button, Container, Row, Col } from "react-bootstrap"; // [3]
import { FiSend } from "react-icons/fi"; // [4]

function AiChatAssistance() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [token, setToken] = useState(null);
  const messagesEndRef = useRef(null); // Create a ref
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("AuthenticationToken");
    setToken(authToken);
    if (!authToken) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom whenever messages change
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    const newMessage = { role: "user", content: inputText };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputText("");
    fetchResponse(inputText);
  };

  const fetchResponse = (prompt) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ prompt }),
      redirect: "follow",
    };

    let lang = localStorage.getItem("i18nextLng").toLowerCase() || "gb";
    fetch(
      `https://msc-project-backend-code.vercel.app/api/ai/open-ai/${lang}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const { content } = result.message;
        const botMessage = { role: "bot", content };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
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
                <div ref={messagesEndRef} />
              </div>
              <Form
                className="chat-input"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
              >
                <Form.Group style={{ width: "100%" }} controlId="formChatInput">
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


// [1] React, "React Documentation," [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: April 21, 2024].
// [2] react-bootstrap. (n.d.). React Bootstrap. Retrieved from https://react-bootstrap.github.io/
// [3] react-icons, "React Icons Documentation," [Online]. Available: https://react-icons.github.io/react-icons/. [Accessed: April 21, 2024].