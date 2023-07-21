import { Button } from "@mui/material";
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:rishusoni@gmail.com">
        <Button>Contact: rishusoni@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
