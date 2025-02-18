# Sharedpro Chat Application with Redux and Protected Routes

This is a React-based chat application built using Redux for state management and protected routes with React Router. The project includes authentication, job and candidate selection, and chat functionality with messages stored in Redux.

## 🚀 Live Demo
[Deployed Application](https://sharedpro-assignment.vercel.app)

## 📺 Video Walkthrough
[![Watch the demo](https://img.youtube.com/vi/6QQuhVc2TmA/maxresdefault.jpg)](https://youtu.be/6QQuhVc2TmA) 

## 📂 Project Structure
```
📦src
 ┣ 📂components
 ┃ ┣ 📜Message.js
 ┃ ┗ 📜ProtectedRoute.js
 ┣ 📂pages
 ┃ ┣ 📜ChatSelection.js
 ┃ ┣ 📜ChatWindow.js
 ┃ ┗ 📜Login.js
 ┣ 📂redux
 ┃ ┣ 📜authSlice.js
 ┃ ┣ 📜chatSlice.js
 ┃ ┗ 📜store.js
 ┣ 📂style
 ┃ ┣ 📜ChatSelection.css
 ┃ ┣ 📜ChatWindow.css
 ┃ ┗ 📜Login.css
 ┣ 📜App.js
 ┗ 📜index.js
```

## 🛠️ Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd chat-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## 🚦 Usage
- **Login Page:** Enter valid credentials (`test@example.com`, `password`)
- **Chat Selection:** Select a job and candidate to start chatting.
- **Chat Window:** Send, delete, and clear messages.
- **Theme Toggle:** Switch between light and dark mode.

## 🧩 Features
- Authentication with Redux and Protected Routes
- Persistent theme, job, and candidate selection with localStorage
- Chat message management (add, delete, clear) with Redux
- Animated theme switch component (Uiverse.io inspired)
- Responsive design with traditional CSS

## 🛡️ Protected Routes
The `ProtectedRoute` component ensures only authenticated users can access chat pages.

## 🌐 Technologies Used
- **React** (Hooks, React Router)
- **Redux Toolkit** (State Management)
- **CSS** (Traditional styling)
- **LocalStorage** (Persistent state)
- **React Icons** (UI Enhancements)

## 💡 Improvements & Future Enhancements
- Add backend for real-time messaging
- Implement user registration and authentication with a database
- Add message search and filtering
- Optimize performance with memoization and lazy loading

---
Made with ❤️ by Rahul
