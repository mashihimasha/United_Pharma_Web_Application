import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [chatMessages, setChatMessages] = useState([
    "Hello?? is there anyone",
    "I need assistance with medicines.",
  ]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setChatMessages([...chatMessages, `Admin: ${inputText}`]);
      setInputText("");
    }
  };

  return (
    <MDBContainer className="py-5" style={{ backgroundColor:""}}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard id="chat1" style={{ borderRadius: "15px", backgroundColor:" "}}>
            <MDBCardHeader
              className="d-flex justify-content-between align-items-center p-3 bg-success bg-info text-white border-bottom-0"
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px"
              }}
            >
              <Link to='/blogs'>
                <MDBIcon icon="angle-left" />
              </Link>
              <p className="mb-0 fw-bold" style={{backgroundColor:""}}>Live chat</p>
              <MDBIcon icon="times" />
            </MDBCardHeader>

            <MDBCardBody>
              
              {chatMessages.map((message, index) => (
                <div key={index} className={`d-flex flex-row justify-content-${message.startsWith("Admin:") ? "end" : "start"} mb-4`}>
                  {message.startsWith("Admin:") ? (
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/pharmacistmen.png"
                      alt="admin"
                    />
                  ) : (
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/user.png"
                      alt="user"
                    />
                  )}
                  <div
                    className="p-3 ms-3"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: message.startsWith("Admin:")
                        ? "rgba(255, 0, 0,.2)"
                        : "rgba(57, 192, 237,.2)",
                    }}
                  >
                    <p className="small mb-0">{message}</p>
                  </div>
                </div>
              ))}

              <label htmlFor="textAreaExample" className={isInputFocused || inputText ? 'active' : ''}>Type your message</label>
              <MDBTextArea
                className="form-outline"
                id="textAreaExample"
                rows={4}
                value={inputText}
                onChange={handleInputChange}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
              />

              <button
                type="button"
                className="btn btn-primary w-100 rounded p-1 mt-3"
                style={{backgroundColor:""}}
                onClick={handleSendMessage}
              >
                Send Message
              </button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}