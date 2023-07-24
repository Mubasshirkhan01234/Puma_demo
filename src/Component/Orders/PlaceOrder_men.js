import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ViewOrder from "./ViewOrder";

const apiUrl = "https://puma-i1u3.onrender.com/men_wear";
const url = "https://puma-i1u3.onrender.com/placeOrder";

const PlaceOrder = () => {
  const params = useParams();
  const navigate = useNavigate();

  const fetchPriceByMerchandiseName = async (merchandiseName) => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const merchandise = data.find(
        (item) => item.merchandise_name === merchandiseName
      );
      if (merchandise) {
        return merchandise.price;
      }
    } catch (error) {
      console.error(error);
    }
    return null; 
  };

  const [price, setPrice] = useState(0);
  const [values, setValues] = useState({
    orderId: Math.round(Math.random() * 100000),
    merchandise_name: params.merchandiseName,
    quantity: 0,
    name: "",
    email: "",
    price: 0,
    phone: "",
    city: "",
    state: "",
    address: ""
  });

  useEffect(() => {
    const fetchMerchandisePrice = async () => {
      const fetchedPrice = await fetchPriceByMerchandiseName(
        params.merchandiseName
      );
      if (fetchedPrice) {
        setPrice(fetchedPrice);
        setValues((prevValues) => ({
          ...prevValues,
          price: parseFloat(fetchedPrice)
        }));
      }
    };

    fetchMerchandisePrice();
  }, [params.merchandiseName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'quantity') {
      const quantity = parseInt(value);
      if (!isNaN(quantity)) {
        const totalPrice = price * quantity;
        setValues((prevValues) => ({
          ...prevValues,
          [name]: quantity,
          price: totalPrice 
        }));
      }
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value
      }));
    }
  };

  const checkout = () => {
    const { name, email, phone, city, state, address } = values;

    if (name && email && phone && city && state && address) {
      console.log(values);
      fetch(url, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
        .then((response) => {
          if (response.ok) {
            navigate("/viewOrder");
          } else {
            throw new Error("Error placing the order.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Please fill in all fields before placing the order.");
    }
  };

  return (
    <>
      <div className="container mt-5 custom_white">
        <h1>Place Order</h1>
        <hr className="custom_hr" />
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">
              NAME
            </label>
            <input
              type="text"
              className="form-control dark_goals"
              name="name"
              value={values.name}
              onChange={handleInputChange}
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label fw-bold">
                EMAIL
              </label>
              <input
                type="email"
                className="form-control dark_goals"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="contact number" className="form-label fw-bold">
                CONTACT NO.
              </label>
              <input
                type="text"
                className="form-control dark_goals"
                name="phone"
                value={values.phone}
                onChange={handleInputChange}
                id="contact_number"
                placeholder="Enter your contact number"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="city" className="form-label fw-bold">
                CITY
              </label>
              <input
                type="text"
                className="form-control dark_goals"
                name="city"
                value={values.city}
                onChange={handleInputChange}
                id="city"
                placeholder="Enter your city"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="state" className="form-label fw-bold">
                STATE
              </label>
              <input
                type="text"
                className="form-control dark_goals"
                name="state"
                value={values.state}
                onChange={handleInputChange}
                id="state"
                placeholder="Enter your state"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label fw-bold">
              ADDRESS
            </label>
            <textarea
              className="form-control dark_goals"
              name="address"
              value={values.address}
              onChange={handleInputChange}
              id="address"
              placeholder="Enter your address"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="city" className="form-label fw-bold">
                PRODUCT
              </label>
              <input
                type="text"
                className="form-control dark_goals"
                id="city"
                placeholder={params.merchandiseName}
                readOnly
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="state" className="form-label fw-bold">
                COST
              </label>
              <div className="input-group">
                <span className="input-group-text">&#8377;</span>
                <input
                  type="number"
                  className="form-control dark_goals"
                  id="state"
                  value={price}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label fw-bold">
              QUANTITY
            </label>
            <input
              type="number"
              name="quantity"
              value={values.quantity}
              onChange={handleInputChange}
              className="form-control dark_goals"
              id="quantity"
              placeholder="Enter the quantity"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label fw-bold">
              TOTAL COST
            </label>
            <div className="input-group">
              <span className="input-group-text">&#8377;</span>
              <input
                type="number"
                name="total cost"
                value={values.price * values.quantity}
                onChange={handleInputChange}
                className="form-control dark_goals"
                id="total_cost"
                placeholder="Enter the quantity"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="payment" className="form-label fw-bold">
              SELECT PAYMENT METHOD
            </label>
            <select className="form-select dark_goals" id="payment" required>
              <option value="">Select a payment method</option>
              <option value="credit_card">Credit / Debit Card</option>
              <option value="paypal">UPI Methods</option>
              <option value="bank_transfer">Net Banking</option>
            </select>
          </div>
        </form>
        <div className="mb-5 mt-5 d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-success btn-lg"
            onClick={checkout}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
