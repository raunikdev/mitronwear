import React, { useState, useEffect } from "react";
import "./css/Home.css";
import Modal from "./Modal";
import axios from "axios"

function Home() {
  const [time, setTime] = useState(new Date());
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sucessfully,setSucessfully] = useState("");

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
  const handleSubmit = async () => {
    if (email) {

      const response = await axios.post(`https://mitronwear-api.onrender.com/api/join-waitlist`,{email});
      if(response?.status===200){
        setModalOpen(false);
      }else{
        alert("email not saved . . . ")
      }
     
      // console.log(email, "sent sucessfully to database");
      // setSucessfully(`${email}, is added in the waitlistergw`);

    } else {
      setError("Email cannot be empty");
    }
  };

  return (
    <div className="home">
      {isModalOpen && (
        <Modal isOpen={() => {}} onClose={() => {}}>
          <div className="all-modal">
            <div style={{ display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems:"center",
                          height:"100%",
                          width:"100%",
                          gap: "30px"
             }}>
              <div>
                <label className="enter-email-text" htmlFor={"email"}>JOIN WAITLIST</label>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  name={"email"}
                  onChange={handleEmailInput}
                  placeholder="example@example.com"
                  className="input-fot-email"/>
                <div
                  style={ {color: email? "white":"red", fontSize: "12px", marginTop: "2px" }}
                >
                  {email? sucessfully: error}
                </div>
              </div>
              <button className="submit-button"
                      onClick={handleSubmit}>Submit</button>

            </div>

            <button onClick={handleModalClose} className="close-button">x</button>
          </div>
        </Modal>
      )}

      <p className="timer-heading">The Website will Re-release in:</p>
      <p className="clock">{Timer()}</p>
      <div className="join-explore">
        <button className="join-waitlist" onClick={handleJoinWaitList}>
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
