import React, { useState, useEffect, useRef } from 'react';
import avtar from "../assets/images/avatar-4.jpg";
import { MdOutlineArrowDropDown } from "react-icons/md";


const ProfileMenu = ({ userName, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="profile">
      <div className="profile-info" onClick={toggleDropdown}>
        {/* <img src={avtar} alt="User Avatar" className="avatar" /> */}
        <span className="username">{userName}<MdOutlineArrowDropDown /></span>
      </div>
      {dropdownOpen && (
        <div className="dropdown" ref={dropdownRef}>
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
