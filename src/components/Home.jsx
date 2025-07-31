import React, { useState, useEffect } from "react";
import "./css/Home.css";
import Modal from "./Modal";

function Home() {
  const [time, setTime] = useState(new Date());
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const Timer = () => {
    const now = time;
    const targetDate = new Date("2025-08-21T00:00:00");

    const diff = targetDate - now;

    if (diff <= 0) {
      return "Time's up!";
    }
    function padZero(value) {
      return value < 10 ? `0${value}` : value;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = padZero(Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = padZero(Math.floor((diff / (1000 * 60)) % 60));
    const seconds = padZero(Math.floor((diff / 1000) % 60));

    return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  };

  const handleJoinWaitList = () => {
    setModalOpen(true);
    console.log("button clicked");
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleEmailInput = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setEmail(value);
    setError("");
  };
  const handleSubmit = () => {
    if (email) {
      console.log(email, "sent sucessfully to database");
    } else {
      setError("Email cannot be empty");
    }
  };

  return (
    <div className="home">
      {isModalOpen && (
        <Modal isOpen={() => {}} onClose={() => {}}>
          <div
            style={{
              backgroundColor: "white",
              height: "50px",
              color: "black",
              marginBottom: "4px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <label htmlFor={"email"}>Enter you email id:</label>
              </div>
              <div>
                <input
                  id="email"
                  value={email}
                  name={"email"}
                  onChange={handleEmailInput}
                ></input>
                <div
                  style={{ color: "red", fontSize: "12px", marginTop: "2px" }}
                >
                  {error}
                </div>
              </div>
            </div>

            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </Modal>
      )}

      <p className="timer-heading">The Website will Re-release in:</p>
      <p className="clock">{Timer()}</p>
      <div className="join-explore">
        <button className="join-waitlist" >
          Join WaitList
        </button>
        <a href="#tshirtheader">
          <button className="explore-design">
            Explore Design
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
