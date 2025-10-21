import React from "react";
// import "./StatCard.css";

export default function StatCard({ title, value, PnL, increase, text }) {
  return (
    <div className="stat-card">
      <p style={{ color: "GrayText",}}>{title}</p>
      <h2>{value}</h2>
      <span
        style={{ fontSize: "15px" }}
        className={increase ? "profit" : "loss"}
      >
        {PnL}
      </span>
      <p style={{ fontSize: "12px" }}>{text}</p>
    </div>
  );
}
