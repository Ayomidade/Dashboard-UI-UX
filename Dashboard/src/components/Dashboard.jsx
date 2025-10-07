import React from "react";
import StatCard from "./StatCard";
import RevenueChart from "./RevenueChart";
import TopProducts from "./TopProducts";
import Header from "./Header";

const Dashboard = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="main">
        <div className="hero">
          <div className="cards">
            <StatCard
              title={"Customers"}
              value={"$45,320"}
              PnL={"+5.23%"}
              increase={true}
              text={"since last month"}
            />
            <StatCard
              title={"Orders"}
              value={"$45,320"}
              PnL={"-1.23%"}
              increase={false}
              text={"since last month"}
            />
            <StatCard
              title={"Earnings"}
              value={"$7,524"}
              PnL={"-7.85%"}
              increase={false}
              text={"since last month"}
            />
            <StatCard
              title={"Growth"}
              value={"+35.52%"}
              PnL={"+3.72%"}
              increase={true}
              text={"since last month"}
            />
          </div>
          <RevenueChart />
        </div>
        <div className="sub-hero">
          <TopProducts />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
