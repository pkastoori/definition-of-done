import React from "react";

function About() {
  return (
    <div className="about container">
      <div className="card">
        <div className="card-content">
          <span className="card-title">About</span>
          <p>Rules defined for a team for code review to be considered done</p>
          <ol>
            <li>Verify directory and file organization are followed</li>
            <li>Verify proper comments and declarations are in place</li>
            <li>Verify naming conventions are followed</li>
            <li>Verify miscellaneous practices are followed</li>
            <li>Verify coding standards are taken care</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default About;
