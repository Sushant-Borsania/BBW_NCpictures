import React from "react";

export default function About() {
  return (
    <div className="container about_container">
      <div className="about_left">
        <h1 className="heading_1">About</h1>
        <p className="section_tag">
          We create <span className="section_tag__special">incredible</span> products
        </p>
        <p className="section_details">
          We specializes in the wedding photography. We help create the best memories of once in a
          lifetime event. I am sure you don't want to miss them and we make sure you cherish these
          memories by looking at beautiful pictures.
        </p>
        <button className="main_button">About us</button>
      </div>
      <div className="about_right">
        <div className="about_right__main"></div>
        <div className="about_right__desc">
          <p className="section_details">Apparently we had reached a great height in atmosphere.</p>
        </div>
      </div>
    </div>
  );
}
