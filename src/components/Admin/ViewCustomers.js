import React, { useState, useEffect } from "react";
import Customeritem from "./CustomerItem";

import "./ViewCustomers.css";

const Viewcustomers = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const getCustomers = async () => {
      const customerList = await fetchCustomers();
      setCustomers(customerList);
    };
    getCustomers();
  }, []);

  const fetchCustomers = async () => {
    const res = await fetch(process.env.REACT_APP_API + "customer");
    const data = await res.json();

    return data;
  };
  return (
    <section className="customer-section">
      <ul className="customers-list">
        {customers.length > 0 &&
          customers.map((customer) => <Customeritem customerItem={customer} />)}
      </ul>
    </section>
  );
};

export default Viewcustomers;
