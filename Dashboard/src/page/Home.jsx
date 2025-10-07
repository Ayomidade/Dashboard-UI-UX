import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Orders from "../components/Orders";
import Dashboard from "../components/Dashboard";
import Analytics from "../components/Analytics";
import Categories from "../components/Categories";
import Collections from "../components/Collections";
import Products from "../components/Products";
import Discounts from "../components/Discounts";
import Employees from "../components/Employees";
import Customers from "../components/Customers";
import Online from "../components/Online";
import Marketing from "../components/Marketing";
import Header from "../components/Header";

const Home = () => {
  const [currentScreen, setCurrentScreen] = useState("");

  const DynamicDisplay = () => {
    switch (currentScreen) {
      case "dashboard":
        return <Dashboard />;

      case "orders":
        return <Orders />;

      case "analytics":
        return <Analytics />;

      case "categories":
        return <Categories />;
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
        return <Dashboard />;
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
