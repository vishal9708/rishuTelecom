import React from "react";
import { AiOutlineInstagram, AiFillPhone} from "react-icons/ai";
import { BsDiscord, BsLinkedin, BsPhone } from "react-icons/bs";
import AppStore from "../../Images/Appstore.png";
import PlayStore from "../../Images/playstore.png";
import address from '../../Images/location-sign-svgrepo-com.svg'


import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" text-white flex justify-between items-center max-w-full">
      {/* --------------------------------- */}
      {/* <div className="left-footer flex flex-col justify-between items-center">
        <h1>DOWNLOAD OUR APP</h1>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={PlayStore} alt="playstore-download-icons" />
        <img src={AppStore} alt="appstore-download-icons" />
      </div> */}
      <div className="left-footer flex flex-col justify-between items-center">
        <div style={{marginBottom: '-10px'}}>
          <img src={address} style={{float: "left", top: '18px', width: '15px', height: '15px'}} alt=""  /> 
          <h4 style={{position: "relative", top: '-21px', left: '20px'}}>Address</h4>
        </div>
        <p>Shop No. 1 Lucky Garden 50ft Road, Shani Bazaar Rd, Nangloi, New Delhi, Delhi 110041</p>
        {/* <img src={PlayStore} alt="playstore-download-icons" />
        <img src={AppStore} alt="appstore-download-icons" /> */}
      </div>
      {/* --------------------------------- */}
      <div className="mid-footer flex flex-col justify-between items-center">
        <div className="logo flex justify-between items-center">
          <h1 className="logo-text  truncate">Rishu Telecom</h1>
        </div>
        <p className="mt-2">High quality is our first priority</p>

        <p>Copyrights 2023 &copy; Rishab Soni</p>
      </div>
      {/* --------------------------------- */}
      <div className="right-footer flex flex-col justify-between items-center">
        <h4>Follow Us</h4>
        <div className="follow-icons-container flex justify-between items-center w-full">
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
      {/* --------------------------------- */}
    </footer>
  );
};

export default Footer;
