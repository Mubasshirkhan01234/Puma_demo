import React from "react";

const Display = ({ orderData, userId }) => {
  const renderData = () => {
    if (orderData) {
      const userOrders = orderData.filter((item) => item.userId === userId);
      if (userOrders.length > 0) {
        return userOrders.map((userOrder) => (
          <tr key={userOrder._id}>
            <td>{userOrder.orderId}</td>
            <td>{userOrder.merchandise_name}</td>
            <td>{userOrder.name}</td>
            <td>{userOrder.email}</td>
            <td>{userOrder.price}</td>
            <td>{userOrder.phone}</td>
            <td>{userOrder.quantity}</td>
          </tr>
        ));
      } else {
        return (
          <tr>
            <td colSpan="7">No orders found for the user.</td>
          </tr>
        );
      }
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5 custom_white">
        <center>
          <h3>Orders</h3>
        </center>
        <hr className="custom_hr" />
        <table className="table dark_goals">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Merchandise Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price(₹)</th>
              <th>Phone</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
