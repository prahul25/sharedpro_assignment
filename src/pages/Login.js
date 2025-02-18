import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "password") {
      dispatch(login());
      navigate("/chat");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={`login-container ${theme}`}>
      <div className="welcome-message">
  Please sign in to continue.
</div>


     
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

      <form className="form" onSubmit={handleLogin}>
        <span className="input-span">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </span>

        <span className="input-span">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </span>

        <button type="submit" className="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
