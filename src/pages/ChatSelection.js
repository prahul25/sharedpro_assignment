import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { selectJob, selectCandidate } from "../redux/chatSlice";
import { useNavigate } from "react-router-dom";
import "../style/ChatSelection.css"

const jobs = ["Frontend Developer", "Backend Developer", "UI/UX Designer"];
const candidates = ["Rahul", "Amit", "Priya"];

const ChatSelection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedJob, setSelectedJob] = useState(localStorage.getItem("selectedJob") || "");
  const [selectedCandidate, setSelectedCandidate] = useState(localStorage.getItem("selectedCandidate") || "");

  useEffect(() => {
    localStorage.setItem("selectedJob", selectedJob);
    localStorage.setItem("selectedCandidate", selectedCandidate);
  }, [selectedJob, selectedCandidate]);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleStartChat = () => {
    if (!selectedJob || !selectedCandidate) {
      alert("Please select both a job and a candidate.");
      return;
    }
    dispatch(selectJob(selectedJob));
    dispatch(selectCandidate(selectedCandidate));
    navigate("/chat-window");
  };

  return (
    <div className={`chat-selection ${theme}`}>
        {/* toggle button to change theme */}
      <label className="theme-switch">
        <input
          type="checkbox"
          className="theme-switch__checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <div className="theme-switch__container">
          <div className="theme-switch__clouds"></div>
          <div className="theme-switch__stars-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 144 55"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="..."
                fill="currentColor"
              ></path>
            </svg>
          </div>
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
      {/* toggle button end here */}
      <h2>Select Job & Candidate</h2>

      

      <select value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)}>
        <option value="">Select Job</option>
        {jobs.map((job) => (
          <option key={job} value={job}>
            {job}
          </option>
        ))}
      </select>

      <select value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)}>
        <option value="">Select Candidate</option>
        {candidates.map((candidate) => (
          <option key={candidate} value={candidate}>
            {candidate}
          </option>
        ))}
      </select>

      <button onClick={handleStartChat}>Start Chat</button>
    </div>
  );
};

export default ChatSelection;
