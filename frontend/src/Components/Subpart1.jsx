import axios from "axios";
import React from "react";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PreschoolComponent from "./Subpart";

const DeskstopNavList = () => {
  const navigate = useNavigate();

  const islogin = useSelector((store) => store.Authreducer.data?.user);

  const handelLogout=()=>{
    axios.get('')
        
    localStorage.removeItem('token')
    
    window.location.href="/";
  }

  return (
    <ul className="desktop-nav-top-right">
      <li className="location-nav">
        {" "}
        <CiLocationOn fontSize={"18px"} /> Select location
      </li>
      <li>
        <PreschoolComponent />
      </li>
      <li>Support</li>
      <li>Track Order</li>
      <li>FirstCry Parenting</li>
      {islogin ? (
        <li onClick={handelLogout} >Logout</li>
      ) : (
        <li
          className="nav-login"
          style={{ textDecoration: "none" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login / Register
        </li>
      )}
      <li className="location-nav">
        <CiHeart fontSize={"20px"} />
        Shortlist
      </li>
    </ul>
  );
};

export default DeskstopNavList;