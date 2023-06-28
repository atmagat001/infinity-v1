import React from "react";
import { useState } from "react";
import Popover from "./popover";
import axios from "axios";

function Hero() {
  const [email, setEmail] = useState("");
  const [popover, setPopover] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", { email: email })
      .then((res) => {
        console.log(res);
        setMessage(`Thank you for signing up ${res.data.email}`);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
    setPopover(true);
  };

  const handleClose = () => {
    setPopover(false);
  };

  return (
    <div>
      <div className="hero hero-container">
        <div className="hero-background">
          <h1 className="animate__fadeInDown">Unlimited Possibilities</h1>
          <h3>We gather data everyday, so you wont have to</h3>
          <div className="hero-form">
            <input
              type="email"
              placeholder="Enter your email address"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Sign-up now, Its Free!</button>
          </div>
        </div>
      </div>

      <div className={popover ? "popover" : "hidden"}>
        <div
          className={popover ? "pop-container hidden" : "pop-container popover"}
          style={{
            backgroundColor: "white",
            width: "400px",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          }}
        >
          <h3
            style={{
              color: "var(--blue)",
            }}
          >
            {message}{" "}
          </h3>

          <button
            style={{
              backgroundColor: "var(--blue)",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              marginTop: "50px",
              width: "100px",
              height: "40px",
              fontSize: "1rem",
              fontWeight: "bold",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            }}
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
