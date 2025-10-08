import React from "react";
import PieChart from "./PieChart";

const TopProducts = () => {
  const products = [
    {
      id: "1",
      name: "Pocket Drone 2.4G",
      date: "07 April 2018",
      price: "129.99",
      quantity: "32",
      amount: "$6089.58",
    },
    {
      id: "2",
      name: "Marco Lightweight Shirt",
      date: "15 March 2018",
      price: "$55.99",
      quantity: "47",
      amount: "$3689.73",
    },
    {
      id: "3",
      name: "Lightweight Jacket",
      date: "10 March 2018",
      price: "$73.99",
      quantity: "53",
      amount: "$1689.57",
    },
    {
      id: "4",
      name: "DJI Phantom 4 PRO",
      date: "07 March 2018",
      price: "$499.99",
      quantity: "25",
      amount: "$8489.05",
    },
    {
      id: "5",
      name: "ST SwellPro Drone",
      date: "02 March 2018",
      price: "$219.99",
      quantity: "12",
      amount: "$2689.58",
    },
    {
      id: "2",
      name: "Marco Lightweight Shirt",
      date: "15 March 2018",
      price: "$55.99",
      quantity: "47",
      amount: "$3689.73",
    },
  ];
  return (
    <>
      <div style={{ margin: "0px", width:"70%" }}>
        <div className="export">
          <p style={{ color: "GrayText", fontSize: "18px" }}>
            Top Selling Products
          </p>
          <button>Export</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>PRODUCT NAME</th>
              <th>DATE/TIME</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.date}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TopProducts;
