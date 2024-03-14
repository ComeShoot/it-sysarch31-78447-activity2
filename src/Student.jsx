import React from "react";

function Student({ photo, name, email }) {
  return (
    <div className="card">
      <img src={photo} alt="profile" />
      <h2 id="name">{name}</h2>
      <p id="email">{email}</p>
    </div>
  );
}

export default Student;