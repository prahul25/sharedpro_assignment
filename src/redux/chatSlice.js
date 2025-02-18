import { createSlice } from "@reduxjs/toolkit";

const storedChats = JSON.parse(localStorage.getItem("chatMessages")) || {};

const selectedJob = localStorage.getItem("selectedJob") || null;
const selectedCandidate = localStorage.getItem("selectedCandidate") || null;

const initialState = {
  selectedJob: selectedJob,
  selectedCandidate: selectedCandidate,
  messages: storedChats,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    selectJob: (state, action) => {
      state.selectedJob = action.payload;
      localStorage.setItem("selectedJob", action.payload); 
    },
    selectCandidate: (state, action) => {
      state.selectedCandidate = action.payload;
      localStorage.setItem("selectedCandidate", action.payload); 
    },
    addMessage: (state, action) => {
      const { message } = action.payload;
      const { selectedJob, selectedCandidate } = state;

      if (!selectedJob || !selectedCandidate) {
        console.log("No job or candidate selected!");
        return;
      }

      const chatKey = `${selectedJob}-${selectedCandidate}`;

      const updatedMessages = { ...state.messages };
      if (!updatedMessages[chatKey]) {
        updatedMessages[chatKey] = [];
      }

      updatedMessages[chatKey] = updatedMessages[chatKey].concat(message);

      state.messages = updatedMessages;

      localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
    },
    clearChat: (state) => {
      const { selectedJob, selectedCandidate } = state;

      if (!selectedJob || !selectedCandidate) {
        console.log("No job or candidate selected to clear chat!");
        return;
      }

      const chatKey = `${selectedJob}-${selectedCandidate}`;

      const updatedMessages = { ...state.messages };
      delete updatedMessages[chatKey];

      state.messages = updatedMessages;

      localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
    },
    deleteMessage: (state, action) => {
      const { messageTimestamp } = action.payload;
      const { selectedJob, selectedCandidate } = state;

      if (!selectedJob || !selectedCandidate) {
        console.log("No job or candidate selected to delete message!");
        return;
      }

      const chatKey = `${selectedJob}-${selectedCandidate}`;

      const updatedMessages = { ...state.messages };
      if (updatedMessages[chatKey]) {
        updatedMessages[chatKey] = updatedMessages[chatKey].filter(
          (message) => message.timestamp !== messageTimestamp
        );
      }

      state.messages = updatedMessages;

      localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
    },
  },
});

export const { selectJob, selectCandidate, addMessage, clearChat, deleteMessage } = chatSlice.actions;
export default chatSlice.reducer;
