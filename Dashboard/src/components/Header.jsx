import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1>Dashboard</h1>
        <p>Overview of recent activity</p>
      </div>
      <div className="profile">
        <input type="text" placeholder="Search..." />
        <div className="avatar">A</div>
      </div>
    </header>
  );
}
