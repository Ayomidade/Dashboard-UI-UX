import React from "react";
import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
import TopProducts from "./TopProducts";
import Header from "./Header";
import PieChart from "./PieChart";
import Cards from "./Cards";

const Dashboard = () => {
  return (
    <>
      <div className="main">
        <Header />
        <div className="hero">
          <Cards />
          <RevenueChart />
        </div>
        <div className="sub-hero">
          <TopProducts />
          <PieChart />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
