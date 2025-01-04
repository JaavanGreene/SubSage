import React, { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false); // Tracks validation errors

  const closeModal = () => setIsModalOpen(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setError(true); // Show error message
      return;
    }
    setError(false); // Clear any previous error
    setIsEmailSubmitted(true); // Transition to success message
  };

  return (
    <div className="app">
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>

            {!isEmailSubmitted ? (
              <div className="modal-content">
                <h2>Enter Your Email</h2>
                <form onSubmit={handleEmailSubmit} className="form-container">
                  <input
                    type="email"
                    placeholder="example@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`email-input ${error ? "input-error" : ""}`}
                  />
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </form>
                {error && (
                  <p className="error-text">Please enter a valid email address.</p>
                )}
              </div>
            ) : (
              <div className="modal-content">
                <h2>Thank you for providing an email</h2>
                <button className="submit-btn" onClick={closeModal}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;