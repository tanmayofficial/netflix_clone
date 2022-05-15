import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header_component" id="header_component">
      <div className="header_group1">
        <div className="header_name">NETFLIX</div>
        <div className="header_options">
          <span className="header_option">Home</span>
          <span className="header_option">TV Shows</span>
          <span className="header_option">Movies</span>
          <span className="header_option">News & Popular</span>
          <span className="header_option">My List</span>
        </div>
      </div>

      <div className="header_group2">
        <div className="header_searchbar">
          <input type="text" />
        </div>
        <div className="header_profile_name" >Tanmay Paul</div>
      </div>
    </div>
  );
}

export default Header;