import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "../style/Message.css";

const Message = ({ message, handleDeleteMessage }) => {
  const [isHovered, setIsHovered] = useState(false);
console.log(message,"mess")
  return (
    <div
      className="message-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        padding: "10px",
        borderBottom: "1px solid #ccc",
        backgroundColor: "var(--message-bg)",
        color: "var(--message-text)",
      }}
    >
      <div><strong>{message.sender}</strong></div>
      <div>{message.text}</div>
      <div style={{ fontSize: "0.8rem", color: "#888" }}>
        {new Date(message.timestamp).toLocaleString()}
      </div>

      {isHovered && (
        <div
          className="delete-icon"
          onClick={() => handleDeleteMessage(message.timestamp)}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        >
          <FaTrash />
        </div>
      )}
    </div>
  );
};

export default Message;
