import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Orders from "../components/Orders";
import Dashboard from "../components/dashboard/Dashboard";
import Collections from "../components/Collections";
import Products from "../components/Products";
import Discounts from "../components/Discounts";
import Employees from "../components/Employees";
import Customers from "../components/Customers";
import Online from "../components/Online";
import Marketing from "../components/Marketing";
import Marketplace from "../components/marketplace/Marketplace";
import Watchlist from "../components/watchlist/Watchlist";

const Home = () => {
  const [currentScreen, setCurrentScreen] = useState("marketplace");

  const DynamicDisplay = () => {
    switch (currentScreen) {
      case "dashboard":
        return <Dashboard />;
      case "pastRents":
        return <Orders />;
      case "marketplace":
        return <Marketplace />;
      case "watchlist":
        return <Watchlist />;
      case "collections":
        return <Collections />;
      case "products":
        return <Products />;
      case "discounts":
        return <Discounts />;
      case "employees":
        return <Employees />;
      case "customers":
        return <Customers />;
      case "onlineStore":
        return <Online />;
      case "marketing":
        return <Marketing />;
      default:
        return;
    }
  };

  const handleSwitch = (currentView) => {
    setCurrentScreen(currentView);
  };

  return (
    <>
      <Layout handler={handleSwitch}>
        <DynamicDisplay />
      </Layout>
    </>
  );
};

export default Home;
