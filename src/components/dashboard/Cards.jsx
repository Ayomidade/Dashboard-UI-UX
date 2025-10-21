import React from 'react'
import StatCard from './StatCard';

const Cards = () => {
  return (
    <>
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
    </>
  );
}

export default Cards