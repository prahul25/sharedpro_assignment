import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, clearChat, deleteMessage } from "../redux/chatSlice";
import Message from "../components/Message";
import "../style/ChatWindow.css";

const ChatWindow = () => {
  const dispatch = useDispatch();
  const { selectedJob, selectedCandidate, messages } = useSelector(
    (state) => state.chat
  );

  const [newMessage, setNewMessage] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  
  const messagesEndRef = useRef(null);
  const shouldScrollRef = useRef(false);

  // scroll to bottom on new message
  useEffect(() => {
    if (shouldScrollRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      shouldScrollRef.current = false; 
    }
  }, [messages]);

  
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // to send or add new message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      sender: "You",
      text: newMessage,
      timestamp: new Date().toISOString(),
    };

    dispatch(
      addMessage({ job: selectedJob, candidate: selectedCandidate, message })
    );
    setNewMessage("");

    // scrolling to newest message
    shouldScrollRef.current = true;
  };

  // Handle Delete Message
  const handleDeleteMessage = (messageTimestamp) => {
    dispatch(deleteMessage({ messageTimestamp }));
  };

  // handle to delete all chats on single click
  const handleClearChat = () => {
    const chatKey = `${selectedJob}-${selectedCandidate}`;
    dispatch(clearChat());

    const updatedMessages = { ...messages };
    delete updatedMessages[chatKey];
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
  };

  if (!selectedJob || !selectedCandidate) {
    return <div>Please select a job and candidate to start chatting!</div>;
  }

  const chatKey = `${selectedJob}-${selectedCandidate}`;
  console.log(messages[chatKey], "messaaa");
  return (
    <div className="chat-window">
   
      <label className="theme-switch">
        <input
          type="checkbox"
          className="theme-switch__checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <div className="theme-switch__container">
          <div className="theme-switch__clouds"></div>
          <div className="theme-switch__stars-container"></div>
          <div className="theme-switch__circle-container">
            <div className="theme-switch__sun-moon-container">
              <div className="theme-switch__moon">
                <div className="theme-switch__spot"></div>
                <div className="theme-switch__spot"></div>
                <div className="theme-switch__spot"></div>
              </div>
            </div>
          </div>
        </div>
      </label>

      <h3>
        Chat with {selectedCandidate} for {selectedJob} role
      </h3>

      {/* all messages lists */}
      <div className="messages-list">
        {messages[chatKey]?.length ? (
          messages[chatKey].map((message, index) => (
            <Message
              key={index}
              message={message}
              handleDeleteMessage={handleDeleteMessage}
            />
          ))
        ) : (
          <p>No messages found</p>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
        <button className="clear-chat-btn" onClick={handleClearChat}>
          Clear All Chats
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
