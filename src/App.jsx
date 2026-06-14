import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    college: "",
  });

  const [showAI, setShowAI] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage("confirmation");
  };

  return (
    <div className="app">

      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("register")}>Register</button>
      </nav>

      {page === "home" && (
        <div className="card">
          <h1>🤖 AI & Machine Learning Workshop</h1>

          <p>
            Learn Artificial Intelligence, Machine Learning,
            Generative AI and build real-world projects.
          </p>

          <button onClick={() => setShowAI(true)}>
            Ask AI Assistant
          </button>
        </div>
      )}

      {page === "about" && (
        <div className="card">
          <h1>About Workshop</h1>

          <ul>
            <li>Introduction to AI</li>
            <li>Machine Learning Basics</li>
            <li>Generative AI</li>
            <li>Data Science Concepts</li>
            <li>Mini Project Development</li>
            <li>Certificate Provided</li>
          </ul>

          <h3>Duration: 2 Days</h3>
          <h3>Mode: Offline / Online</h3>
        </div>
      )}

      {page === "register" && (
        <div className="card">
          <h1>Workshop Registration</h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="college"
              placeholder="College Name"
              required
              onChange={handleChange}
            />

            <button type="submit">
              Register Now
            </button>

          </form>
        </div>
      )}

      {page === "confirmation" && (
        <div className="card success">
          <h1>🎉 Registration Successful</h1>

          <h2>{formData.name}</h2>

          <p>
            Thank you for registering for the
            AI & Machine Learning Workshop.
          </p>

          <p>Email: {formData.email}</p>
          <p>Department: {formData.department}</p>
          <p>College: {formData.college}</p>

          <h3>Certificate will be provided.</h3>
        </div>
      )}

      {showAI && (
        <div className="modal">
          <div className="modal-content">

            <h2>🤖 AI Assistant</h2>

            <p>
              Welcome! This workshop covers Artificial
              Intelligence, Machine Learning, Data Science,
              and Generative AI with practical examples.
            </p>

            <button onClick={() => setShowAI(false)}>
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;