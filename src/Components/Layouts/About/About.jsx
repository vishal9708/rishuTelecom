import React from "react";
import Avatar from "@mui/material/Avatar";
import { AiFillPhone, AiOutlineInstagram, AiOutlinePhone} from "react-icons/ai";
import { BsDiscord, BsLinkedin } from "react-icons/bs";
import "./About.css";

const About = () => {
  return (
    <div className="aboutSectionContainer">
      <div className="about-info-container">
        <div className="about-avatar-block">
          <h1>About Me</h1>

          <div>
            <Avatar
              style={{ width: "12vmax", height: "12vmax", margin: "1vmax 0" }}
              alt="Founder"
              src="https://res.cloudinary.com/dyprxjmzi/image/upload/v1657268426/Ecommerce%20App%20Avatars/founder_pic1_l1fpxw.jpg"
            />
            <h2>
              {" "}
              <b> Rishab Soni </b>{" "}
            </h2>
          </div>
        </div>

        <div className="about-info-block">
          <div className="info-block">
            This is my first online presence over this webiste, please let me know if any suggestion you have.
          </div>
          <div className="follow-links-block">
          <a
            href="https://www.instagram.com/rishu_telecom_/"
            className="social-media-btn mb-2 text-fuchsia-600"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="tel:+919555752631"
            className="social-media-btn mb-2 text-sky-500"
          >
            <AiFillPhone />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-kumar-10b23519b/"
            className="social-media-btn mb-2 text-blue-700"
          >
            <BsLinkedin />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
